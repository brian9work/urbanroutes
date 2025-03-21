package com.api.faculink.repositories.catalogs;

import com.api.faculink.models.catalogs.CatDegreeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatDegreeRepository extends JpaRepository<CatDegreeModel, Long> {
}