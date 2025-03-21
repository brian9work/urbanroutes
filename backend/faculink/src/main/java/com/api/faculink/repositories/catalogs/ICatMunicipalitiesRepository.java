package com.api.faculink.repositories.catalogs;

import com.api.faculink.models.catalogs.CatMunicipalitiesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatMunicipalitiesRepository extends JpaRepository<CatMunicipalitiesModel, Long> {
}

