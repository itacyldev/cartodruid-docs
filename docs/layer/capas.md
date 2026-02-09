---
title: Creating layers from CartoDruid
description: Step-by-step guide on creating vector, raster, WMS, and TMS layers from scratch in CartoDruid, including layer configuration, symbology, and database updates.
keywords: cartodruid, vector layer, raster layer, WMS, TMS, SQLite, spatialite, GIS, layer configuration, symbology, map layers
canonical: https://docs.cartodruid.es/es/latest/layer/capas/
extra:
  hreflang:
    - lang: en
      url: https://docs.cartodruid.es/es/latest/layer/capas/
    - lang: es
      url: https://docs.cartodruid.es/es/latest/layer/capas.es/
---
# 3 Creating layers from CartoDruid
This section indicates how to create a vector layer from scratch with CartoDruid.

1. To create layers from CRTDRD, the first thing to do is open the TOC.

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

2. Pressing the "Add layer" button will open the dialog for selecting the layer type.

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

### 3.1 Creation of vector layer

When selecting "Vector Layer," we will have the following options:

<table>
  <tr>
    <td style="width: 33%;" colspan="3">
      <img src="../../img/capas/capas_3-1_0.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

a. We select "New layer" and the following form will appear:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_a_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>1. At the top, basic layer identification and display fields are shown:</p>
      <ul>
        <li><strong>Identification and name:</strong> These are the values that will appear to identify the layer in the Table of Contents menu.</li>
        <li><strong>Type:</strong> We must select the type of geometry we will work with: point (e.g., points of interest, trees, stumps, etc.), line (e.g., tracks, boundaries, etc.), or polygons (for surface work).</li>
        <li><strong>Minimum and Maximum Scale:</strong> These indicate the zoom levels at which the layer will be visible (levels range from 0 to 21, with 21 being the closest to the ground).</li>
        <li><strong>Minimum and Maximum Scale for Labels:</strong> This means the same as the previous but for the geometry labels.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_a_2.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>2. Immediately after, a selection of proposed "special" fields appears, which will be automatically added to the layer if the check is left marked.</p>
      <ul>
        <li><strong>Photo Gallery:</strong> This opens the possibility of attaching photos to the entities of a layer (points, lines, and polygons).</li>
        <li><strong>Plot Reference:</strong> Adds a field to the layer to update it with the reference of the plot located underneath the entity.</li>
        <li><strong>Inspected:</strong> Workmark to indicate that this entity has been inspected.</li>
        <li><strong>Creation/Update Dates:</strong> Two fields to indicate when the entity was created and when the last change was made to it.</li>
        <li><strong>Inspection Date:</strong> A date field.</li>
        <li><strong>Observations:</strong> A text field to fill in the field.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_a_3.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>3. In the next section, within the same form, the user can add the fields they need. For each field, the name and type must be indicated. CartoDruid supports types:</p>
      <ul>
        <li><strong>Text:</strong> Text.</li>
        <li><strong>Integer:</strong> Whole number without decimals</li>
        <li><strong>Double:</strong> A number with decimals.</li>
        <li><strong>Date:</strong> Date.</li>
        <li><strong>Boolean:</strong> A boolean field (yes/no, 1/0).</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_a_4.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>4. Finally, the layer symbology must be selected. Symbology will determine how the layer entities will be drawn (border, background color, transparency, etc.).</p>
      <ul>
        <li>By default, CartoDruid comes with a series of <strong>predefined symbologies</strong> for the user to choose from, but each project can define its own symbologies.</li>
        <li>
        Symbology can be defined both at the <strong>entity (geometry)</strong> level and at the <strong>label</strong> level, if you want the identifying text that appears on the map to appear with a specific style.</li>
        <li>It is also possible to configure <strong>conditional symbologies</strong> based on entity attributes or rules, as we will see later.</li>
      </ul>
    </td>
  </tr>
</table>

b. If we select the "Load sqlite file" option, we will be given the option to open a file explorer to look for the .sqlite file containing the layer we want to load. Once the file is selected, the following form will appear:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_b_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>It is very similar to the previous one, only in this case we have to <strong>select the table</strong> we are going to load, and we <strong>cannot add any fields</strong>. The structure of the table is defined and cannot be edited from this form.</p>
    </td>
  </tr>
