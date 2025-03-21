package com.faculink.dev.models;
import com.faculink.dev.models.catalogs.CatLineOfTransportModel;
import com.faculink.dev.models.catalogs.CatTypeOfTransportModel;
import jakarta.persistence.*;

@Entity
@Table(name = "transport")
public class TransportModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String frequency;
    private String name;
    private String imagen;
    private String origin;
    private String destination;

    @ManyToOne
    @JoinColumn(name = "idTypeOfTransport")
    private CatTypeOfTransportModel catTypeOfTransportModel;

    @ManyToOne
    @JoinColumn(name = "idLineOfTransport")
    private CatLineOfTransportModel catLineOfTransportModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public CatTypeOfTransportModel getCatTypeOfTransportModel() {
        return catTypeOfTransportModel;
    }

    public void setCatTypeOfTransportModel(CatTypeOfTransportModel catTypeOfTransportModel) {
        this.catTypeOfTransportModel = catTypeOfTransportModel;
    }

    public CatLineOfTransportModel getCatLineOfTransportModel() {
        return catLineOfTransportModel;
    }

    public void setCatLineOfTransportModel(CatLineOfTransportModel catLineOfTransportModel) {
        this.catLineOfTransportModel = catLineOfTransportModel;
    }
}
