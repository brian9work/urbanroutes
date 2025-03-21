package com.faculink.dev.dto;

import java.util.List;

public class TransportDTO {
    Long transportId;
    String transportName;
    String transportImagen;
    String transportFrequency;
    String transportOrigin;
    String transportDestination;
    String transportTypeOfTransportName;
    String transportTypeOfTransportImagen;
    String transportLineOfTransportName;
    String transportLineOfTransportCompleteName;
    String transportLineOfTransportImagen;
    Long firstStop;
    Long endStop;
    InfoDestinationDTO trayectoInfoOrigin;
    InfoDestinationDTO trayectoInfoDestination;
    List<ExtraInfoStopRoutesDTO> trayectoOrigin;
    List<ExtraInfoStopRoutesDTO> trayectoDestination;
    List<RouteCoordinatesDTO> route;
    List<TransportStopDTO> transportStops;

    public Long getTransportId() {
        return transportId;
    }

    public void setTransportId(Long transportId) {
        this.transportId = transportId;
    }

    public String getTransportName() {
        return transportName;
    }

    public void setTransportName(String transportName) {
        this.transportName = transportName;
    }

    public String getTransportImagen() {
        return transportImagen;
    }

    public void setTransportImagen(String transportImagen) {
        this.transportImagen = transportImagen;
    }

    public String getTransportFrequency() {
        return transportFrequency;
    }

    public void setTransportFrequency(String transportFrequency) {
        this.transportFrequency = transportFrequency;
    }

    public String getTransportOrigin() {
        return transportOrigin;
    }

    public void setTransportOrigin(String transportOrigin) {
        this.transportOrigin = transportOrigin;
    }

    public String getTransportDestination() {
        return transportDestination;
    }

    public void setTransportDestination(String transportDestination) {
        this.transportDestination = transportDestination;
    }

    public String getTransportTypeOfTransportName() {
        return transportTypeOfTransportName;
    }

    public void setTransportTypeOfTransportName(String transportTypeOfTransportName) {
        this.transportTypeOfTransportName = transportTypeOfTransportName;
    }

    public String getTransportTypeOfTransportImagen() {
        return transportTypeOfTransportImagen;
    }

    public void setTransportTypeOfTransportImagen(String transportTypeOfTransportImagen) {
        this.transportTypeOfTransportImagen = transportTypeOfTransportImagen;
    }

    public String getTransportLineOfTransportName() {
        return transportLineOfTransportName;
    }

    public void setTransportLineOfTransportName(String transportLineOfTransportName) {
        this.transportLineOfTransportName = transportLineOfTransportName;
    }

    public String getTransportLineOfTransportCompleteName() {
        return transportLineOfTransportCompleteName;
    }

    public void setTransportLineOfTransportCompleteName(String transportLineOfTransportCompleteName) {
        this.transportLineOfTransportCompleteName = transportLineOfTransportCompleteName;
    }

    public String getTransportLineOfTransportImagen() {
        return transportLineOfTransportImagen;
    }

    public void setTransportLineOfTransportImagen(String transportLineOfTransportImagen) {
        this.transportLineOfTransportImagen = transportLineOfTransportImagen;
    }

    public Long getFirstStop() {
        return firstStop;
    }

    public void setFirstStop(Long firstStop) {
        this.firstStop = firstStop;
    }

    public Long getEndStop() {
        return endStop;
    }

    public void setEndStop(Long endStop) {
        this.endStop = endStop;
    }

    public InfoDestinationDTO getTrayectoInfoOrigin() {
        return trayectoInfoOrigin;
    }

    public void setTrayectoInfoOrigin(InfoDestinationDTO trayectoInfoOrigin) {
        this.trayectoInfoOrigin = trayectoInfoOrigin;
    }

    public InfoDestinationDTO getTrayectoInfoDestination() {
        return trayectoInfoDestination;
    }

    public void setTrayectoInfoDestination(InfoDestinationDTO trayectoInfoDestination) {
        this.trayectoInfoDestination = trayectoInfoDestination;
    }

    public List<ExtraInfoStopRoutesDTO> getTrayectoOrigin() {
        return trayectoOrigin;
    }

    public void setTrayectoOrigin(List<ExtraInfoStopRoutesDTO> trayectoOrigin) {
        this.trayectoOrigin = trayectoOrigin;
    }

    public List<ExtraInfoStopRoutesDTO> getTrayectoDestination() {
        return trayectoDestination;
    }

    public void setTrayectoDestination(List<ExtraInfoStopRoutesDTO> trayectoDestination) {
        this.trayectoDestination = trayectoDestination;
    }

    public List<RouteCoordinatesDTO> getRoute() {
        return route;
    }

    public void setRoute(List<RouteCoordinatesDTO> route) {
        this.route = route;
    }

    public List<TransportStopDTO> getTransportStops() {
        return transportStops;
    }

    public void setTransportStops(List<TransportStopDTO> transportStops) {
        this.transportStops = transportStops;
    }
}
