package com.urbanroutes.dev.services;

import com.urbanroutes.dev.DTO.InfoDestinationDTO;
import com.urbanroutes.dev.DTO.NearbyStopDTO;
import com.urbanroutes.dev.DTO.TransportDTO;
import com.urbanroutes.dev.models.*;
import com.urbanroutes.dev.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NearbyService {
    @Autowired
    IStopRepository stopRepository;
    @Autowired
    ITransportStopRepository transportStopRepository;
    @Autowired
    IRouteCoordinatesRepository routeCoordinatesRepository;
    @Autowired
    IStopRoutesRepository stopRoutesRepository;

    // Metodo para obtener Las paradas (stop) mas cercanas
    public List<NearbyStopDTO> getNearbyStops(double latitude, double longitude, double distance) {
        List<Object[]> nearbyStopsData = stopRepository.getNearbyStops(latitude, longitude, distance);
        List<NearbyStopDTO> nearbyStop = new ArrayList<>();

        for (Object[] nsd : nearbyStopsData) {
            NearbyStopDTO nearbyStopLocal = new NearbyStopDTO();
            nearbyStopLocal.setStopId((int) nsd[0]);
            nearbyStopLocal.setLongitude((String) nsd[1]);
            nearbyStopLocal.setLatitude((String) nsd[2]);
            nearbyStopLocal.setStopName((String) nsd[3]);
            nearbyStopLocal.setStopImagen((String) nsd[4]);
            nearbyStopLocal.setDistance((double) nsd[5]);

            nearbyStop.add(nearbyStopLocal);
        }
        return nearbyStop;
    }

    public List<TransportDTO> getNearbyTransportForStop(Long idStop){
        List<TransportStopModel> transportStopModels = transportStopRepository.getStops(idStop);
        List<TransportDTO> transportComponent = new ArrayList<>();

        // Recorrer cada transporte disponible en cada STOP
        for (TransportStopModel tsm : transportStopModels) {
            TransportDTO transportDTOLocal = new TransportDTO();
            transportDTOLocal.setTransportId(tsm.getTransportModel().getId());
            transportDTOLocal.setTransportName(tsm.getTransportModel().getName());
            transportDTOLocal.setTransportImagen(tsm.getTransportModel().getImagen());
            transportDTOLocal.setTransportFrequency(tsm.getTransportModel().getFrequency());
            transportDTOLocal.setTransportOrigin(tsm.getTransportModel().getOrigin());
            transportDTOLocal.setTransportDestination(tsm.getTransportModel().getDestination());

            transportDTOLocal.setTransportTypeOfTransportName(tsm.getTransportModel().getCatTypeOfTransportModel().getName());
            transportDTOLocal.setTransportTypeOfTransportImagen(tsm.getTransportModel().getCatTypeOfTransportModel().getImagen());

            transportDTOLocal.setTransportLineOfTransportName(tsm.getTransportModel().getCatLineOfTransportModel().getName());
            transportDTOLocal.setTransportLineOfTransportCompleteName(tsm.getTransportModel().getCatLineOfTransportModel().getImagen());
            transportDTOLocal.setTransportLineOfTransportImagen(tsm.getTransportModel().getCatLineOfTransportModel().getImagen());

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



            // Obtener la informacion de la primera base
            List<Object[]> routesStopListFirst = stopRoutesRepository.getRoutesBeetwenTwoStops(
                    transportDTOLocal.getFirstStop(),
                    tsm.getStopModel().getId()
            );
            InfoDestinationDTO destinationsInfoOrigin = new InfoDestinationDTO();
            if(!routesStopListFirst.isEmpty()){
                Object[] routesStopFirst = routesStopListFirst.get(0);
                destinationsInfoOrigin.setId(String.valueOf((int) routesStopFirst[0]));
                destinationsInfoOrigin.setDistance(String.valueOf((int) routesStopFirst[1]));
                destinationsInfoOrigin.setTime(String.valueOf((int) routesStopFirst[2]));
                destinationsInfoOrigin.setPrice(String.valueOf((float) routesStopFirst[3]));
                destinationsInfoOrigin.setOrigin((String) routesStopFirst[5]);
                destinationsInfoOrigin.setDestination((String) routesStopFirst[4]);
            }
            transportDTOLocal.setTrayectoInfoOrigin(destinationsInfoOrigin);



            // Obtener la informacion de la utlima base
            List<Object[]> routesStopListEnd = stopRoutesRepository.getRoutesBeetwenTwoStops(
                    tsm.getStopModel().getId(),
                    transportDTOLocal.getEndStop()
            );
            InfoDestinationDTO destinationsInfoEnd = new InfoDestinationDTO();
            if(!routesStopListEnd.isEmpty()){
                Object[] routesStopEnd = routesStopListEnd.get(0);
                destinationsInfoEnd.setId(String.valueOf((int) routesStopEnd[0]));
                destinationsInfoEnd.setDistance(String.valueOf((int) routesStopEnd[1]));
                destinationsInfoEnd.setTime(String.valueOf((int) routesStopEnd[2]));
                destinationsInfoEnd.setPrice(String.valueOf((float) routesStopEnd[3]));
                destinationsInfoEnd.setOrigin((String) routesStopEnd[4]);
                destinationsInfoEnd.setDestination((String) routesStopEnd[5]);
            }
            transportDTOLocal.setTrayectoInfoDestination(destinationsInfoEnd);

            // Agregar el componente local al padre
            transportComponent.add(transportDTOLocal);
        }

        return transportComponent;
    }


}
