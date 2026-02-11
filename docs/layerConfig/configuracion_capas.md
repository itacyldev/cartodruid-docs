---
title: Layer configuration in projects
description: Detailed guide on configuring vector and raster layers in CartoDruid, including TOC behavior, symbology, permissions, and data source descriptors such as SpatiaLite, Rasterlite, MBTiles, TMS, and WMS.
keywords: cartodruid, vector layers, raster layers, layer configuration, symbology, TOC, data sources, SpatiaLite, Rasterlite, MBTiles, TMS, WMS, GIS
canonical: https://docs.cartodruid.es/es/latest/layerConfig/configuracion_capas/
---
# 5 Layer configuration in projects
CartoDruid allows the user to parameterize a limited set of options for layers and the TOC. To use the full power of the tool, manual configuration is necessary. This section describes the content and structure of the configuration files and includes practical examples of handling.

### 5.1 General file structure

For each project configured in CartoDruid, there will be a `crtdrdLayer.<project_id>.xml` file in the `cartodroid/config/` folder. This file stores the reference to the layers that will be displayed in the project and their behavior (display, permissions, operations, etc.).

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WKSLayerConfiguration</td>
      <td>Root element of the configuration file. It will have a nested <code>layers</code> element, within which the layers are configured with <code>entry</code> tags.</td>
    </tr>
    <tr>
      <td>layers</td>
      <td>Element that groups the list of project layers.</td>
    </tr>
    <tr>
      <td>entry</td>
      <td>Represents an entry in the TOC. It must have two nested elements, <code>string</code>, which will be the layer identifier, and another element with the reference to the specific layer model to use:<br>• <code>es.jcyl.ita.crtcyl.core.model.VectorialLayer</code>: to add a vector layer.<br>• <code>es.jcyl.ita.crtcyl.core.model.RasterLayer</code>: to add a raster layer.</td>
    </tr>
  </tbody>
</table>

An example of this file:

```xml
<es.jcyl.ita.crtcyl.core.config.WKSLayerConfiguration>
 <layers class="java.util.LinkedHashMap">
 <!-- task layer configuration -->
 <entry>
 <string>tasks</string>
 <es.jcyl.ita.crtcyl.core.model.VectorialLayer> 
 ... 
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 </entry>
 <!-- orthophoto layer configuration -->
 <entry>
 <string>ortofotos_pnoa</string>
 <es.jcyl.ita.crtcyl.core.model.RasterLayer> 
 ... 
 </es.jcyl.ita.crtcyl.core.model.RasterLayer>
 </entry>
 ... 
 </layers>
</es.jcyl.ita.crtcyl.core.config.WKSLayerConfiguration>
```

### 5.2 Vector layer configuration 

