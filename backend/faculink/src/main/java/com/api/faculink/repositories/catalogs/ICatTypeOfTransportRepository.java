package com.api.faculink.repositories.catalogs;

import com.api.faculink.models.catalogs.CatTypeOfTransportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICatTypeOfTransportRepository  extends JpaRepository<CatTypeOfTransportModel, Long> {
}
