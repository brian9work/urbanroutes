package com.faculink.dev.services;

import com.faculink.dev.models.catalogs.*;
import com.faculink.dev.repositories.catalogs.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogsService {

    @Autowired
    private ICatDegreeRepository catDegreeRepository;
    public List<CatDegreeModel> getAllDegree() {
        return catDegreeRepository.findAll();
    }
    @Autowired
    private ICatFacultyRepository catFacultyRepository;
    public List<CatFacultyModel> getAllFaculty() {
        return catFacultyRepository.findAll();
    }
    @Autowired
    private ICatLineOfTransportRepository catLineOfTransportRepository;
    public List<CatLineOfTransportModel> getAllLineOfTransport() {
        return catLineOfTransportRepository.findAll();
    }
    @Autowired
    private ICatMunicipalitiesRepository catMunicipalitiesRepository;
    public List<CatMunicipalitiesModel> getAllMunicipalities() {
        return catMunicipalitiesRepository.findAll();
    }
    @Autowired
    private ICatTypeOfTransportRepository catTypeOfTransportRepository;
    public List<CatTypeOfTransportModel> getAllTypeOfTransport() {
        return catTypeOfTransportRepository.findAll();
    }
}