The following table lists the tags that can be used within the es.jcyl.ita.crtcyl.core.model.VectorialLayer element.

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- Basic Layer Configuration -->
    <tr><td>id</td><td>Unique layer identifier. It must be a text string without white spaces, containing only letters and digits.</td></tr>
    <tr><td>nombre</td><td>Visible name of the layer in the TOC.</td></tr>
    <tr><td>descripcion</td><td>Description of the layer to display in the TOC.</td></tr>
    <tr><td>vectorialType</td><td>Types of features that the layer stores: must have one of these values:<br>• 10 for MULTIPOINT geometries<br>• 20 for POLYLINE geometries<br>• 30 for MULTIPOLYGON geometries</td></tr>
    <tr><td>showOnTOC</td><td>Determines if the layer is shown in the TOC layer list.</td></tr>

    <!-- Display and Symbologies -->
    <tr class="section-title"><td colspan="2">Display and Symbologies</td></tr>
    <tr><td>orden</td><td>Position of the layer in the TOC layer list.</td></tr>
    <tr><td>zOrder</td><td>Determines the overlapping order of the layers when painting. The layer with the highest zOrder appears closest to the user.</td></tr>
    <tr><td>range</td><td>Indicates the zoom levels at which the layer will be visible. To indicate it, two tags max and min must be nested to indicate the range. Ex: <br><pre><code>
      &lt;range&gt;
          &lt;min&gt;15&lt;/min&gt;
          &lt;max&gt;21&lt;/max&gt;
      &lt;/range&gt;
      </code></pre></td></tr>
    <tr><td>labels</td><td>If labels should be rendered by default: <code>true|false</code>.</td></tr>
    <tr><td>labelRange</td><td>Indicates the display ranges of the labels. It is configured with nested <code>min/max</code> elements similar to the range tag.</td></tr>
    <tr><td>geometrySizeRestriction</td><td>Indicates the ranges in square meters allowed for a geometry in this layer. Controls the size of new geometries, size modifications, and divisions. It is configured with nested <code>min/max</code> elements similar to the range tag.</td></tr>
    <tr><td>labelExpression</td><td>SQL expression for label generation. Example:<br><code>&lt;labelExpression&gt;</code>field1 || field2<code>&lt;/labelExpression&gt;</code></td></tr>
    <tr><td>showArrowHeads</td><td>Show orientation arrows of the points of the entities. Only applicable for linear entities. <code>true|false</code>.</td></tr>
    <tr><td>symbId</td><td>Symbology identifier to apply by default to the geometries of a layer. The symbology must exist in the project file or in <code>crtdrdSymbologies.xml</code>.</td></tr>
    <tr><td>labelSymbId</td><td>Symbology identifier to apply by default to the labels of a layer. The symbology must exist in the project file or in <code>crtdrdSymbologies.xml</code>.</td></tr>
    <tr><td>symbologyExpression</td><td>Expression that will be used to calculate the symbology of the layer entities.</td></tr>
    <tr><td>labelSymbologyExpression</td><td>Expression that will be used to calculate the symbology of the entity labels.</td></tr>

    <!-- Permissions and Operations -->
    <tr class="section-title"><td colspan="2">Permissions and Operations at Layer Level</td></tr>
    <tr><td>allowOverlaps</td><td>If geometries with overlaps within the same layer can be created. <code>true|false</code>.</td></tr>
    <tr><td>canChangeSymbology</td><td>If modifying the layer symbology is allowed. <code>true|false</code>.</td></tr>
    <tr><td>canCopy</td><td>If elements of a layer can be copied to others. <code>true|false</code>.</td></tr>
    <tr><td>canCreate</td><td>If creating new elements in the layer is allowed. <code>true|false</code>.</td></tr>
    <tr><td>canDeleteAll</td><td>If the "Delete all elements of the layer" button should be shown in the TOC. <code>true|false</code>.</td></tr>
    <tr><td>canDieCut</td><td>Determines if the layer entities can be die-cut. <code>true|false</code>.</td></tr>
    <tr><td>canEditVertices</td><td>If the "Edit vertices" operation should be shown during the editing of a layer geometry. <code>true|false</code>.</td></tr>
    <tr><td>canExplode</td><td>If using the "Explode geometries" operation in the layer is allowed. <code>true|false</code>.</td></tr>
    <tr><td>canPaste</td><td>If pasting geometries in the layer is allowed. <code>true|false</code>.</td></tr>
    <tr><td>exportable</td><td>If exporting or sharing the layer is allowed. If this tag is not included, by default it is <code>true</code>.</td></tr>
    <tr><td>canSanitize</td><td>If the "Clean layer data" button should appear in the TOC. <code>true|false</code>.</td></tr>
    <tr><td>canZoomVisibles</td><td>If the "Zoom to visible elements" button should be shown in the TOC. <code>true|false</code>.</td></tr>
    <tr><td>deletable</td><td>If deleting an entity from the layer is allowed. <code>true|false</code>.</td></tr>
    <tr><td>editable</td><td>If the entities of a layer can be edited (both geometries and attributes). <code>true|false</code>.</td></tr>
    <tr><td>identificable</td><td>If the identification operation should be active for the layer. <code>true|false</code>.</td></tr>
    <tr><td>inspeccionable</td><td>If the "Inspection filtering" button should be active when the layer is selected. <code>true|false</code>.</td></tr>
    <tr><td>layerEditable</td><td>Determines if the layer can be configured (name, description, scale restrictions). <code>true|false</code>.</td></tr>
    <tr><td>layerRemovable</td><td>If the table can be removed from the TOC. <code>true|false</code>.</td></tr>
    <tr><td>searchable</td><td>If when showing the list of layer entities, the search filters are shown. <code>true|false</code>.</td></tr>
    <tr><td>selectable</td><td>If the layer entities can be selected. <code>true|false</code>.</td></tr>
    <tr><td>visible</td><td>If the layer is visible or not in the TOC. <code>true|false</code>.</td></tr>

    <!-- Layer Information Source -->
    <tr class="section-title"><td colspan="2">Layer Information Source</td></tr>
    <tr><td>sources</td><td>Defines the data source to locate the database or file in which the layer is found. A layer can include several data sources. Within this tag, one of the following elements will be included. See their specific configuration below:
    <ul>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor</code></li>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor</code></li>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteQueryServiceDescriptor</code></li>
    </ul>
    </td></tr>

    <!-- Form Configuration -->
    <tr class="section-title"><td colspan="2">Form Configuration</td></tr>
    <tr><td>alphaEditFinisher</td><td>Identifier of the form to use to edit the layer attributes.</td></tr>
    <tr><td>attributesClassName</td><td>Class that will be used to retrieve the layer information. See data sources section for more information.</td></tr>
    <tr><td>editAfterCreation</td><td>If after an edit or creation the attribute editing form should be launched. <code>true|false</code>.</td></tr>
    <tr><td>valuesFromList <br><i>(Not recommended)</i></td><td>Relates the form fields that will display a selection dropdown with the file in which the values are. If there is more than one, they are separated with the ";" character. <br> <code>C_USO_SIGPAC=alegaciones15usoSIGPAC;b_B_SUP_COMPROBADA=siNO;</code> <br><br> For the <code>C_USO_SIGPAC</code> field of the layer, the values contained in the file <code>/cartodroid/values/alegaciones15usoSIGPAC.properties</code> will be displayed. <br><br> Which will have the format: <br><code>TA=TIERRAS ARABLES (TA)</code> <br><code>PR=PASTO ARBUSTIVO (PR)</code> <br><code>PA=PASTO CON ARBOLADO (PA)</code> <br><br> <strong>Note:</strong> since version 0.56 of CartoDroid, it is recommended to configure dropdowns directly from the form configuration. This configuration is still maintained so that previous projects work, but the recommended way to configure dropdowns is indicated in section <a href="../../form/formularios/#uso-de-desplegables">7.2.4 - <em>Using Dropdowns in Forms</em></a>.</td></tr>
    <tr><td>sqlIdentify</td><td>Query that will be executed for identification.</td></tr>
    <tr><td>sqlAsListView</td><td>Query that will be executed to show the list of entities.</td></tr>
    <tr><td>definitionQuery</td><td>SQL query that will be executed to filter the entities. The text introduced within the tag is applied as a <code>where</code> clause within the data retrieval query (filter).</td></tr>

  </tbody>
