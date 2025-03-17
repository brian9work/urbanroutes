package com.urbanroutes.dev.controller;

import com.urbanroutes.dev.DTO.TransportDTO;
import com.urbanroutes.dev.services.NearbyService;
import com.urbanroutes.dev.services.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}
