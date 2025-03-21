package com.faculink.dev.models;
import jakarta.persistence.*;

@Entity
@Table(name = "stopRoutes")
public class StopRouteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String distance;
    private String time;
    private String price;

    @ManyToOne
    @JoinColumn(name = "stopIdFrom")
    private StopModel stopFrom;

    @ManyToOne
    @JoinColumn(name = "stopIdTo")
    private StopModel stopTo;

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

    public StopModel getStopFrom() {
        return stopFrom;
    }

    public void setStopFrom(StopModel stopFrom) {
        this.stopFrom = stopFrom;
    }

    public StopModel getStopTo() {
        return stopTo;
    }

    public void setStopTo(StopModel stopTo) {
        this.stopTo = stopTo;
    }
}