</table>



The following example shows the minimum XML that must be defined to configure a vector layer. In this case, it is a polygonal layer (vectorialType=30), the DB file is called plantations.sql and will be found in the cartodroid/data folder. The table that stores the layer is also called plantations and has a geographical index idx_plantations_Geometry.

```xml
<layers class="java.util.LinkedHashMap">
<entry>
 <string>layer1</string>
 <es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <id>plantations</id>
 <name>Plantations</name>
 <vectorialType>30</vectorialType> <!-- polygonal layer -->
 <srs>25830</srs>
 <attributesClassName>es.jcyl.ita.crtdrd.data.DefaultSqlite</attributesClassName>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 <dbURL>plantations.sqlite</dbURL>
 <dataTable>plantations</dataTable>
 <indexTable>idx_plantations_Geometry</indexTable> 
</es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
</sources> 
<symbId>REBECA</symbId>
 <range>
 <max>21</max>
 <min>0</min>
 </range>
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
</layers>
```

### 5.3 Raster layer configuration

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
  <!-- Layer Configuration -->
    <tr><td>id</td><td>Unique layer identifier. It must be a text string without white spaces, containing only letters and digits.</td></tr>
    <tr><td>nombre</td><td>Visible name of the layer in the TOC.</td></tr>
    <tr><td>descripcion</td><td>Description of the layer to display in the TOC.</td></tr>
    <tr><td>showOnTOC</td><td>Determines if the layer is shown in the TOC layer list.</td></tr>

    <!-- Display and Symbologies -->
    <tr class="section-title"><td colspan="2">Display and Symbologies</td></tr>
    <tr><td>orden</td><td>Position of the layer in the TOC layer list.</td></tr>
    <tr><td>zOrder</td><td>Determines the overlapping order of the layers when painting. The layer with the highest zOrder appears in the plane closest to the user.</td></tr>
    <tr><td>range</td><td>Indicates the zoom levels at which the layer will be visible. To indicate it, two tags max and min must be nested to indicate the range. Ex: <br><pre><code>
      &lt;range&gt;
          &lt;min&gt;15&lt;/min&gt;
          &lt;max&gt;21&lt;/max&gt;
      &lt;/range&gt;
      </code></pre></td></tr>

    <!-- Permissions and Operations at Layer Level -->
    <tr class="section-title"><td colspan="2">Permissions and Operations at Layer Level</td></tr>
    <tr><td>layerRemovable</td><td>If the table can be removed from the TOC. <code>true|false</code>.</td></tr>
    <tr><td>visible</td><td>If the raster image is visible or not.</td></tr>

    <!-- Layer Information Source -->
    <tr class="section-title"><td colspan="2">Layer Information Source</td></tr>
    <tr><td>sources</td><td>Defines the data source to locate the database or file in which the layer is found. A layer can include several data sources. Within this tag, one of the following elements will be included. See their specific configuration below: <ul>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RasterLiteServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoRasterLiteServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.MBTilesServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoMBTilesServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.WMSServiceDescriptor</code></li>
    </ul></td></tr>
  </tbody>
