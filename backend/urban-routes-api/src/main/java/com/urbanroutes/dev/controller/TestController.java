package com.urbanroutes.dev.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping
    public ResponseStatusException inService() {
        return new ResponseStatusException(HttpStatus.OK, "En servicio");
    }

    @GetMapping("/**")
    public ResponseStatusException source() {
        return new ResponseStatusException(HttpStatus.NOT_FOUND, "Recurso no encontrado");
    }
}
