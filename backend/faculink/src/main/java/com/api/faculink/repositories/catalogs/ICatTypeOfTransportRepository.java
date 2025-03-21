package com.faculink.dev.repositories.catalogs;

import com.faculink.dev.models.catalogs.CatTypeOfTransportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatTypeOfTransportRepository  extends JpaRepository<CatTypeOfTransportModel, Long> {
}