</table>

### 5.4 Data source configuration

To define the data source that CartoDruid should use to read the information of a layer, a `<sources>` tag must be nested within the layer definition tag, whether it is VectorialLayer or RasterLayer.

Within the sources tag, we will be able to define the necessary parameters to locate the data source that contains the cartography, a descriptor. In the following section, we will see the different types of descriptors.

On the other hand, in the layer configuration, in the attributesClassName attribute, CartoDruid is told how to process this descriptor and how to treat the layer geometries when reading them.

#### 5.4.1 Data sources for vector layers

To establish a data source against a vector layer, we must define two things:

* The implementation to be used (attributesClassName tag): determines how the geometries will be read.
* Data source descriptor: determines how the reference DB files are located.

**Select the Geometry Query Implementation**

When defining the object that will query the geometries, two parameters must be decided:

a) Geometry treatment:

* Regular geometries: CartoDruid will retrieve all geometries that intersect with the current screen (extend or bbox). Each geometry is retrieved complete.
* Large geometries: if the spatialite file has extremely large geometries (> 10,000 vertices, we are talking about geometries with an amplitude much higher than the municipal level, etc.), with the previous approach, navigation can be penalized. In these cases, an implementation can be used that retrieves only the part of the geometries shown on the screen and not the complete geometry.

b) DB file path definition:

* Single: in this case, we only want to use a single database
* Multiple: if we want the entities shown in a layer to come from several database files, CartoDruid can query all the DBs whose file name starts with a specific string.

    Using this, for example, we can have a layer of SIGPAC plots, which uses the files of Valladolid and Zamora by putting in the descriptor:
    ```xml
    <dbURL>plots.sqlite</dbURL>
    ```

    And leaving in the same folder the files plots_va.sqlite and plots_za.sqlite.

    This way, CartoDruid searches in that same folder for all files that start with "plots" and have the extension "sqlite" and uses them as data sources for the layer.

    <strong>Note:</strong> it is important to emphasize that multi-implementors can only be used for query operations on entities. If this type of implementor is used and an attempt is made to modify a geometry or its attributes, an error message will be displayed.

* Query: if we want the entities to be the result of a query on one or more tables in the DB.

Combining these two parameters, we have the four possible values that we can apply in the `<attributesClassName>` tag.

