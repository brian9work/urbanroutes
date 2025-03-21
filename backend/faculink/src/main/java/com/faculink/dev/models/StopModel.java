package com.faculink.dev.models;

import com.faculink.dev.models.catalogs.CatMunicipalitiesModel;
import jakarta.persistence.*;
@Entity
@Table(name = "stop")
public class StopModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String longitude;
    private String latitude;
    private String name;
    private String imagen;

    @ManyToOne
    @JoinColumn(name = "idMunicipalities")
    private CatMunicipalitiesModel catMunicipalitiesModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public CatMunicipalitiesModel getCatMunicipalitiesModel() {
        return catMunicipalitiesModel;
    }

    public void setCatMunicipalitiesModel(CatMunicipalitiesModel catMunicipalitiesModel) {
        this.catMunicipalitiesModel = catMunicipalitiesModel;
    }
}
