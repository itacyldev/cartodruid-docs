---
title: Practical cases of vector layer parameterization
description: Guide on configuring vector layers in CartoDruid, including multi-file sources, editing restrictions, dynamic labels, entity list views, reusable filters, image naming, symbology by expression, custom point markers, and linear entity arrows.
keywords: cartodruid, vector layers, multi-sqlite, editing restrictions, dynamic labels, entity list view, definition queries, image naming, symbology expression, point markers, arrowheads, GIS, XML configuration
---
### 8.1 Configuration of vector layer with multiple files

In this example, we use a `MultiSqlite` implementer to query several plot databases. With this configuration, CartoDruid will search for all databases with the name `recintos_25830_2016_*.sqlite` and display the information as a single layer.

```xml
<entry>
<string>rec_2016</string>
<es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <attributesClassName>es.jcyl.ita.crtdrd.data.MultiSqlite</attributesClassName>
 <id>recintos_2016</id>
 <name>SIGPAC Plots 2016</name>
 <srs>25830</srs>
 <vectorialType>30</vectorialType>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>2016</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 </sources>
 <symbId>GREGORIO</symbId>
 <range>
 <max>21</max>
 <min>17</min>
 </range>
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

### 8.2 Configuration of vector layer with editing restrictions

In this case, we define a layer in which we don't want the information to be modified. For this, we use the tags `editable, deletable,` etc., so that the data modification options disappear from the menu.

```xml
<entry>
<string>rec_2016</string>
<es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <attributesClassName>es.jcyl.ita.crtdrd.data.MultiSqlite</attributesClassName>
 <id>recintos_2016</id>
 <name>SIGPAC Plots 2016</name>
 <srs>25830</srs>
 <vectorialType>30</vectorialType>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>20160229</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 </sources>
 <symbId>GREGORIO</symbId>
<!-- the layer is displayed at levels [17,21] -->
 <range>
 <max>21</max>
 <min>17</min>
 </range>
 <editable>false</editable>
 <deletable>false</deletable>
 <canCreate>false</canCreate>
 <canPaste>false</canPaste>
 <canSanitize>false</canSanitize>
</es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

### 8.3 Defining a dynamic label

In the text that is displayed associated with a geometry on the map (label), CartoDruid by default shows the `pk_uid` field of the table. The value to display can be configured to be calculated based on the layer fields using an SQL expression.

For example, in this case, the value of the "variety" field would be displayed.

```xml
<labelExpression>variedad</labelExpression>
```

But we can also apply functions so that this value is calculated based on different fields. In this case, the code and its description separated by a hyphen will be used as the label for the municipality geometry.

```xml
<labelExpression>cod_municipio || '-' || desc_municipio</labelExpression>
```

### 8.4 Changing the identification view of an entity

In this case, we will determine which fields we want to display in the identification form. For this, we can define an SQL expression directly in the `<sqlIdentify>` tag.

For example, in this case, we display a numeric field formatted to 2 decimal places and add the text "%" at the end.

```xml
<sqlIdentify>*, ROUND(cobertura,2) || '%' as cobertura</sqlIdentify>
```

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p>The <code>sqlIdentity</code> tag overwrites the way CartoDruid displays the entity information, therefore, the previous configuration adds <strong>"*"</strong> at the beginning, so that all the entity fields are displayed and the new field is added at the end.</p>
      <p>If we want to show only some of the fields, we can select them directly with the SQL expression. In this case, we only show four fields when identifying:</p>
      <p><code>&lt;sqlIdentify&gt;codigo, variedad, ROUND(cobertura,2)|| '%' as cobertura&lt;/sqlIdentify&gt;</code></p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_4.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

### 8.5 Changing the entity list view

Just as `sqlIdentify` allows modifying the information to be displayed when identifying an entity, `sqlAsListView` allows modifying the presentation of the entity list.

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p>By introducing the expression in the previous example, we will see that the list only shows the four selected columns.</p>
      <p><code>&lt;sqlAsListView&gt;
codigo, variedad, ROUND(cobertura,2)|| '%' as cobertura
&lt;/sqlAsListView&gt;</code></p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_5_1.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

Similarly, we can display information in the list (or in the identification) of a related table by including a subquery as part of the expression.

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p><code>&lt;sqlAsListView&gt;
*, (select nombre || ' ' || apellidos 
from propietario p 
where p.pk_uid = r.propietario_id) 
as propietario 
&lt;/sqlAsListView&gt;</code></p>
      <p>With the above expression, we add a query to calculate the <code>owner</code> field by obtaining it from an <code>Owner</code> table that exists in the same DB as the layer table.</p>
      <p>CartoDruid sets <strong>"r"</strong> as an alias for the current table, so this alias can be used to make the join in the subquery.</p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_5_2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

