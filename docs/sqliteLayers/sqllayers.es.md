---
title: Capas SQLite-Spatialite en CartoDruid
description: Guía sobre los requisitos que debe cumplir una capa spatialite para ser utilizada en CartoDruid y la nomenclatura de campos para checkboxes, fechas y firmas.
keywords: cartodruid, capas vectoriales, spatialite, requisitos, pk_uid, Geometry, multipart, nomenclatura de campos, checkboxes, fechas, firmas, GIS, configuración XML
canonical: https://docs.cartodruid.es/es/latest/sqliteLayers/sqllayers.es/
---
# 9 Capas SQLite-Spatialite en CartoDruid

### 9.1 Requisitos

Requisitos que debe cumplir una capa spatialite para poder ser utilizada en CartoDruid:

* La capa debe tener correctamente definido el sistema de referencia.
* La tabla debe tener un campo de clave primaria con el nombre `pk_uid`.
* El campo que contiene la geometría en la tabla se debe llamar Geometry (con "G" en mayúscula).
* Para dar robustez a la edición, es conveniente utilizar tipos de datos multiparte: `MULTIPOLYGON, MULTILINESTRING, MULTIPOINT`. Esto se puede forzar con la siguiente sentencia:

    ```sql
    update geometry_columns set type = 'MULTIPOLYGON' where f_table_name = 'inspeccion'
    ```

    Si ya existen entidades en la capa, podemos modificar su tipo utilizando la siguiente sentencia:

    ```sql
    update inspeccion set Geometry = CastToMultiPolygon(Geometry);
    ```

### 9.2 Nomenclatura de los nombres de campos de las tablas {#nomenclatura-nombres-campos-tablas}

* Para mostrar un componente de tipo checkbox en un formulario, el nombre del campo deberá comenzar por "B_", y se definirá en la tabla como tipo entero. CartoDruid almacenará el valor del checkbox como 1 o 0. En este caso el tipo del campo de la Base de datos será INTEGER.

* Para mostrar un componente de tipo fecha, el nombre del campo deberá de comenzar por "F_", y se almacenará en la base de datos como un DOUBLE (timestamp). Si la tabla está previamente creada, para este tipo de campos también se puede utilizar el tipo INTEGER.

* Para mostrar u componente de tipo firma, el nombre del campo deberá de comenzar por "S_", y se almacenará en la base de datos como un tipo BLOB.