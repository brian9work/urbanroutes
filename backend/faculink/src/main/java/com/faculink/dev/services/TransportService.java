package com.faculink.dev.services;

import com.faculink.dev.dto.ExtraInfoStopRoutesDTO;
import com.faculink.dev.dto.RouteCoordinatesDTO;
import com.faculink.dev.dto.TransportDTO;
import com.faculink.dev.models.RouteCoordinatesModel;
import com.faculink.dev.models.StopRouteModel;
import com.faculink.dev.models.TransportModel;
import com.faculink.dev.repositories.IRouteCoordinatesRepository;
import com.faculink.dev.repositories.IStopRoutesRepository;
import com.faculink.dev.repositories.ITransportRepository;
import com.faculink.dev.repositories.ITransportStopRepository;
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




        return transportDTOLocal;
    }
}
