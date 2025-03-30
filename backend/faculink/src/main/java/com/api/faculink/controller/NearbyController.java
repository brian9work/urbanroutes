package com.api.faculink.controller;

import com.api.faculink.dto.NearbyStopDTO;
import com.api.faculink.dto.TransportDTO;
import com.api.faculink.services.NearbyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nearby")
public class NearbyController {
    @Autowired
    private NearbyService nearbyService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public List<NearbyStopDTO> getNearbyStops(
            @RequestParam(defaultValue = "0") double latitude,
            @RequestParam(defaultValue = "0") double longitude,
            @RequestParam(defaultValue = "0") double distance )
    {
        return this.nearbyService.getNearbyStops(latitude, longitude, distance);
    }


    @CrossOrigin(origins = "*")
    @GetMapping("/{idStop}")
    public List<TransportDTO> getNearbyTransportForStop(@PathVariable Long idStop )
    {
        return this.nearbyService.getNearbyTransportForStop(idStop);
    }
}
