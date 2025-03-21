package com.faculink.dev.models;
import jakarta.persistence.*;

@Entity
@Table(name = "transportStop")
public class TransportStopModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @ManyToOne
    @JoinColumn(name = "idTransport")
    private TransportModel transportModel;

    @ManyToOne
    @JoinColumn(name = "idStop")
    private StopModel stopModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TransportModel getTransportModel() {
        return transportModel;
    }

    public void setTransportModel(TransportModel transportModel) {
        this.transportModel = transportModel;
    }

    public StopModel getStopModel() {
        return stopModel;
    }

    public void setStopModel(StopModel stopModel) {
        this.stopModel = stopModel;
    }
}
