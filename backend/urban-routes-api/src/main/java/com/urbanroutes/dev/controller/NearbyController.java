package com.urbanroutes.dev.controller;

import com.urbanroutes.dev.DTO.NearbyStopDTO;
import com.urbanroutes.dev.DTO.TransportDTO;
import com.urbanroutes.dev.services.NearbyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nearby")
public class NearbyController {
    @Autowired
    private NearbyService nearbyService;

    @GetMapping
    public List<NearbyStopDTO> getNearbyStops(
            @RequestParam(defaultValue = "0") double latitude,
            @RequestParam(defaultValue = "0") double longitude,
            @RequestParam(defaultValue = "0") double distance )
    {
        return this.nearbyService.getNearbyStops(latitude, longitude, distance);
    }


    @GetMapping("/{idStop}")
    public List<TransportDTO> getNearbyTransportForStop(@PathVariable Long idStop )
    {
        return this.nearbyService.getNearbyTransportForStop(idStop);
    }
}
