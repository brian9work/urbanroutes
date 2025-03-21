package com.api.faculink.dto;

public class ExtraInfoStopRoutesDTO {
    Long StopRouteId;
    String distance;
    String time;
    String price;
    Long stopFromId;
    String stopFromName;
    Long stopToId;
    String stopToName;

    public Long getStopRouteId() {
        return StopRouteId;
    }

    public void setStopRouteId(Long stopRouteId) {
        StopRouteId = stopRouteId;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Long getStopFromId() {
        return stopFromId;
    }

    public void setStopFromId(Long stopFromId) {
        this.stopFromId = stopFromId;
    }

    public String getStopFromName() {
        return stopFromName;
    }

    public void setStopFromName(String stopFromName) {
        this.stopFromName = stopFromName;
    }

    public Long getStopToId() {
        return stopToId;
    }

    public void setStopToId(Long stopToId) {
        this.stopToId = stopToId;
    }

    public String getStopToName() {
        return stopToName;
    }

    public void setStopToName(String stopToName) {
        this.stopToName = stopToName;
    }
}
