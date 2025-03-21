package com.faculink.dev.models.catalogs;

import jakarta.persistence.*;

@Entity
@Table(name = "cat_degree")
public class CatDegreeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String isActive;

    @ManyToOne
    @JoinColumn(name = "idFaculty")
    private CatFacultyModel facultyModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }

    public CatFacultyModel getFacultyModel() {
        return facultyModel;
    }

    public void setFacultyModel(CatFacultyModel facultyModel) {
        this.facultyModel = facultyModel;
    }
}