### 8.6 Configuring reusable filters for a layer

When working with a project, it is common to have a series of reusable filters to display different groups of information.

CartoDruid allows defining these filters at the layer level by establishing what are commonly known as definition queries. To do this, we define the file `cartodroid/values/<LAYER_ID>DefinitionQueries.properties`.

The file will contain the name that will appear in the filter dropdown and the definition query that will be established. For example, if we set the file `/cartodroid/values/plantacionesDefinitionQueries.properties` with the following content:
```
Coverage >10% = cobertura>0.1
Coverage >20% = cobertura>0.2
```

We will see that in the layer's filtering options, a dropdown for "Most used filters" appears, and when opened, the options included in the file will appear.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/casos/casos_practicos_8_6_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 33%;">
      <img src="../../img/casos/casos_practicos_8_6_2.png" style="width: 100%; height: auto;">
    </td>
   </tr>
</table>

In short, the text entered in the definition queries file is applied directly to the where clause of the entity query, so more complex queries can be made that, for example, apply boolean expressions to the fields:
```
Special condition=(variedad = 'PA' and sistcond = 'V') or (variedad = 'VE' and marco1 >= 3)
```

Or cross with another table to establish the condition based on fields of the referred table, for example to show only the plots of the associated owners:
```
Associated=exists(select 1 from propietario p where p.pk_uid = r.propietario_id and p.asociado = 'S')
```

### 8.7 Configuring names of images taken with cartodruid

It is possible to configure the names of entity images using an SQL expression on the entity. For this, the tag `<labelPictureExpression>` can be used. This tag defines the prefix that will be associated with the image file.
```xml
<labelPictureExpression>pk_uid||'-'||c_refrec</labelPictureExpression>
```

### 8.8 Entity symbolization by expression

In this case, we use the `symbologyExpression` attribute to calculate the style that should be applied to each entity based on the variety value.

```xml
<entry>
 <string>insp</string>
 <es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <id>insp</id>
 <nombre>CAP</nombre>
 <descripcion>CAP 2015</descripcion>
 <vectorialType>30</vectorialType>
 <simbologia>REBECA</simbologia>
 <origenes>
 <es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 <dbURL>dorueda.sqlite</dbURL>
 <dataTable>plantaciones</dataTable>
 <indexTable>idx_plantaciones_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 </origenes>
 <rango>
 <max>21</max>
 <min>0</min>
 </rango>
 <srs>25830</srs>
 <attributesClassName>es.jcyl.ita.crtdrd.data.DefaultSqlite</attributesClassName>
<!-- the label for the entity will be the variety code -->
 <labelExpression>variedad</labelExpression>
 <symbologyExpression>case when variedad = 'PA' then 'ALICIA' 
 when variedad = 'VI' then 'CARLA' 
 when variedad = 'VE' then 'CAMILO' 
 when variedad = 'TE' then 'ANA' 
 when variedad = 'SA' then 'JUAN' 
 when variedad = 'GA' then 'JAIME' 
 when variedad = 'CA' then 'IRENE' 
 when variedad = 'ME' then 'SOFIA' 
 else 'REBECA' end</symbologyExpression>
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

This would be the result: a layer in which geometries are displayed with different appearances based on the "variety" attribute.

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/casos/casos_practicos_8_8.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
  </table>
</div>

### 8.9 Changing default markers for point symbologies

It is possible to modify the default symbology of markers (point entities).

To do this, you must place the desired icon in the symbol directory of the CartoDruid directory on the device, and configure the point symbology in the following way in the `crtdrdSymbologies*.xml` file.

```xml
<symbologyConf>
<estilos>
<entry>
 <string>symbTopilloOK</string>
 <estilo class="estiloMarca">
 <id>symbTopilloOK</id>
 <urlImagen>topillo_ok.png</urlImagen>
 <transparencia>1.0</transparencia>
 <color>
 <rgb>0,255,255,255</rgb>
 </color>
 </estilo>
</entry>
</estilos>
<simbologias>
<entry>
 <string>symbTopilloOK</string>
 <symb class="punto">
 <id>symbTopilloOK</id>
 <idEstiloPunto>symbTopilloOK</idEstiloPunto>
 </symb>
</entry>
</simbologias>
</symbologyConf>
```

### 8.10 Showing arrowheads on linear entities

To show arrowheads on linear entities (to mark the recording direction), the following tag must be added to the layer:
```xml
<showArrowHeads>true</showArrowHeads>
```

