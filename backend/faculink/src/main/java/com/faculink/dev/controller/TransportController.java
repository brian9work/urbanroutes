package com.faculink.dev.controller;

import com.faculink.dev.dto.TransportDTO;
import com.faculink.dev.services.NearbyService;
import com.faculink.dev.services.TransportService;
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