<table class="bordered">
  <thead>
    <tr>
      <th></th>
      <th>Simple Geometries</th>
      <th>Complex Geometries</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="first-column">Single File</td>
      <td>DefaultSqlite</td>
      <td>LargeSqlite</td>
    </tr>
    <tr>
      <td class="first-column">Multiple Files</td>
      <td>MultiSqlite</td>
      <td>MultiLargeSqlite</td>
    </tr>
    <tr>
      <td class="first-column">Query</td>
      <td colspan="2">QuerySqlite</td>
    </tr>
  </tbody>
</table>

**Data Source Descriptor**

When defining the location of a vector layer, CartoDruid supports three types of descriptors:

* <strong>File descriptor:</strong> in this case, we identify the exact location of the file, with an absolute path on the device or relative to the <code>/cartodroid/data folder</code>.

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">SpatiaLiteServiceDescriptor</td>
    </tr>
    <tr>
      <td>dbURL</td>
      <td>File location, with an absolute path on the device or relative to the <code>/cartodruid/data</code> folder.</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>Visible name of the layer in the TOC.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Identifies the geographic index associated with the layer.</td>
    </tr>
  </tbody>
</table>

Example:
```xml
<SpatiaLiteServiceDescriptor>
 <dbURL>/storage/emulated/0/cartodroid/data/plantations.sqlite</dbURL>
 <dataTable>plantations</dataTable>
 <indexTable>idx_plantations_Geometry</indexTable>
</SpatiaLiteServiceDescriptor>
```

* <strong>Repository reference descriptor:</strong> the previous system forces the identification of the file name and complicates the reuse of cartography between different projects and extensions. There is an alternative in which CartoDruid is told the characteristics of the layer, and it is responsible for searching throughout the device's file system for a layer with a name that meets those requirements.

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">RepoSpatiaLiteServiceDescriptor</td>
    </tr>
    <tr>
      <td>resourceid</td>
      <td>File location, with an absolute path on the device or relative to the <code>/cartodroid/data</code> folder.</td>
    </tr>
    <tr>
      <td>srid</td>
      <td>Reference system to be used in the layer.</td>
    </tr>
    <tr>
      <td>version</td>
      <td>Identifier for the cartographic product version.</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>Visible name of the layer in the TOC.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Identifies the geographic index associated with the layer.</td>
    </tr>
  </tbody>
</table>

With these attributes, CartoDruid will search the entire device for a file named:
```
<resourceid>_<srid>_<version>.sqlite
```

For example, for the following layer definition:
```xml
<RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>2016</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
</RepoSpatiaLiteServiceDescriptor>
```

CartoDruid will attempt to locate a database file with the following name:
```
recintos_25830_2016.sqlite
```

If we are using a multi implementor (attribute <code>attributesClassName</code>), CartoDruid will also find all database files that start with "recintos_25830_2016" and have the .sqlite extension.

* <strong>Query-based descriptor:</strong> If we want the data to be the result of an SQL query on one or more tables.

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">SpatiaLiteQueryServiceDescriptor</td>
    </tr>
    <tr>
      <td>fields</td>
      <td>Fields that the query will return.</td>
    </tr>
    <tr>
      <td>from</td>
      <td>- Table or tables involved. <br>- The table containing the geometries will be associated with the alias "g". <br>- Nested SQL subqueries can also be added.</td>
    </tr>
    <tr>
      <td>where (optional)</td>
      <td>Filter condition for the query.</td>
    </tr>
    <tr>
      <td>groupBy (optional)</td>
      <td>Grouping condition for the query.</td>
    </tr>
    <tr>
      <td>orderBy (optional)</td>
      <td>Ordering condition for the query.</td>
    </tr>
    <tr>
      <td>primaryKey</td>
      <td>Field that will act as the identifier in the query result. It must be within the list of fields in <code>fields</code>.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Spatial index of the table containing the geometries.</td>
    </tr>
    <tr>
      <td>dbURL</td>
      <td>Name of the sqlite file containing the data.</td>
    </tr>
  </tbody>
</table>

