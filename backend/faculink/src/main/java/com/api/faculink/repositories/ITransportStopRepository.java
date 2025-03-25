package com.api.faculink.repositories;

import com.api.faculink.models.*;
import com.api.faculink.models.TransportStopModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITransportStopRepository extends JpaRepository<TransportStopModel, Long> {
    @Query("SELECT ts FROM TransportStopModel ts WHERE ts.transportModel.id = :idTransport ")
    List<TransportStopModel> getByTransports(@Param("idTransport") Long idTransport);

    @Query("SELECT ts FROM TransportStopModel ts WHERE ts.stopModel.id  = :idStop ")
    List<TransportStopModel> getStops(@Param("idStop") Long idStop);

    // Seleccionar las paradas entre dos bases
    @Query("SELECT ts FROM TransportStopModel ts " +
            "WHERE ts.transportModel.id = :transportId AND " +
            "ts.stopModel.id BETWEEN :idFirstStop AND :idEndStop ")
    List<TransportStopModel> getByStopsBetween(
            @Param("transportId") Long transportId,
            @Param("idFirstStop") Long idFirstStop,
            @Param("idEndStop") Long idEndStop
    );
//    SELECT * FROM transport_stop ts
//    INNER JOIN stop s ON s.id = ts.id_stop
//    INNER JOIN transport t ON t.id = ts.id_transport
//    WHERE ts.id_stop BETWEEN 1 AND 7;

    @Query("SELECT ts, s FROM TransportStopModel ts " +
            "JOIN StopModel s ON ts.stopModel.id=s.id " +
            "WHERE ts.transportModel.id = :idTransport ")
    List<TransportStopModel> getStopsByTransport(@Param("idTransport") Long idTransport );

    @Query(value = "SELECT id, id_stop FROM transport_stop " +
            "WHERE id_transport = :idTransport " +
            "ORDER BY id ASC LIMIT 1 ",
            nativeQuery = true)
    List<String> getByFirstStop(@Param("idTransport") Long idTransport);

    @Query(value = "SELECT id, id_stop FROM transport_stop " +
            "WHERE id_transport = :idTransport " +
            "ORDER BY id DESC LIMIT 1",
            nativeQuery = true)
    List<String> getByEndStop(@Param("idTransport") Long idTransport);
}
