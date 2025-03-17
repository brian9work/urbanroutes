package com.urbanroutes.dev.repositories.catalogs;

import com.urbanroutes.dev.models.catalogs.CatFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatFacultyRepository extends JpaRepository<CatFacultyModel, Long> {
}