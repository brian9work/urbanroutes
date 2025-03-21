package com.api.faculink.dto;

public class NearbyStopDTO {
    int stopId;
    String longitude;
    String latitude;
    String stopName;
    String stopImagen;
    double distance;

    public int getStopId() {
        return stopId;
    }

    public void setStopId(int stopId) {
        this.stopId = stopId;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getStopName() {
        return stopName;
    }

    public void setStopName(String stopName) {
        this.stopName = stopName;
    }

    public String getStopImagen() {
        return stopImagen;
    }

    public void setStopImagen(String stopImagen) {
        this.stopImagen = stopImagen;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }
}
