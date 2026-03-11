---
title: Creación de capas a partir de archivos existentes
description: Guía paso a paso para crear o importar capas vectoriales en CartoDruid a partir de ficheros SQLite, Shapefile, GeoJSON, GeoCSV y CSV con referencia SIGPAC.
keywords: cartodruid, importación de capas, shapefile, geojson, geocsv, csv sigpac, sqlite, spatialite, capa vectorial, GIS
canonical: https://docs.cartodruid.es/es/latest/layer/capas_desde_fichero.es/
---
# 4 Creación de capas a partir de archivos existentes

CartoDruid permite crear nuevas capas o modificar capas existentes a partir de la importación de ficheros Shapefile, GeoJSON y GeoCSV. Esto facilita gestionar información geográfica en el proyecto de manera rápida y flexible.

1. Lo primero que debemos hacer es abrir la TOC.

    <table>
    <tr>
        <td style="width: 33%;">
        <img src="../../img/capas/capas_3_1_1.png" style="width: 100%; height: auto;">
        </td>
        <td style="width: 33%;">
        <img src="../../img/capas/capas_3_1_2.png" style="width: 100%; height: auto;">
        </td>
        <td style="width: 33%;">
        <img src="../../img/capas/capas_3_1_3.png" style="width: 100%; height: auto;">
        </td>
    </tr>
    </table>

2. Pulsando el botón "Añadir capa" se abrirá el diálogo para la selección del tipo de capa.

    <table>
    <tr>
        <td style="width: 33%;">
        <img src="../../img/capas/capas_3_2_1.png" style="width: 100%; height: auto;">
        </td>
        <td style="width: 33%;">
        <img src="../../img/capas/capas_3_2_2.png" style="width: 100%; height: auto;">
        </td>
        <td style="width: 33%;">
        </td>
    </tr>
    </table>

3. Al seleccionar "Capa vectorial" y tendremos las siguientes opciones:

    <table>
    <tr>
        <td style="width: 100%;">
        <img src="../../img/capas/capas_3-1_0.png" style="width: 100%; height: auto;">
        </td>
    </tr>
    </table>

## 4.1 Cargar fichero SQLite

1. Pulsa la opción **"Cargar fichero SQLite"** desde el menú de capas.
2. Se abrirá el explorador de archivos para seleccionar el fichero `.sqlite` que contiene la capa.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_b_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Formulario de carga de capa SQLites.</p>
    </td>
  </tr>
</table>

## 4.2 Cargar fichero Shapefile, GeoJSON y GeoCSV (CSV con geometría WKT)

1. Pulsa la opción correspondiente según el tipo de fichero:  
   **"Cargar fichero Shapefile"**, **"Cargar fichero GeoJSON"** o **"Cargar fichero GeoCSV"**.
2. Se abrirá el explorador de archivos para elegir el fichero.

### 4.2.1 Consideraciones al importar GeoCSV

Si el fichero es un **GeoCSV**, aparecerá un diálogo con dos desplegables:

- Seleccionar la **codificación** del fichero.
- Seleccionar el **Sistema de Referencia (SR)** en el que se encuentran las geometrías.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

## 4.3 Cargar fichero CSV con referencia de recinto SIGPAC (c_refrec)

Si el fichero es un **CSV sin geometría**, pero contiene el campo `c_refrec` (referencia SIGPAC):

- El proyecto debe tener una **capa de recintos SIGPAC correctamente configurada**.
- La geometría se obtendrá automáticamente de dicha capa.
- Solo será necesario seleccionar la **codificación del CSV**; el sistema de referencia se toma automáticamente de la capa de recintos.

### 4.3.1 Formulario de creación de nueva capa vectorial

Una vez seleccionada la codificación (y SR si aplica), se mostrará el formulario de creación de nueva capa:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-3-2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

- El **tipo de geometría** se determina automáticamente según las geometrías presentes en el fichero.
- El **sistema de referencia** por defecto será el del fichero importado, pero puede modificarse.
- En la parte inferior se listan los **campos del fichero**, que pueden eliminarse si no se necesitan.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-3-3.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

### 4.3.2 Tipos de campos y prefijos

- Todos los campos en CSV aparecen inicialmente como **Texto**, pero se pueden cambiar a **Numérico, Fecha o Booleano** si los datos son compatibles.
- **Prefijos automáticos:**  
  - Campos tipo **DATE** → prefijo `f_`  
  - Campos tipo **BOOLEAN** → prefijo `b_`

## 4.4 Capa repositorio ITACyL

1. Pulsa **"Capa repositorio ITACyL"**.
2. Aparecerá un diálogo para seleccionar cualquiera de las capas disponibles en el repositorio del ITACyL.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_c_1.png" style="width: 100%; height: auto;">
    <td style="width: 66%;">
      <p>Al aceptar, simplemente se añade la <strong>configuración de la capa</strong> en el fichero <strong>XML de capas</strong>. Si no se tienen los datos en el dispositivo, habría que <strong>descargar los ficheros que contienen los datos</strong> desde el repositorio de Cartografía del ITACyL, disponible en este enlace: <a href="https://www.cartodruid.es/cartografia" target="_blank">https://www.cartodruid.es/cartografia</a>.</p>
    </td>
  </tr>
</table>