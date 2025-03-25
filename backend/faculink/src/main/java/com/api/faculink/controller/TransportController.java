package com.api.faculink.controller;

import com.api.faculink.dto.TransportDTO;
import com.api.faculink.services.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transport")
public class TransportController {
    @Autowired
    private TransportService transportService;


    @GetMapping("/{idTransport}")
    public TransportDTO getTransport(@PathVariable Long idTransport )
    {
        return this.transportService.getTransport(idTransport);
    }

    @GetMapping
    public TransportDTO getTransportByIdAndStopId(
            @RequestParam(defaultValue = "1") Long idTransport,
            @RequestParam(defaultValue = "1") Long originStop,
            @RequestParam(defaultValue = "9") Long destinationStop)
    {
        return this.transportService.getTransportByIdAndStopId(idTransport, originStop, destinationStop);
    }

}
