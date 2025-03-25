package com.api.faculink.repositories.catalogs;

import com.api.faculink.models.catalogs.CatFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICatFacultyRepository extends JpaRepository<CatFacultyModel, Long> {
    @Query(value = "SELECT * FROM cat_faculty WHERE is_active = '1'", nativeQuery = true)
    List<CatFacultyModel> findByIsActive(char isActive);
}