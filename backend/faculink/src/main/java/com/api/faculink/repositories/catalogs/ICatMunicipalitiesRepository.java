package com.faculink.dev.repositories.catalogs;

import com.faculink.dev.models.catalogs.CatMunicipalitiesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatMunicipalitiesRepository extends JpaRepository<CatMunicipalitiesModel, Long> {
}

