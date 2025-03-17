package com.urbanroutes.dev.repositories;

import com.urbanroutes.dev.models.TransportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITransportRepository extends JpaRepository<TransportModel, Long> {
    Optional<TransportModel> findById(Long id);
}
