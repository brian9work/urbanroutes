package com.api.faculink.repositories;

import com.api.faculink.models.StopModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//
//import com.api.faculink.dto.NearbyStopDTO;
//import com.api.faculink.models.RouteCoordinatesModel;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
@Repository
public interface INearbyRepository extends JpaRepository<StopModel, Long> {

}
//    @Query(value = "SELECT  " +
//            "    s.id, " +
//            "    s.latitude, " +
//            "    s.longitude, " +
//            "    s.name, " +
//            "    s.imagen, " +
//            "    6371000 * 2 * ASIN( " +
//            "        SQRT( " +
//            "            POWER(SIN((RADIANS(s.latitude) - RADIANS(:latitude)) / 2), 2) + " +
//            "            COS(RADIANS(:latitude)) * COS(RADIANS(s.latitude)) * " +
//            "            POWER(SIN((RADIANS(s.longitude) - RADIANS(:longitude)) / 2), 2) " +
//            "        ) " +
//            "    ) AS distance_meters " +
//            "FROM  " +
//            "    stop s " +
//            "WHERE 6371000 * 2 * ASIN( " +
//            "        SQRT( " +
//            "            POWER(SIN((RADIANS(s.latitude) - RADIANS(:latitude)) / 2), 2) + " +
//            "            COS(RADIANS(:latitude)) * COS(RADIANS(s.latitude)) * " +
//            "            POWER(SIN((RADIANS(s.longitude) - RADIANS(:longitude)) / 2), 2) " +
//            "        ) " +
//            "    ) <= :distance ", nativeQuery = true)
//    List<Object[]> getNearbyStops(@Param("latitude") double latitude,
//                                               @Param("longitude") double longitude,
//                                               @Param("distance") double distance
//    );
//
//}