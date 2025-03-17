package com.faculink.dev.repositories;

import com.faculink.dev.models.RouteCoordinatesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRouteCoordinatesRepository extends JpaRepository<RouteCoordinatesModel, Long> {
    @Query("SELECT rc FROM RouteCoordinatesModel rc WHERE rc.transportModel.id = :idRoute ")
    List<RouteCoordinatesModel> findByIdRoute(@Param("idRoute") Long idRoute);
}
