package com.api.faculink.services;

import com.api.faculink.dto.StopRouteDTO;
import com.api.faculink.models.StopRouteModel;
import com.api.faculink.repositories.IStopRoutesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StopRoutesService {
    @Autowired
    IStopRoutesRepository stopRoutesRepository;

    public StopRouteDTO getStopByStopFromAndStopTo(Long stopFrom, Long stopTo) {
        StopRouteModel stopRouteModels = stopRoutesRepository.getByStopFromAndStopTo(stopFrom, stopTo).get(0);

        StopRouteDTO stopRouteDTO = new StopRouteDTO();

        stopRouteDTO.setId(stopRouteModels.getId());
        stopRouteDTO.setDistance(stopRouteModels.getDistance());
        stopRouteDTO.setTime(stopRouteModels.getTime());
        stopRouteDTO.setPrice(stopRouteModels.getPrice());

        stopRouteDTO.setStopFromId(stopRouteModels.getStopFrom().getId());
        stopRouteDTO.setStopFromName(stopRouteModels.getStopFrom().getName());
        stopRouteDTO.setStopFromLatitude(stopRouteModels.getStopFrom().getLatitude());
        stopRouteDTO.setStopFromLongitude(stopRouteModels.getStopFrom().getLongitude());

        stopRouteDTO.setStopToId(stopRouteModels.getStopTo().getId());
        stopRouteDTO.setStopToName(stopRouteModels.getStopTo().getName());
        stopRouteDTO.setStopToLongitude(stopRouteModels.getStopTo().getLatitude());
        stopRouteDTO.setStopToLatitude(stopRouteModels.getStopTo().getLongitude());

        return stopRouteDTO;
    }

    public StopRouteModel getStopByStopToAndStopFrom(Long stopTo, Long stopFrom) {
        return stopRoutesRepository.getByStopFromAndStopTo(stopFrom, stopTo).get(0);
    }
}
