package com.api.faculink.services;

import com.api.faculink.dto.*;
import com.api.faculink.models.RouteCoordinatesModel;
import com.api.faculink.models.StopRouteModel;
import com.api.faculink.models.TransportModel;
import com.api.faculink.models.TransportStopModel;
import com.api.faculink.repositories.IRouteCoordinatesRepository;
import com.api.faculink.repositories.IStopRoutesRepository;
import com.api.faculink.repositories.ITransportRepository;
import com.api.faculink.repositories.ITransportStopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransportService {
    @Autowired
    ITransportRepository transportRepository;
    @Autowired
    ITransportStopRepository transportStopRepository;
    @Autowired
    IStopRoutesRepository stopRoutesRepository;
    @Autowired
    IRouteCoordinatesRepository routeCoordinatesRepository;

    public TransportDTO getTransport(Long id) {
        TransportModel tm = transportRepository.getById(id);
        TransportDTO transportDTOLocal = new TransportDTO();

        transportDTOLocal.setTransportId(tm.getId());
        transportDTOLocal.setTransportName(tm.getName());
        transportDTOLocal.setTransportImagen(tm.getImagen());
        transportDTOLocal.setTransportFrequency(tm.getFrequency());
        transportDTOLocal.setTransportOrigin(tm.getOrigin());
        transportDTOLocal.setTransportDestination(tm.getDestination());

        transportDTOLocal.setTransportTypeOfTransportName(tm.getCatTypeOfTransportModel().getName());
        transportDTOLocal.setTransportTypeOfTransportImagen(tm.getCatTypeOfTransportModel().getImagen());

        transportDTOLocal.setTransportLineOfTransportName(tm.getCatLineOfTransportModel().getName());
        transportDTOLocal.setTransportLineOfTransportCompleteName(tm.getCatLineOfTransportModel().getImagen());
        transportDTOLocal.setTransportLineOfTransportImagen(tm.getCatLineOfTransportModel().getImagen());

        // Obtener la primer parada
        transportDTOLocal.setFirstStop(
                Long.valueOf(
                        transportStopRepository.getByFirstStop(
                                transportDTOLocal.getTransportId()
                        ).get(0).split(",")[1]
                )
        );
        // Obtener la ultima parada
        transportDTOLocal.setEndStop(
                Long.valueOf(
                        transportStopRepository.getByEndStop(
                                transportDTOLocal.getTransportId()
                        ).get(0).split(",")[1]
                )
        );

        // Obtener el recorrido del transporte
        List<RouteCoordinatesModel> routeCoordinates = routeCoordinatesRepository.findByIdRoute(transportDTOLocal.getTransportId());
        List<RouteCoordinatesDTO> routes = new ArrayList<>();
        for (RouteCoordinatesModel rc : routeCoordinates) {
            RouteCoordinatesDTO RouteLocal = new RouteCoordinatesDTO();
            RouteLocal.setId(rc.getId());
            RouteLocal.setLatitude(rc.getLatitude());
            RouteLocal.setLongitude(rc.getLongitude());

            routes.add(RouteLocal);
        }
        transportDTOLocal.setRoute(routes);



        // Agregar los trayectos
        List<StopRouteModel> routesStopFirst = stopRoutesRepository.findByStopFrom(transportDTOLocal.getFirstStop());
        List<ExtraInfoStopRoutesDTO> stopsRouteInfoFirst = new ArrayList<>();
        for (StopRouteModel routeStopInd : routesStopFirst) {
            ExtraInfoStopRoutesDTO newstopsRouteInfo = new ExtraInfoStopRoutesDTO();
            newstopsRouteInfo.setStopRouteId(routeStopInd.getId());
            newstopsRouteInfo.setDistance(routeStopInd.getDistance());
            newstopsRouteInfo.setTime(routeStopInd.getTime());
            newstopsRouteInfo.setPrice(routeStopInd.getPrice());

            newstopsRouteInfo.setStopFromId(routeStopInd.getStopFrom().getId());
            newstopsRouteInfo.setStopFromName(routeStopInd.getStopFrom().getName());

            newstopsRouteInfo.setStopToId(routeStopInd.getStopTo().getId());
            newstopsRouteInfo.setStopToName(routeStopInd.getStopTo().getName());

            stopsRouteInfoFirst.add(newstopsRouteInfo);
        }
        transportDTOLocal.setTrayectoOrigin(stopsRouteInfoFirst);

        List<StopRouteModel> routesStopEnd = stopRoutesRepository.findByStopFrom(transportDTOLocal.getEndStop());
        List<ExtraInfoStopRoutesDTO> stopsRouteInfoEnd = new ArrayList<>();
        for (StopRouteModel routeStopInd : routesStopEnd) {
            ExtraInfoStopRoutesDTO newstopsRouteInfo = new ExtraInfoStopRoutesDTO();
            newstopsRouteInfo.setStopRouteId(routeStopInd.getId());
            newstopsRouteInfo.setDistance(routeStopInd.getDistance());
            newstopsRouteInfo.setTime(routeStopInd.getTime());
            newstopsRouteInfo.setPrice(routeStopInd.getPrice());

            newstopsRouteInfo.setStopFromId(routeStopInd.getStopFrom().getId());
            newstopsRouteInfo.setStopFromName(routeStopInd.getStopFrom().getName());

            newstopsRouteInfo.setStopToId(routeStopInd.getStopTo().getId());
            newstopsRouteInfo.setStopToName(routeStopInd.getStopTo().getName());

            stopsRouteInfoEnd.add(newstopsRouteInfo);
        }
        transportDTOLocal.setTrayectoDestination(stopsRouteInfoEnd);



        //Obtener todas las paradas del transporte
        List<TransportStopModel> transportStopModels = transportStopRepository.getByTransports(transportDTOLocal.getTransportId());
        List<TransportStopDTO> transportComponent = new ArrayList<>();
        for (TransportStopModel transportStopInd : transportStopModels) {
            TransportStopDTO transportLocal = new TransportStopDTO();

            transportLocal.setName(transportStopInd.getStopModel().getName());
            transportLocal.setImagen(transportStopInd.getStopModel().getImagen());
            transportLocal.setLatitude(transportStopInd.getStopModel().getLatitude());
//            transportLocal.setLongitude("hola");
            transportLocal.setLongitude(transportStopInd.getStopModel().getLongitude());
//            transportLocal.setStopId(transportStopInd.getStopModel().getId());

            transportComponent.add(transportLocal);
        }
        transportDTOLocal.setTransportStops(transportComponent);




        return transportDTOLocal;
    }


    public TransportDTO getTransportByIdAndStopId(Long id, Long originStop, Long destinationStop) {
        TransportModel tm = transportRepository.getById(id);
        TransportDTO transportDTOLocal = new TransportDTO();

        transportDTOLocal.setTransportId(tm.getId());
        transportDTOLocal.setTransportName(tm.getName());
        transportDTOLocal.setTransportImagen(tm.getImagen());
        transportDTOLocal.setTransportFrequency(tm.getFrequency());
        transportDTOLocal.setTransportOrigin(tm.getOrigin());
        transportDTOLocal.setTransportDestination(tm.getDestination());

        transportDTOLocal.setTransportTypeOfTransportName(tm.getCatTypeOfTransportModel().getName());
        transportDTOLocal.setTransportTypeOfTransportImagen(tm.getCatTypeOfTransportModel().getImagen());

        transportDTOLocal.setTransportLineOfTransportName(tm.getCatLineOfTransportModel().getName());
        transportDTOLocal.setTransportLineOfTransportCompleteName(tm.getCatLineOfTransportModel().getImagen());
        transportDTOLocal.setTransportLineOfTransportImagen(tm.getCatLineOfTransportModel().getImagen());


        // Obtener la primer parada
        transportDTOLocal.setFirstStop(
                Long.valueOf(
                        transportStopRepository.getByFirstStop(
                                transportDTOLocal.getTransportId()
                        ).get(0).split(",")[1]
                )
        );
        // Obtener la ultima parada
        transportDTOLocal.setEndStop(
                Long.valueOf(
                        transportStopRepository.getByEndStop(
                                transportDTOLocal.getTransportId()
                        ).get(0).split(",")[1]
                )
        );

        // Obtener el recorrido del transporte
        List<RouteCoordinatesModel> routeCoordinates = routeCoordinatesRepository.findByIdRoute(transportDTOLocal.getTransportId());
        List<RouteCoordinatesDTO> routes = new ArrayList<>();
        for (RouteCoordinatesModel rc : routeCoordinates) {
            RouteCoordinatesDTO RouteLocal = new RouteCoordinatesDTO();
            RouteLocal.setId(rc.getId());
            RouteLocal.setLatitude(rc.getLatitude());
            RouteLocal.setLongitude(rc.getLongitude());

            routes.add(RouteLocal);
        }
        transportDTOLocal.setRoute(routes);


        List<TransportStopModel> transportStopModelList = transportStopRepository.getByStopsBetween(
                transportDTOLocal.getTransportId(),
                destinationStop ==
                        transportDTOLocal.getEndStop() ? originStop : transportDTOLocal.getFirstStop(),
                destinationStop ==
                        transportDTOLocal.getEndStop() ? transportDTOLocal.getEndStop() : originStop
        );
        List<TransportStopDTO> stopsRouteInfo = new ArrayList<>();
        for (TransportStopModel tsml : transportStopModelList) {
            TransportStopDTO newStopsRouteInfo = new TransportStopDTO();
            newStopsRouteInfo.setName(tsml.getStopModel().getName());
            newStopsRouteInfo.setImagen(tsml.getStopModel().getImagen());
            newStopsRouteInfo.setStopId(tsml.getStopModel().getId());
            newStopsRouteInfo.setLatitude(tsml.getStopModel().getLatitude());
            newStopsRouteInfo.setLongitude(tsml.getStopModel().getLongitude());

            stopsRouteInfo.add(newStopsRouteInfo);

        }
        transportDTOLocal.setTransportStops(stopsRouteInfo);

        // Agregar todas los bases
        List<TransportStopModel> tsm = transportStopRepository.getByTransports(transportDTOLocal.getTransportId());
        List<StopInfoBasicDTO> stopInfoBasic = new ArrayList<>();
        for (TransportStopModel tsml : tsm) {
            StopInfoBasicDTO stopInfoBasicLocal = new StopInfoBasicDTO();

            stopInfoBasicLocal.setId(tsml.getStopModel().getId());
            stopInfoBasicLocal.setName(tsml.getStopModel().getName());

            stopInfoBasic.add(stopInfoBasicLocal);
        }
        transportDTOLocal.setAllStops(stopInfoBasic);

        /*
        List<StopRouteModel> routesStopFirst = stopRoutesRepository.findByStopFrom(transportDTOLocal.getFirstStop());
        List<ExtraInfoStopRoutesDTO> stopsRouteInfoFirst = new ArrayList<>();
        for (StopRouteModel routeStopInd : routesStopFirst) {
            ExtraInfoStopRoutesDTO newstopsRouteInfo = new ExtraInfoStopRoutesDTO();
            newstopsRouteInfo.setStopRouteId(routeStopInd.getId());
            newstopsRouteInfo.setDistance(routeStopInd.getDistance());
            newstopsRouteInfo.setTime(routeStopInd.getTime());
            newstopsRouteInfo.setPrice(routeStopInd.getPrice());

            newstopsRouteInfo.setStopFromId(routeStopInd.getStopFrom().getId());
            newstopsRouteInfo.setStopFromName(routeStopInd.getStopFrom().getName());

            newstopsRouteInfo.setStopToId(routeStopInd.getStopTo().getId());
            newstopsRouteInfo.setStopToName(routeStopInd.getStopTo().getName());

            stopsRouteInfoFirst.add(newstopsRouteInfo);
        }
        transportDTOLocal.setTrayectoOrigin(stopsRouteInfoFirst);
        */


        return transportDTOLocal;
    }

}