</table>

c. If we select the "ITACYL repository layer" option, a dialog appears where we can select to add any of the layers available in the ITACyL repository.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_c_1.png" style="width: 100%; height: auto;">
    <td style="width: 66%;">
      <p>Upon accepting, the <strong>layer configuration</strong> is simply added to the <strong>XML layers file</strong>. If not already on the device, you would need to download the files containing the data from the ITACyL Cartography repository from this link: <a href="https://www.cartodruid.es/cartografia" target="_blank">https://www.cartodruid.es/cartografia</a>.</p>
    </td>
  </tr>
</table>

### 3.2 Creation of raster layer

For creating a "Raster Layer," we have the following options:

<table>
  <tr>
    <td style="width: 33%;" colspan="3">
      <img src="../../img/capas/capas_3-2_0.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

If we select MBTiles/Rasterlite file, a file explorer will open to select the corresponding file. After this, the following dialog will appear:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>We indicate the <strong>name</strong> and <strong>description</strong> that will appear in the TOC and the <strong>minimum and maximum display scales</strong>.</p>
    </td>
  </tr>
</table>

#### 3.2.1 WMS layer

When we want to add a WMS layer, it must be previously added to the WMS services catalog. For this, when we press on WMS Layer, the following dialog opens:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-1_0.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Here we have the list of different <strong>WMS service groups</strong> we have.</p>
      <ul>
        <li>By default, we only have the <strong>"Default"</strong> group, which is where all services will be loaded when we add them.</li>
        <li>If we want to create another group, we press <strong>"New Group"</strong>.</li>
        <li>If we want to add a new service, we press <strong>"New WMS Service"</strong>.</li>
      </ul>
    </td>
  </tr>
</table>

When pressing "New WMS Service," the following dialog appears where we indicate the Service characteristics:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-1_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>In this form, we need to specify the following parameters to configure the WMS service:</p>
      <ul>
        <li><strong>URL</strong> of the service.</li>
        <li><strong>Layer name</strong> within the service.</li>
        <li><strong>Name</strong> with which we will display the <strong>service</strong> in CartoDruid.</li>
        <li><strong>Description.</strong></li>
        <li><strong>WMS Version:</strong> Choose between 1.3.0 and 1.1.x.</li>
        <li><strong>Service Reference System:</strong> By default, it is WGS84 (4326).</li>
        <li><strong>Image Format:</strong> You can choose between JPG or PNG.</li>
        <li><strong>Minimum and Maximum Visualization Scales.</strong></li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-1_2.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Once the service is added to the catalog (by default in the <strong>"Default"</strong> group), we can:</p>
      <ul>
        <li><strong>Load it</strong> into the map.</li>
        <li><strong>Edit</strong> its properties.</li>
        <li><strong>Delete</strong> it from the catalog.</li>
        <li><strong>Move it to</strong> another group we have created.</li>
      </ul>
    </td>
  </tr>
</table>

#### 3.2.2 TMS layer

Similarly to WMS services, when we want to add a TMS layer, it must first be loaded into the TMS services catalog. To do this, when we click on TMS Layer, the following dialog will open:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-2_0.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Here we have the list of different <strong>TMS service groups</strong> we have:</p>
      <ul>
        <li>By default, we only have the <strong>"Default"</strong> group, which is where all services will be loaded when added.</li>
        <li>If we want to create another group, click on <strong>"New Group"</strong>.</li>
        <li>If we want to add a new service, click on <strong>"New TMS Service"</strong>.</li>
      </ul>
    </td>
  </tr>
</table>

When pressing "New TMS Service," the following dialog appears where we indicate the Service characteristics:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-2_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <ul>
        <li><strong>URL</strong> of the service.</li>
        <li><strong>Name</strong> under which we will display the service in CartoDruid.</li>
        <li><strong>Visualization scales</strong> <strong>minimum and maximum.</strong></li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-2_2.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Once the service is added to the catalog (by default to the "Default" group), we can load it on the map, edit it, delete it, or move it to another group.</p>
    </td>
  </tr>
</table>

With the data entered in the form, the application will create a sqlite-spatialite database in the /cartodroid/data directory of the device and update the file cartodroid/config/crtdrdLayers.xml to include the definition of the new layer.