With these attributes, to obtain the entities, CartoDruid will generate a query like this:
```sql
SELECT <fields> FROM <from> WHERE <where> GROUB by <groupBy> ORDER BY <orderBy>
```

Which will be executed on the database specified in <code>&lt;dbURL&gt;</code>

For example, for this layer definition:
```xml
<SpatiaLiteQueryServiceDescriptor>
 <fields>c_parvit, group_concat("c_subparvit"), st_union(geometry) as geometry</fields>
 <from>subparcelas g</from>
 <groupBy>c_parvit</groupBy>
 <dbURL>ribera2023.sqlite</dbURL>
 <primaryKey>c_parvit</primaryKey>
 <indexTable>idx_subparcelas_Geometry</indexTable>
</SpatiaLiteQueryServiceDescriptor>
```
CartoDruid will generate the following query:
```sql
SELECT c_parvit, group_concat("c_subparvit"), st_union(geometry) as geometry
FROM subparcelas g
GROUP BY c_parvit;
```

#### 5.4.2 Data sources for raster layers

For raster layers, it is only necessary to specify a data source descriptor. Each raster format or service supported by CartoDruid will have its own descriptor.

##### 5.4.2.1 Configuration of rasterlite and MBTiles layers

Similarly to vector layers, we will have different descriptors depending on whether we want to reference the database directly by the file name or by referencing its cartographic characteristics:

<table class="bordered">
  <thead>
    <tr>
      <th></th>
      <th>File Descriptor</th>
      <th>Repository Reference Descriptor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="first-column">Rasterlite</td>
      <td>es.jcyl.ita.crtcyl.client.dao.source. RasterLiteServiceDescriptor</td>
      <td>es.jcyl.ita.crtcyl.client.dao.source. RepoRasterLiteServiceDescriptor</td>
    </tr>
    <tr>
      <td class="first-column">MBTiles</td>
      <td>es.jcyl.ita.crtcyl.client.dao.source. MBTilesServiceDescriptor</td>
      <td>es.jcyl.ita.crtcyl.client.dao.source. RepoMBTilesServiceDescriptor</td>
    </tr>
  </tbody>
</table>

**Rasterlite Layer Configuration with Repository Reference Descriptor**
```xml
<entry>
 <string>ORTOFOTO</string>
 <es.jcyl.ita.crtcyl.core.model.RasterLayer>
 <descripcion>Ortofotos PNOA 2020</descripcion>
 <id>ORTOFOTO</id>
 <name>Ortofotos 2020</name>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoRasterLiteServiceDescriptor>
 <resourceid>ortos</resourceid>
 <rastersTable>ortofotos</rastersTable>
 <srid>4326</srid>
 <version>2020</version>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoRasterLiteServiceDescriptor>
 </sources>
 <zOrder>15</zOrder>
 <range>
<max>21</max>
<min>16</min>
 </range>
 </es.jcyl.ita.crtcyl.core.model.RasterLayer>
</entry>
```

**MBTiles Layer Configuration with Repository Reference Descriptor**
```xml
<entry>
 <string>MAPASIGN</string>
 <es.jcyl.ita.crtcyl.core.model.RasterLayer>
 <descripcion>Mapas Topográficos del IGN 1/1.250.000, 1/500.000,1/200.000 y 1/25.000</descripcion>
 <id>MAPASIGN</id>
 <name>Mapas IGN</name>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoMBTilesServiceDescriptor>
 <resourceid>ignmapas</resourceid>
 <srid>4326</srid>
 <version>2016</version>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoMBTilesServiceDescriptor>
 </sources>
 <zOrder>10</zOrder>
 <range>
 <max>15</max>
 <min>6</min>
 </range>
 </es.jcyl.ita.crtcyl.core.model.RasterLayer>
</entry>
```

##### 5.4.2.2 TMS service (Tile Map Service) configuration

CartoDruid can consume online TMS services, but it can also serve tiles from the device’s file system, as long as they are stored in a structure similar to that maintained by TMS servers (<code>base_cache/nivel_zoom/x/y</code>).

In both cases, the descriptor to be used is the same, <code>es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor</code>, but if referring to an online service, the baseURI tag will be a URL starting with http, and if referring to a cache on the device, we will specify the path to the cache base.

