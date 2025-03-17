package com.urbanroutes.dev.repositories.catalogs;

import com.urbanroutes.dev.models.catalogs.CatDegreeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatDegreeRepository extends JpaRepository<CatDegreeModel, Long> {
}