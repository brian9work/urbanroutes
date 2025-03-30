package com.api.faculink.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping
public class TestController {

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseStatusException inService() {
        return new ResponseStatusException(HttpStatus.OK, "En servicio");
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/**")
    public ResponseStatusException source() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, "Recurso no encontrado");
    }
}
