
# Base de Datos SQL: Urban Routes

Este documento describe la estructura y el funcionamiento de la base de datos **Urban Routes**, diseñada para gestionar información relacionada con rutas de transporte, paradas, usuarios, comentarios y calificaciones.

---

## Esquema de la Base de Datos

La base de datos está compuesta por varias tablas que se relacionan entre sí para gestionar la información de transporte, usuarios y ubicaciones. A continuación, se detalla cada tabla y su propósito.

---

### Tablas Principales

#### 1. **`cat_type_of_transport`**
   - **Descripción**: Almacena los tipos de transporte disponibles (autobús, tren, etc.).
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `name`: Nombre del tipo de transporte.
     - `imagen`: Ruta de la imagen asociada al tipo de transporte.

#### 2. **`cat_line_of_transport`**
   - **Descripción**: Contiene las líneas de transporte disponibles.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `name`: Nombre corto de la línea.
     - `complete_name`: Nombre completo de la línea.
     - `imagen`: Ruta de la imagen asociada a la línea.

#### 3. **`cat_municipalities`**
   - **Descripción**: Almacena los municipios o áreas geográficas.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `name`: Nombre del municipio.

#### 4. **`cat_faculty`**
   - **Descripción**: Contiene las facultades o instituciones educativas.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `acronym`: Acrónimo de la facultad.
     - `name`: Nombre completo de la facultad.
     - `latitude`: Latitud de la ubicación de la facultad.
     - `longitude`: Longitud de la ubicación de la facultad.
     - `is_active`: Estado de la facultad (`1` para activa, `0` para inactiva).

#### 5. **`cat_degree`**
   - **Descripción**: Almacena los grados o carreras asociadas a una facultad.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_faculty`: Clave foránea que referencia a `cat_faculty`.
     - `name`: Nombre del grado o carrera.
     - `is_active`: Estado del grado (`1` para activo, `0` para inactivo).

#### 6. **`transport`**
   - **Descripción**: Contiene la información de los transportes disponibles.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_type_of_transport`: Clave foránea que referencia a `cat_type_of_transport`.
     - `id_line_of_transport`: Clave foránea que referencia a `cat_line_of_transport`.
     - `frequency`: Frecuencia del transporte.
     - `name`: Nombre del transporte.
     - `imagen`: Ruta de la imagen asociada al transporte.
     - `origin`: Punto de origen del transporte.
     - `destination`: Punto de destino del transporte.

#### 7. **`user`**
   - **Descripción**: Almacena la información de los usuarios registrados.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `name`: Nombre del usuario.
     - `email`: Correo electrónico del usuario (único).
     - `imagen`: Ruta de la imagen de perfil del usuario.
     - `password`: Contraseña del usuario.
     - `reference`: Referencia adicional del usuario.
     - `is_active`: Estado del usuario (`1` para activo, `0` para inactivo).
     - `created_at`: Fecha de creación del registro.
     - `updated_at`: Fecha de última actualización del registro.

#### 8. **`commentary`**
   - **Descripción**: Almacena los comentarios realizados por los usuarios sobre los transportes.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_user`: Clave foránea que referencia a `user`.
     - `id_transport`: Clave foránea que referencia a `transport`.
     - `comment`: Texto del comentario.
     - `is_banned`: Estado del comentario (`1` para baneado, `0` para no baneado).
     - `created_at`: Fecha de creación del comentario.
     - `updated_at`: Fecha de última actualización del comentario.

#### 9. **`calification`**
   - **Descripción**: Almacena las calificaciones que los usuarios dan a los transportes.
   - **Campos**:
     - `id_user`: Clave foránea que referencia a `user`.
     - `id_transport`: Clave foránea que referencia a `transport`.
     - `calification`: Calificación (entre 1 y 5).
     - `created_at`: Fecha de creación de la calificación.
     - `updated_at`: Fecha de última actualización de la calificación.

#### 10. **`stop`**
   - **Descripción**: Contiene las paradas de transporte disponibles.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_municipalities`: Clave foránea que referencia a `cat_municipalities`.
     - `latitude`: Latitud de la parada.
     - `longitude`: Longitud de la parada.
     - `name`: Nombre de la parada.
     - `imagen`: Ruta de la imagen asociada a la parada.

#### 11. **`transport_stop`**
   - **Descripción**: Relaciona los transportes con las paradas.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_transport`: Clave foránea que referencia a `transport`.
     - `id_stop`: Clave foránea que referencia a `stop`.

#### 12. **`route_coordinates`**
   - **Descripción**: Almacena las coordenadas de las rutas de transporte.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `id_transport`: Clave foránea que referencia a `transport`.
     - `latitude`: Latitud de la coordenada.
     - `longitude`: Longitud de la coordenada.

#### 13. **`stop_routes`**
   - **Descripción**: Define las rutas entre paradas, incluyendo distancia, tiempo y precio.
   - **Campos**:
     - `id`: Identificador único (clave primaria).
     - `stop_id_from`: Clave foránea que referencia a `stop` (parada de origen).
     - `stop_id_to`: Clave foránea que referencia a `stop` (parada de destino).
     - `distance`: Distancia entre las paradas.
     - `time`: Tiempo estimado entre las paradas.
     - `price`: Precio del trayecto.

---

## Relaciones entre Tablas

- **`cat_degree`** está relacionada con **`cat_faculty`** a través de `id_faculty`.
- **`transport`** está relacionada con **`cat_type_of_transport`** y **`cat_line_of_transport`** a través de `id_type_of_transport` e `id_line_of_transport`, respectivamente.
- **`commentary`** y **`calification`** están relacionadas con **`user`** y **`transport`** a través de `id_user` e `id_transport`.
- **`stop`** está relacionada con **`cat_municipalities`** a través de `id_municipalities`.
- **`transport_stop`** relaciona **`transport`** y **`stop`**.
- **`route_coordinates`** está relacionada con **`transport`** a través de `id_transport`.
- **`stop_routes`** relaciona dos paradas (`stop_id_from` y `stop_id_to`).

---

## Consideraciones
- **Integridad Referencial:** Todas las claves foráneas están configuradas con ON DELETE CASCADE para mantener la integridad de los datos.
- **Índices Únicos:** Se han definido índices únicos en campos como id, email (en user), y otros para evitar duplicados.
- **Validación de Datos:** Se utilizan restricciones como CHECK para validar valores (por ejemplo, calificaciones entre 1 y 5).