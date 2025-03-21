package com.api.faculink.repositories.catalogs;

import com.api.faculink.models.catalogs.CatFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatFacultyRepository extends JpaRepository<CatFacultyModel, Long> {
}