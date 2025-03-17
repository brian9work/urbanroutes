package com.faculink.dev.repositories;

import com.faculink.dev.models.TransportModel;
import com.faculink.dev.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITransportRepository extends JpaRepository<TransportModel, Long> {
    Optional<TransportModel> findById(Long id);
}
