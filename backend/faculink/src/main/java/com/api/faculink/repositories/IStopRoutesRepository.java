package com.api.faculink.repositories;

import com.api.faculink.models.StopRouteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStopRoutesRepository extends JpaRepository<StopRouteModel, Long> {
    @Query("SELECT sr FROM StopRouteModel sr WHERE sr.stopFrom.id = :idRoute ")
    List<StopRouteModel> findByStopFrom(@Param("idRoute") Long idRoute);

    @Query("SELECT sr FROM StopRouteModel sr WHERE sr.stopTo.id = :idRoute ")
    List<StopRouteModel> findByStopTo(@Param("idRoute") Long idRoute);

    @Query("SELECT sr FROM StopRouteModel sr WHERE sr.stopFrom.id = :stopFrom AND sr.stopTo.id = :stopTo ")
    List<StopRouteModel> getByStopFromAndStopTo(Long stopFrom, Long stopTo);

    @Query(value = "SELECT COUNT(*) AS count FROM stop_routes " +
            "WHERE stop_id_from = :stopFrom AND stop_id_to = :stopTo ",
            nativeQuery = true)
    List<Object[]> verifyTravelBetweenStops(Long stopFrom, Long stopTo);

    @Query("SELECT sr FROM StopRouteModel sr WHERE sr.stopFrom.id = :idStopFrom AND " +
            "sr.stopTo.id BETWEEN :idFirstStop AND :idEndStop " +
            " ORDER BY sr.id ASC")
    List<StopRouteModel> getByStopFromAndBeetweenStopToAsc(
            @Param("idStopFrom") Long idStopFrom,
            @Param("idFirstStop") Long idFirstStop,
            @Param("idEndStop") Long idEndStop
    );
    @Query("SELECT sr FROM StopRouteModel sr WHERE sr.stopFrom.id = :idStopFrom AND " +
            "sr.stopTo.id BETWEEN :idFirstStop AND :idEndStop " +
            " ORDER BY sr.id DESC")
    List<StopRouteModel> getByStopFromAndBeetweenStopToDes(
            @Param("idStopFrom") Long idStopFrom,
            @Param("idFirstStop") Long idFirstStop,
            @Param("idEndStop") Long idEndStop
    );

    @Query(value = "SELECT " +
            "s1.id AS stopIdFrom, s2.id AS stopIdTo, sr.distance, sr.time, sr.price, s1.name AS stop_origin, s2.name AS stop_destination " +
            "FROM stop_routes sr " +
            "JOIN stop s1 ON s1.id=sr.stop_id_from  " +
            "JOIN stop s2 ON s2.id=sr.stop_id_to  " +
            "WHERE sr.stop_id_from=:origin AND sr.stop_id_to=:destination;", nativeQuery = true)
    List<Object[]> getRoutesBeetwenTwoStops(
            @Param("origin") Long origin,
            @Param("destination") Long destination);




}
