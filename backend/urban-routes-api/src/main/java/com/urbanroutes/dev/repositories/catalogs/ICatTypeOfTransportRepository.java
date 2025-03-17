package com.urbanroutes.dev.repositories.catalogs;

import com.urbanroutes.dev.models.catalogs.CatTypeOfTransportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatTypeOfTransportRepository  extends JpaRepository<CatTypeOfTransportModel, Long> {
}
