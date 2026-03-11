---
title: Creating layers from existing files
description: Step-by-step guide to create or import vector layers in CartoDruid from SQLite, Shapefile, GeoJSON, GeoCSV and CSV files with SIGPAC parcel reference.
keywords: cartodruid, layer import, shapefile, geojson, geocsv, csv sigpac, sqlite, spatialite, vector layer, GIS
canonical: https://docs.cartodruid.es/en/latest/layer/capas_desde_fichero/
---

# 4 Creating layers from existing files

CartoDruid allows you to create new layers or modify existing layers by importing **Shapefile, GeoJSON and GeoCSV** files. This makes it easy to manage geographic information in a project quickly and flexibly.

1. First, open the **TOC (Table of Contents)**.

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

2. Click the **"Add layer"** button to open the dialog for selecting the layer type.

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

3. After selecting **"Vector layer"**, the following options will be available:

    <table>
    <tr>
        <td style="width: 100%;">
        <img src="../../img/capas/capas_3-1_0.png" style="width: 100%; height: auto;">
        </td>
    </tr>
    </table>

## 4.1 Load SQLite file

1. Click **"Load SQLite file"** from the layer menu.
2. A file explorer will open to select the `.sqlite` file containing the layer.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_b_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>SQLite layer loading form.</p>
    </td>
  </tr>
</table>

## 4.2 Load Shapefile, GeoJSON and GeoCSV files (CSV with WKT geometry)

1. Click the option corresponding to the file type:  
   **"Load Shapefile"**, **"Load GeoJSON"** or **"Load GeoCSV"**.
2. The file explorer will open to select the file.

### 4.2.1 GeoCSV import considerations

If the file is a **GeoCSV**, a dialog will appear with two dropdown menus:

- Select the **file encoding**.
- Select the **Coordinate Reference System (CRS)** in which the geometries are defined.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

## 4.3 Load CSV file with SIGPAC parcel reference (c_refrec)

If the file is a **CSV without geometry** but contains the `c_refrec` field (SIGPAC parcel reference):

- The project must have a **SIGPAC parcels layer correctly configured**.
- The geometry will be automatically obtained from that layer.
- Only the **CSV encoding** needs to be selected; the reference system will be automatically taken from the parcels layer.

### 4.3.1 New vector layer creation form

Once the encoding (and CRS if applicable) is selected, the **new vector layer creation form** will be displayed.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-3-2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

- The **geometry type** is automatically determined from the geometries present in the imported file.
- The **reference system** will default to the one in the imported file, although it can be changed.
- At the bottom of the form, the **fields from the file** are listed and can be removed if necessary.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_desde_fichero_4-3-3.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

### 4.3.2 Field types and prefixes

- All fields in CSV files initially appear as **Text**, but they can be changed to **Numeric, Date or Boolean** if the data is compatible.

**Automatic prefixes:**

- **DATE fields** → prefix `f_`
- **BOOLEAN fields** → prefix `b_`

## 4.4 ITACyL repository layer

1. Click **"ITACyL repository layer"**.
2. A dialog will appear allowing you to select any of the layers available in the **ITACyL repository**.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_c_1.png" style="width: 100%; height: auto;">
    <td style="width: 66%;">
      <p>When accepted, the <strong>layer configuration</strong> is added to the <strong>layer XML file</strong>.  
      If the data is not available on the device, the files must be <strong>downloaded from the ITACyL Cartography repository</strong> at the following link:  
      <a href="https://www.cartodruid.es/cartografia" target="_blank">https://www.cartodruid.es/cartografia</a>.</p>
    </td>
  </tr>
</table>