The <code>invertY</code> tag, determines the direction in which the y-coordinate axis grows when constructing the tile URL. In the TMS standard definition, the tile URL is constructed as:

```
${baseURI}/nivel_zoom/x/y.${imageExtension}
```

The y-coordinate starts numbering from the bottom of the map. However, in the case of Google Maps services, the y-axis starts numbering from the top.

CartoDruid covers both cases by simply modifying the value of the <code>invertY</code> tag:

* <code>invertY = true</code>: access to Google-style tile maps.
* <code>invertY = false</code>: access to standard TMS maps.

For more information about these differences: <a href="http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/">http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/</a>

**Online TMS Access Configuration**
```xml
<es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
 <baseURI>http://a.tile.openstreetmap.org</baseURI>
 <imageExtension>png</imageExtension>
 <invertY>false</invertY>
</es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
```

**TMS Cache Access Configuration**
```xml
<es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
 <baseURI>/sdcard/cartorepo/osm_cache/</baseURI>
 <imageExtension>png</imageExtension>
 <invertY>false</invertY>
</es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
```

##### 5.4.2.3 WMS service (Web Map Service) configuration

CartoDruid supports a minimal implementation for accessing WMS services. The current version does not support GetCapabilities queries to check the server's capabilities, but almost all parameters of a WMS request can be configured.

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">es.jcyl.ita.crtcyl.client.dao.source.WMSServiceDescriptor</td>
    </tr>
    <tr>
      <td>layerName</td>
      <td>LAYERS parameter of the WMS request indicating the layer or layers to query. If more than one layer is queried at the same time, separate the names with commas.</td>
    </tr>
    <tr>
      <td>format</td>
      <td>FORMAT parameter, for example image/png.</td>
    </tr>
    <tr>
      <td>request</td>
      <td>Type of WMS request to be sent to the service, generally it will be GetMap.</td>
    </tr>
    <tr>
      <td>EPSG</td>
      <td>Reference system to be used.</td>
    </tr>
    <tr>
      <td>transparent</td>
      <td>Transparency of the returned tile. <code>True | false</code></td>
    </tr>
    <tr>
      <td>quality</td>
      <td>QUALITY parameter for the WMS request.</td>
    </tr>
    <tr>
      <td>invertAxisOrientation</td>
      <td>Indicates whether it is necessary to invert the axis order depending on the coordinate reference system (CRS).
        <ul>
          <li>For <strong>geographic</strong> coordinate systems, the value is generally "Y", although there are cases where axes are not inverted and the value should be "N".</li>
          <li>For <strong>projected</strong> coordinate systems, it is not necessary to invert the axes, so the value should be "N".</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>wmsVersion</td>
      <td>WMS version to be used.</td>
    </tr>
    <tr>
      <td>endpointList</td>
      <td>Configuration of the route to the online service.</td>
    </tr>
  </tbody>
</table>

An example of configuring a layer that queries a WMS service:
```xml
<entry>
 <string>pnoa_wms</string>
 <es.jcyl.ita.crtcyl.core.model.RasterLayer>
  <descripcion>PNOA WMS ITACyL</descripcion>
  <id>pnoa_wms</id>
  <name>pnoa_wms</name>
  <sources>
  <wms>
    <layerName>Ortofoto_CyL</layerName>
    <format>image/png</format>
    <request>GetMap</request>
    <EPSG>4326</EPSG>
    <quality>50</quality>
    <invertAxisOrientation>Y</invertAxisOrientation>
    <transparent>true</transparent>
    <wmsVersion>1.3.0</wmsVersion>
    <endPointList>
    <es.jcyl.ita.crtcyl.core.model.source.EndPoint>
      <URL>https://orto.wms.itacyl.es/WMS</URL>
    </es.jcyl.ita.crtcyl.core.model.source.EndPoint>
    </endPointList>
  </wms>
  </sources>
  <zOrder>14</zOrder>
  <range>
  <max>21</max>
  <min>0</min>
  </range>
 </es.jcyl.ita.crtcyl.core.model.RasterLayer>
</entry>
```
