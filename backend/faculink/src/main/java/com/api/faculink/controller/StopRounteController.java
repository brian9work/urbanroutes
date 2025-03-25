package com.api.faculink.controller;

import com.api.faculink.dto.StopRouteDTO;
import com.api.faculink.services.StopRoutesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sr")
public class StopRounteController {
    @Autowired
    private StopRoutesService stopRoutesService;


    @GetMapping
    public StopRouteDTO getStopByStopFromAndStopTo(
            @RequestParam(defaultValue = "1") Long stopFrom,
            @RequestParam(defaultValue = "18") Long stopTo)
    {
        return stopRoutesService.getStopByStopFromAndStopTo(stopFrom, stopTo);
    }
}
