package com.api.faculink.controller;

import com.api.faculink.dto.TransportDTO;
import com.api.faculink.services.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
