package com.api.faculink.dto;

public class StopRouteDTO {
    Long id;
    String distance;
    String time;
    String price;
    Long stopFromId;
    String stopFromName;
    String stopFromLongitude;
    String stopFromLatitude;
    Long stopToId;
    String stopToName;
    String stopToLongitude;
    String stopToLatitude;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getStopFromLongitude() {
        return stopFromLongitude;
    }

    public void setStopFromLongitude(String stopFromLongitude) {
        this.stopFromLongitude = stopFromLongitude;
    }

    public String getStopFromLatitude() {
        return stopFromLatitude;
    }

    public void setStopFromLatitude(String stopFromLatitude) {
        this.stopFromLatitude = stopFromLatitude;
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

    public String getStopToLongitude() {
        return stopToLongitude;
    }

    public void setStopToLongitude(String stopToLongitude) {
        this.stopToLongitude = stopToLongitude;
    }

    public String getStopToLatitude() {
        return stopToLatitude;
    }

    public void setStopToLatitude(String stopToLatitude) {
        this.stopToLatitude = stopToLatitude;
    }
}
