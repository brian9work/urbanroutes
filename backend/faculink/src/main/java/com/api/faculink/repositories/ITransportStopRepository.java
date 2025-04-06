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

    @Query(value = "WITH transportes_comunes AS ( " +
            "    SELECT ts1.id_transport " +
            "    FROM transport_stop ts1 " +
            "    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport " +
            "    WHERE ts1.id_stop = :originStop " +
            "    AND ts2.id_stop = :destinationStop ) " +
            "SELECT  " +
            "    t.id AS transport_id, " +
            "    t.name AS transport_name, " +
            "    t.frequency AS transport_frequency, " +
            "    s.id AS stop_id, " +
            "    s.name AS stop_name, " +
            "    ROW_NUMBER() OVER (PARTITION BY t.id ORDER BY ts.id) AS stop_order " +
            "FROM  " +
            "    transport_stop ts " +
            "JOIN  " +
            "    transport t ON ts.id_transport = t.id " +
            "JOIN  " +
            "    stop s ON ts.id_stop = s.id " +
            "WHERE  " +
            "    t.id IN (SELECT id_transport FROM (transportes_comunes)) " +
            "    AND ts.id_stop IN ( " +
            "        SELECT ts2.id_stop " +
            "        FROM transport_stop ts2 " +
            "        WHERE ts2.id_transport = t.id " +
            "        AND ts2.id BETWEEN ( " +
            "            SELECT MIN(id) FROM transport_stop  " +
            "            WHERE id_transport = t.id AND id_stop = :originStop " +
            "        ) AND ( " +
            "            SELECT MAX(id) FROM transport_stop  " +
            "            WHERE id_transport = t.id AND id_stop = :destinationStop " +
            "        ) " +
            "    ) " +
            "ORDER BY  " +
            "    t.id,  " +
            "    stop_order DESC", nativeQuery = true)
    List<Object[]> getRouteForFaculty(@Param("originStop") Long originStop, @Param("destinationStop") Long destinationStop);


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
