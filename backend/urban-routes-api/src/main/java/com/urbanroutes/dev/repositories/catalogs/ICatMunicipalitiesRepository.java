package com.urbanroutes.dev.repositories.catalogs;

import com.urbanroutes.dev.models.catalogs.CatMunicipalitiesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatMunicipalitiesRepository extends JpaRepository<CatMunicipalitiesModel, Long> {
}

