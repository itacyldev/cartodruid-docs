---
title: SQLite-Spatialite layers in CartoDruid
description: Guía sobre los requisitos y la nomenclatura de campos en capas espaciales para su uso en CartoDruid, incluyendo convenciones para checkboxes, fechas y firmas.
keywords: cartodruid, capas vectoriales, requisitos, spatialite, pk_uid, Geometry, multipart, nomenclatura de campos, checkboxes, fechas, firmas, GIS, configuración XML
---
### 9.1 Requirements

Requirements that a spatialite layer must meet to be used in CartoDruid:

* The layer must have the reference system correctly defined.
* The table must have a primary key field named `pk_uid`.
* The field containing the geometry in the table must be called Geometry (with uppercase "G").
* To make editing more robust, it is convenient to use multipart data types: `MULTIPOLYGON, MULTILINESTRING, MULTIPOINT`. This can be forced with the following statement:

    ```sql
    update geometry_columns set type = 'MULTIPOLYGON' where f_table_name = 'inspeccion'
    ```

    If entities already exist in the layer, we can modify their type using the following statement:

    ```sql
    update inspeccion set Geometry = CastToMultiPolygon(Geometry);
    ```

### 9.2 Nomenclature of table field names {#nomenclatura-nombres-campos-tablas}

* To display a checkbox type component in a form, the field name must begin with "B_", and it will be defined in the table as an integer type. CartoDruid will store the checkbox value as 1 or 0. In this case, the field type in the database will be INTEGER.

* To display a date type component, the field name must begin with "F_", and it will be stored in the database as a DOUBLE (timestamp). If the table is previously created, for this type of fields the INTEGER type can also be used.

* To display a signature type component, the field name must begin with "S_", and it will be stored in the database as a BLOB type.
