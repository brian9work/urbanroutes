SELECT 
    s.id AS id_stop, 
    s.longitude, 
    s.latitude, 
    s.name AS stop_name, 
    s.imagen AS stop_imagen, 
    t.id AS id_transport, 
    t.frequency, 
    t.name AS transport_name, 
    t.imagen As transport_imagen, 
    t.origin, 
    t.destination, 
    clt.id AS id_line_of_transport, 
    clt.name AS line_of_transport_name, 
    clt.complete_name, 
    clt.imagen AS line_of_transport_imagen, 
    ctt.id AS id_type_of_transport, 
    ctt.name AS type_of_transport_name, 
    ctt.imagen AS type_of_transport_imagen, 
    6371000 * 2 * ASIN(SQRT(POWER(SIN((RADIANS(19.417996111693196) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) + 
        COS(RADIANS(-98.12705375871312)) * 
        COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) * 
        POWER(SIN((RADIANS(-98.12705375871312) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2))) AS distance_in_meters 
FROM stop s 
    JOIN transport_stop ts ON ts.id_stop = s.id 
    JOIN  transport t ON ts.id_transport = t.id 
    JOIN  cat_line_of_transport clt ON clt.id = t.id_type_of_transport 
    JOIN  cat_type_of_transport ctt ON ctt.id = t.id_type_of_transport 
WHERE 6371000 * 2 * ASIN(SQRT(POWER(SIN((RADIANS(19.417996111693196) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) + 
    COS(RADIANS(-98.12705375871312)) * 
    COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) * 
    POWER(SIN((RADIANS(-98.12705375871312) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2))) <= 100 
ORDER BY distance_in_meters;



SELECT
    s.id AS id_stop,
    s.longitude,
    s.latitude,
    s.name AS stop_name,
    s.imagen AS stop_imagen,
    t.id AS id_transport,
    t.frequency,
    t.name AS transport_name,
    t.imagen As transport_imagen,
    t.origin,
    t.destination,
    clt.id AS id_line_of_transport,
    clt.name AS line_of_transport_name,
    clt.complete_name,
    clt.imagen AS line_of_transport_imagen,
    ctt.id AS id_type_of_transport,
    ctt.name AS type_of_transport_name,
    ctt.imagen AS type_of_transport_imagen,
    6371000 * 2 * ASIN(SQRT(POWER(SIN((RADIANS(:latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
    COS(RADIANS(:longitude)) *
    COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
    POWER(SIN((RADIANS(:longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2))) AS distance_in_meters
FROM stop s
    JOIN transport_stop ts ON ts.id_stop = s.id
    JOIN  transport t ON ts.id_transport = t.id
    JOIN  cat_line_of_transport clt ON clt.id = t.id_type_of_transport
    JOIN  cat_type_of_transport ctt ON ctt.id = t.id_type_of_transport
WHERE
    6371000 * 2 * ASIN(SQRT(POWER(SIN((RADIANS(:latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
    COS(RADIANS(:longitude)) *
    COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
    POWER(SIN((RADIANS(:longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2))) <= 100
ORDER BY distance_in_meters;



-- Consulta para obtener paradas cercanas a una facultad específica (por ID)
SELECT 
    s.id AS stop_id, 
    s.name AS stop_name, 
    s.latitude AS stop_latitude, 
    s.longitude AS stop_longitude,
    t.id AS transport_id, 
    t.name AS transport_name, 
    t.frequency AS transport_frequency,
    -- Cálculo de la distancia en metros
    6371000 * 2 * ASIN(
        SQRT(
            POWER(SIN((RADIANS(f.latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
            COS(RADIANS(f.longitude)) * 
            COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
            POWER(SIN((RADIANS(f.longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2)
        )
    ) AS distance_in_meters
FROM 
    cat_faculty f
JOIN 
    stop s ON 1=1  -- Join cruzado para calcular distancias a todas las paradas
JOIN 
    transport_stop ts ON s.id = ts.id_stop
JOIN 
    transport t ON ts.id_transport = t.id
WHERE 
    f.id = 4  -- Parámetro: ID de la facultad
    AND (
        -- Filtro para paradas dentro de 10 metros
        6371000 * 2 * ASIN(
            SQRT(
                POWER(SIN((RADIANS(f.latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
                COS(RADIANS(f.longitude)) * 
                COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
                POWER(SIN((RADIANS(f.longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2)
            )
        ) <= 10
        OR
        -- Filtro para paradas dentro de 50 metros
        6371000 * 2 * ASIN(
            SQRT(
                POWER(SIN((RADIANS(f.latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
                COS(RADIANS(f.longitude)) * 
                COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
                POWER(SIN((RADIANS(f.longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2)
            )
        ) <= 50
        OR
        -- Filtro para paradas dentro de 100 metros
        6371000 * 2 * ASIN(
            SQRT(
                POWER(SIN((RADIANS(f.latitude) - RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) / 2), 2) +
                COS(RADIANS(f.longitude)) * 
                COS(RADIANS(CAST(s.latitude AS DECIMAL(18, 15)))) *
                POWER(SIN((RADIANS(f.longitude) - RADIANS(CAST(s.longitude AS DECIMAL(18, 15)))) / 2), 2)
            )
        ) <= 100
    )
ORDER BY 
    distance_in_meters;



-- Consultar paradas cercanas a una facultad específica (por id)
--   latitude: 19.41514082532041,
--   longitude: -98.14024764753933,
SELECT 
    s.id,
    s.name AS stop_name,
    s.latitude,
    s.longitude,
    -- Cálculo de distancia en metros usando la fórmula de Haversine
    6371000 * 2 * ASIN(
        SQRT(
            POWER(SIN((RADIANS(s.latitude) - RADIANS(19.41514082532041)) / 2), 2) +
            COS(RADIANS(19.41514082532041)) * COS(RADIANS(s.latitude)) *
            POWER(SIN((RADIANS(s.longitude) - RADIANS(-98.14024764753933)) / 2), 2)
        )
    ) AS distance_meters
FROM 
    stop s
WHERE 
    f.id = 4  -- ID de la Facultad de Ciencias Básicas Ingeniería y Tecnología (FCBIyT)
    -- Filtro para distancias menores a 500 metros
    AND 6371000 * 2 * ASIN(
        SQRT(
            POWER(SIN((RADIANS(s.latitude) - RADIANS(19.41514082532041)) / 2), 2) +
            COS(RADIANS(19.41514082532041)) * COS(RADIANS(s.latitude)) *
            POWER(SIN((RADIANS(s.longitude) - RADIANS(-98.14024764753933)) / 2), 2)
        )
    ) <= 500
ORDER BY 
    distance_meters ASC;



SELECT 
    s.id,
    s.name AS stop_name,
    s.latitude,
    s.longitude,
    f.name AS faculty_name,
    f.acronym AS faculty_acronym,
    f.latitude AS faculty_latitude,
    f.longitude AS faculty_longitude,
    6371000 * 2 * ASIN(
        SQRT(
            POWER(SIN((RADIANS(s.latitude) - RADIANS(f.latitude)) / 2), 2) +
            COS(RADIANS(f.latitude)) * COS(RADIANS(s.latitude)) *
            POWER(SIN((RADIANS(s.longitude) - RADIANS(f.longitude)) / 2), 2)
        )
    ) AS distance_meters
FROM 
    stop s
WHERE 6371000 * 2 * ASIN(
        SQRT(
            POWER(SIN((RADIANS(s.latitude) - RADIANS(f.latitude)) / 2), 2) +
            COS(RADIANS(f.latitude)) * COS(RADIANS(s.latitude)) *
            POWER(SIN((RADIANS(s.longitude) - RADIANS(f.longitude)) / 2), 2)
        )
    ) <= 500
ORDER BY 
    distance_meters ASC;



-- Creation of a route betwween two stops (25 and 38) using the transport_stop table
WITH transportes_comunes AS (
    SELECT ts1.id_transport
    FROM transport_stop ts1
    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport
    WHERE ts1.id_stop = 25
    AND ts2.id_stop = 38
)

SELECT 
    t.id AS transport_id,
    t.name AS transport_name,
    s.id AS stop_id,
    s.name AS stop_name,
    ROW_NUMBER() OVER (PARTITION BY t.id ORDER BY ts.id) AS stop_order
FROM 
    transport_stop ts
JOIN 
    transport t ON ts.id_transport = t.id
JOIN 
    stop s ON ts.id_stop = s.id
WHERE 
    t.id IN (SELECT id_transport FROM (transportes_comunes))
    AND ts.id_stop IN (
        SELECT ts2.id_stop
        FROM transport_stop ts2
        WHERE ts2.id_transport = t.id
        AND ts2.id BETWEEN (
            SELECT MIN(id) FROM transport_stop 
            WHERE id_transport = t.id AND id_stop = 25
        ) AND (
            SELECT MAX(id) FROM transport_stop 
            WHERE id_transport = t.id AND id_stop = 38
        )
    )
ORDER BY 
    t.id, 
    stop_order;














WITH transportes_comunes AS (
    SELECT ts1.id_transport
    FROM transport_stop ts1
    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport
    WHERE ts1.id_stop = 25
    AND ts2.id_stop = 38
)

WITH 
base_origen AS (SELECT * FROM stop WHERE id = 1),
base_destino AS (SELECT * FROM stop WHERE id = 50),
-- Transportes que pasan por la base origen
transportes_origen AS (
    SELECT ts.id_transport, ts.id_stop
    FROM transport_stop ts
    WHERE ts.id_stop = 1
),
-- Transportes que pasan por la base destino
transportes_destino AS (
    SELECT ts.id_transport, ts.id_stop
    FROM transport_stop ts
    WHERE ts.id_stop = 50
),
-- Posibles puntos de transbordo
posibles_transbordos AS (
    SELECT 
        to_.id_transport AS transporte_origen,
        td.id_transport AS transporte_destino,
        ts.id_stop AS parada_transbordo
    FROM 
        transport_stop ts
    JOIN transportes_origen to_ ON ts.id_transport = to_.id_transport
    JOIN transportes_destino td ON ts.id_stop IN (
        SELECT id_stop FROM transport_stop WHERE id_transport = td.id_transport
    )
    WHERE to_.id_transport != td.id_transport
)
SELECT 
    pt.transporte_origen,
    t1.name AS nombre_transporte_origen,
    pt.parada_transbordo,
    s.name AS nombre_parada_transbordo,
    pt.transporte_destino,
    t2.name AS nombre_transporte_destino,
    (SELECT name FROM stop WHERE id = 1) AS origen,
    (SELECT name FROM stop WHERE id = 50) AS destino
FROM 
    posibles_transbordos pt
JOIN transport t1 ON pt.transporte_origen = t1.id
JOIN transport t2 ON pt.transporte_destino = t2.id
JOIN stop s ON pt.parada_transbordo = s.id;


WITH RECURSIVE rutas_posibles AS (
    -- Rutas directas (sin transbordo)
    SELECT 
        ts1.id_transport AS transporte1,
        NULL AS transporte2,
        ts1.id_stop AS origen,
        ts2.id_stop AS destino,
        ARRAY[ts1.id_stop, ts2.id_stop] AS camino,
        1 AS num_transbordos
    FROM 
        transport_stop ts1
    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport
    WHERE 
        ts1.id_stop = 1 AND 
        ts2.id_stop = 50 AND
        ts1.id < ts2.id
    
    UNION ALL
    
    -- Rutas con un transbordo
    SELECT 
        ts1.id_transport AS transporte1,
        ts3.id_transport AS transporte2,
        ts1.id_stop AS origen,
        ts4.id_stop AS destino,
        ARRAY[ts1.id_stop, ts2.id_stop, ts4.id_stop] AS camino,
        2 AS num_transbordos
    FROM 
        transport_stop ts1
    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport AND ts1.id < ts2.id
    JOIN transport_stop ts3 ON ts2.id_stop = ts3.id_stop AND ts1.id_transport != ts3.id_transport
    JOIN transport_stop ts4 ON ts3.id_transport = ts4.id_transport AND ts3.id < ts4.id
    WHERE 
        ts1.id_stop = 1 AND 
        ts4.id_stop = 50
)
SELECT 
    rp.transporte1,
    t1.name AS nombre_transporte1,
    rp.transporte2,
    t2.name AS nombre_transporte2,
    (SELECT name FROM stop WHERE id = rp.origen) AS origen,
    (SELECT name FROM stop WHERE id = rp.destino) AS destino,
    (SELECT string_agg(name, ' -> ' ORDER BY ord) 
    FROM (
        SELECT s.name, array_position(rp.camino, s.id) AS ord 
        FROM stop s 
        WHERE s.id = ANY(rp.camino)
    ) AS ruta_descripcion,
    rp.num_transbordos
FROM 
    rutas_posibles rp
LEFT JOIN transport t1 ON rp.transporte1 = t1.id
LEFT JOIN transport t2 ON rp.transporte2 = t2.id
ORDER BY 
    rp.num_transbordos,
    array_length(rp.camino, 1);






-- Ejemplo con IDs específicos (25 a 38)
WITH transportes_comunes AS (
    SELECT ts1.id_transport
    FROM transport_stop ts1
    JOIN transport_stop ts2 ON ts1.id_transport = ts2.id_transport
    WHERE ts1.id_stop = 25
    AND ts2.id_stop = 38
)

SELECT 
    t.id AS transport_id,
    t.name AS transport_name,
    s.id AS stop_id,
    s.name AS stop_name,
    ROW_NUMBER() OVER (PARTITION BY t.id ORDER BY ts.id) AS stop_order
FROM 
    transport_stop ts
JOIN 
    transport t ON ts.id_transport = t.id
JOIN 
    stop s ON ts.id_stop = s.id
WHERE 
    t.id IN (SELECT id_transport FROM transportes_comunes)
    AND ts.id_stop IN (
        SELECT ts2.id_stop
        FROM transport_stop ts2
        WHERE ts2.id_transport = t.id
        AND ts2.id BETWEEN (
            SELECT MIN(id) FROM transport_stop 
            WHERE id_transport = t.id AND id_stop = 25
        ) AND (
            SELECT MAX(id) FROM transport_stop 
            WHERE id_transport = t.id AND id_stop = 38
        )
    )
ORDER BY 
    t.id, 
    stop_order;