---
title: Configuración de capas en proyectos
description: Guía detallada sobre la parametrización de capas vectoriales y raster en CartoDruid, incluyendo TOC, simbologías, permisos y descriptores de origen de datos como SpatiaLite, Rasterlite, MBTiles, TMS y WMS.
keywords: cartodruid, capas vectoriales, capas raster, configuración de capas, simbología, TOC, orígenes de datos, SpatiaLite, Rasterlite, MBTiles, TMS, WMS, GIS
canonical: https://docs.cartodruid.es/es/latest/layerConfig/configuracion_capas.es/
extra:
  hreflang:
    - lang: es
      url: https://docs.cartodruid.es/es/latest/layerConfig/configuracion_capas.es/
    - lang: en
      url: https://docs.cartodruid.es/es/latest/layerConfig/configuracion_capas/
---
# 5 Configuración de capas en proyectos
CartoDruid permite al usuario parametrizar un conjunto limitado de opciones sobre las capas y la TOC. Para poder utilizar toda la potencia de la herramienta hay que recurrir a la configuración manual. En este apartado se describe el contenido y estructura de los ficheros de configuración y se incluyen ejemplos prácticos de manejo.

### 5.1 Estructura general del fichero

Por cada proyecto que tengamos configurado en CartoDruid, existirá un fichero `crtdrdLayer.<id_proyecto>.xml` en la carpeta `cartodroid/config/`. Este fichero almacena la referencia a las capas que se visualizarán en el proyecto y el comportamiento de las mismas (visualización, permisos, operaciones, etc).

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WKSLayerConfiguration</td>
      <td>Elemento raíz del fichero de configuración. Tendrá anidado un elemento <code>layers</code>, dentro del cual se configuran las capas con etiquetas <code>entry</code>.</td>
    </tr>
    <tr>
      <td>layers</td>
      <td>Elemento que agrupa el listado de capas del proyecto.</td>
    </tr>
    <tr>
      <td>entry</td>
      <td>Representa una entrada en la TOC. Debe tener anidados dos elementos, <code>string</code>, que será el identificador de la capa, y otro elemento con la referencia al modelo de capa concreto a utilizar: <br> • <code>es.jcyl.ita.crtcyl.core.model.VectorialLayer</code>: para añadir una capa vectorial. <br> • <code>es.jcyl.ita.crtcyl.core.model.RasterLayer</code>: para añadir una capa raster.</td>
    </tr>
  </tbody>
</table>


Un ejemplo de este fichero:

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

### 5.2 Configuración de capa Vectorial

En la siguiente tabla se enumeran las etiquetas que se pueden utilizar dentro del elemento es.jcyl.ita.crtcyl.core.model.VectorialLayer.

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <!-- Basic Layer Configuration -->
    <tr><td>id</td><td>Identificador único de la capa. Debe ser una cadena de texto sin espacios en blanco, que contenga únicamente letras y dígitos.</td></tr>
    <tr><td>nombre</td><td>Nombre visible de la capa en la TOC.</td></tr>
    <tr><td>descripcion</td><td>Descripción de la capa a mostrar en la TOC.</td></tr>
    <tr><td>vectorialType</td><td>Tipos de features que almacena la capa: debe tener uno de estos valores:<br>• 10 para geometrías MULTIPOINT<br>• 20 para geometrías POLYLINE<br>• 30 para geometrías MULTIPOLYGON</td></tr>
    <tr><td>showOnTOC</td><td>Determina si la capa se muestra en la lista de capas de la TOC.</td></tr>

    <!-- Display and Symbologies -->
    <tr class="section-title"><td colspan="2">Visualización y simbologías</td></tr>
    <tr><td>orden</td><td>Posición en la capa en el listado de capas de la TOC.</td></tr>
    <tr><td>zOrder</td><td>Determina el orden de solapamiento de las capas a la hora del pintado. La capa con mayor zOrden aparece en el plano más cercano al usuario.</td></tr>
    <tr><td>range</td><td>Indica los niveles de zoom en los que la capa estará visible. Para indicarlo se deben anidar dos etiquetas max y min para indicar el rango. Ej:<br><pre><code>
      &lt;range&gt;
          &lt;min&gt;15&lt;/min&gt;
          &lt;max&gt;21&lt;/max&gt;
      &lt;/range&gt;
      </code></pre>
    </td></tr>
    <tr><td>labels</td><td>Indica si las etiquetas deben renderizarse por defecto: <code>true|false</code>.</td></tr>
    <tr><td>labelRange</td><td>Indica los rangos de visualización de las etiquetas. Se configura con elementos anidados <code>min/max</code> de forma similar a la etiqueta range.</td></tr>
    <tr><td>geometrySizeRestriction</td><td>Indica los rangos en metros cuadrados que se permite para una geometría en esta capa. Controla el tamaño de las nuevas geometrías, de las modificaciones de tamaño y de las divisiones. Se configura con elementos anidados <code>min/max</code> de forma similar a la etiqueta range.</td></tr>
    <tr><td>labelExpression</td><td>Expresión SQL a ejecutar para calcular la etiqueta ej:<br><code>&lt;labelExpression&gt;</code>field1 || field2<code>&lt;/labelExpression&gt;</code></td></tr>
    <tr><td>showArrowHeads</td><td>Mostrar flechas de orientación de los puntos de las entidades. Solo aplicable para entidades lineales. <code>true|false</code>.</td></tr>
    <tr><td>symbId</td><td>Identificador de simbología a aplicar por defecto a las geometrías de una capa. La simbología debe existir en el fichero del proyecto o en el <code>crtdrdSymbologies.xml</code>.</td></tr>
    <tr><td>labelSymbId</td><td>Identificador de simbología a aplicar por defecto a las etiquetas de una capa. La simbología debe existir en el fichero del proyecto o en el <code>crtdrdSymbologies.xml</code>.</td></tr>
    <tr><td>symbologyExpression</td><td>Expresión que se utilizará para calcular la simbología de las entidades de la capa.</td></tr>
    <tr><td>labelSymbologyExpression</td><td>Expresión que se utilizará para calcular la simbología de las etiquetas de las entidades.</td></tr>

    <!-- Permissions and Operations -->
    <tr class="section-title"><td colspan="2">Permisos y operaciones a nivel de capa</td></tr>
    <tr><td>allowOverlaps</td><td>Si se pueden crear geometrías con solapes dentro de la misma capa. <code>true|false</code>.</td></tr>
    <tr><td>canChangeSymbology</td><td>Si se permite modificar la simbología de la capa. <code>true|false</code>.</td></tr>
    <tr><td>canCopy</td><td>Si se pueden copiar los elementos de una capa en otras. <code>true|false</code>.</td></tr>
    <tr><td>canCreate</td><td>Si se permite crear nuevos elementos en la capa. <code>true|false</code>.</td></tr>
    <tr><td>canDeleteAll</td><td>Si se debe mostrar el botón "Eliminar todos los elementos de la capa" en la TOC. <code>true|false</code>.</td></tr>
    <tr><td>canDieCut</td><td>Determina si se pueden troquelar las entidades de la capa. <code>true|false</code>.</td></tr>
    <tr><td>canEditVertices</td><td>Si se debe mostrar la operación "Editar vértices" durante la edición de una geometría de la capa. <code>true|false</code>.</td></tr>
    <tr><td>canExplode</td><td>Si se permite utilizar la operación de "Explotar geometrías" en la capa. <code>true|false</code>.</td></tr>
    <tr><td>canPaste</td><td>Si se permiten pegar geometrías en la capa. <code>true|false</code>.</td></tr>
    <tr><td>exportable</td><td>Si se permite exportar o compartir la capa. Si no se incluye esta etiqueta, por defecto es true.</td></tr>
    <tr><td>canSanitize</td><td>Si debe aparecer el botón "Limpiar los datos de la capa" en la TOC. <code>true|false</code>.</td></tr>
    <tr><td>canZoomVisibles</td><td>Si se debe mostrar el botón "Hacer zoom a elementos visibles" en la TOC. <code>true|false</code>.</td></tr>
    <tr><td>deletable</td><td>Si se permite eliminar una entidad de la capa. <code>true|false</code>.</td></tr>
    <tr><td>editable</td><td>Si se pueden editar las entidades de una capa (tanto la geometrías como los atributos). <code>true|false</code>.</td></tr>
    <tr><td>identificable</td><td>Si se operación de identificación debe estar activa para la capa. <code>true|false</code>.</td></tr>
    <tr><td>inspeccionable</td><td>Si el botón de "Filtrado de inspecciones" debe estar activo cuando la capa está seleccionado. <code>true|false</code>.</td></tr>
    <tr><td>layerEditable</td><td>Determina si se puede configurar la capa (nombre, descripción, restricciones de escala). <code>true|false</code>.</td></tr>
    <tr><td>layerRemovable</td><td>Si se puede eliminar la tabla de la TOC. <code>true|false</code>.</td></tr>
    <tr><td>searchable</td><td>Si al mostrar el listado de entidades de la capa, se muestran los filtros de búsqueda. <code>true|false</code>.</td></tr>
    <tr><td>selectable</td><td>Si las entidades de la capa pueden seleccionarse. <code>true|false</code>.</td></tr>
    <tr><td>visible</td><td>Si la capa es visible o no en la TOC. <code>true|false</code>.</td></tr>

    <!-- Layer Information Source -->
    <tr class="section-title"><td colspan="2">Origen de información de la capa</td></tr>
    <tr><td>sources</td><td>Define el origen de datos para localizar la base de datos o fichero en el que se encuentra la capa. Una capa puede incluir varios orígenes de datos. Dentro de esta etiqueta se incluirá uno de los siguientes elementos. Ver más adelante su configuración específica:
    <ul>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor</code></li>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor</code></li>
      <li><code>es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteQueryServiceDescriptor</code></li>
    </ul>
    </td></tr>

    <!-- Form Configuration -->
    <tr class="section-title"><td colspan="2">Configuración de formularios</td></tr>
    <tr><td>alphaEditFinisher</td><td>Identificador del formulario que a utilizar para editar los atributos de la capa.</td></tr>
    <tr><td>attributesClassName</td><td>Clase que se utilizará para recuperar la información de la capa. Ver apartado de orígenes de datos para más información.</td></tr>
    <tr><td>editAfterCreation</td><td>Si después de una edición o creación se debe lanzar el formulario de edición de atributos. <code>true|false</code>.</td></tr>
    <tr><td>valuesFromList <br><i>(No recomendado)</i></td><td>Relaciona los campos del formulario que mostrarán un desplegable de selección con el fichero en el que están los valores. Si hay más de uno, se separan con el carácter ";". Ej:<br><code>C_USO_SIGPAC=alegaciones15usoSIGPAC;b_B_SUP_COMPROBADA=siNO;</code><br><br>Para el campo <code>C_USO_SIGPAC</code> de la capa se mostrarán los valores contenidos en el fichero <code>/cartodroid/values/alegaciones15usoSIGPAC.properties</code>. Que tendrá el formato:<br><code>TA=TIERRAS ARABLES (TA)</code><br><code>PR=PASTO ARBUSTIVO (PR)</code><br><code>PA=PASTO CON ARBOLADO (PA)</code><br><br><strong>Nota:</strong> Desde la versión 0.56 de CartoDroid, se recomienda configurar los desplegables directamente desde la configuración del formulario. Esta configuración se sigue manteniendo para que los proyectos anteriores funcionen, pero la forma recomendada de configurar los desplegables es la indicada en el apartado <a href="../../form/formularios.es/#uso-de-desplegables">7.2.4 - <em>Uso de Desplegables en Formularios</em></a>.</td></tr>
    <tr><td>sqlIdentify</td><td>Consulta que se va a ejecutar para la identificación.</td></tr>
    <tr><td>sqlAsListView</td><td>Consulta que se ejecutará para mostrar la lista de entidades.</td></tr>
    <tr><td>definitionQuery</td><td>Consulta sql que se ejecutará para filtrar las entidades. El texto introducido dentro de la etiqueta se aplica como una cláusula <code>where</code> dentro de la consulta de recuperación de datos (filtro).</td></tr>
  </tbody>
</table>

En el siguiente ejemplo se muestra el mínimo XML que se debe definir para configurar una capa vectorial. En este caso es una capa poligonal (vectorialType=30), el fichero de BD se llama plantaciones.sql y se encontrará en la carpeta cartodroid/data. La tabla que almacena la capa se llama también plantaciones y tienen un índice geográfico idx_plantaciones_Geometry.

```xml
<layers class="java.util.LinkedHashMap">
<entry>
 <string>capa1</string>
 <es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <id>plantaciones</id>
 <name>Plantaciones</name>
 <vectorialType>30</vectorialType> <!-- capa poligonal -->
 <srs>25830</srs>
 <attributesClassName>es.jcyl.ita.crtdrd.data.DefaultSqlite</attributesClassName>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 <dbURL>plantaciones.sqlite</dbURL>
 <dataTable>plantaciones</dataTable>
 <indexTable>idx_plantaciones_Geometry</indexTable> 
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

### 5.3 Configuración de capa Raster

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <!-- Etiquetas de la Capa -->
    <tr><td>id</td><td>Identificador único de la capa. Debe ser una cadena de texto sin espacios en blanco, que contenga únicamente letras y dígitos.</td></tr>
    <tr><td>nombre</td><td>Nombre visible de la capa en la TOC.</td></tr>
    <tr><td>descripcion</td><td>Descripción de la capa a mostrar en la TOC.</td></tr>
    <tr><td>showOnTOC</td><td>Determina si la capa se muestra en la lista de capas de la TOC.</td></tr>

    <!-- Visualización y Simbologías -->
    <tr class="section-title"><td colspan="2">Visualización y Simbologías</td></tr>
    <tr><td>orden</td><td>Posición en la capa en el listado de capas de la TOC.</td></tr>
    <tr><td>zOrder</td><td>Determina el orden de solapamiento de las capas a la hora del pintado. La capa con mayor zOrden aparece en el plano más cercano al usuario.</td></tr>
    <tr><td>range</td><td>Indica los niveles de zoom en los que la capa estará visible. Para indicarlo se deben anidar dos etiquetas <code>max</code> y <code>min</code> para indicar el rango. Ej:<br><pre><code>
      &lt;range&gt;
          &lt;min&gt;15&lt;/min&gt;
          &lt;max&gt;21&lt;/max&gt;
      &lt;/range&gt;
      </code></pre>
    </td></tr>

    <!-- Permisos y Operaciones -->
    <tr class="section-title"><td colspan="2">Permisos y Operaciones a Nivel de Capa</td></tr>
    <tr><td>layerRemovable</td><td>Si se puede eliminar la tabla de la TOC. <code>true|false</code>.</td></tr>
    <tr><td>visible</td><td>Si la imagen raster es visible o no.</td></tr>

    <!-- Origen de Información de la Capa -->
    <tr class="section-title"><td colspan="2">Origen de Información de la Capa</td></tr>
    <tr><td>sources</td><td>Define el origen de datos para localizar la base de datos o fichero en el que se encuentra la capa. Una capa puede incluir varios orígenes de datos. Dentro de esta etiqueta se incluirá uno de los siguientes elementos. Ver más adelante su configuración específica: <ul>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RasterLiteServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoRasterLiteServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.MBTilesServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.RepoMBTilesServiceDescriptor</code></li>
    <li><code>es.jcyl.ita.crtcyl.client.dao.source.WMSServiceDescriptor</code></li>
    </ul></td></tr>

  </tbody>
</table>

### 5.4 Configuración de orígenes de datos

Para definir la fuente de datos que debe utilizar CartoDruid para leer la información de una capa se debe anidar una etiqueta `<sources>` dentro de la etiqueta de definición de la capa, ya sea VectorialLayer o RasterLayer.

Dentro de la etiqueta sources, vamos a poder definir los parámetros necesarios para localizar la fuente de datos que contiene la cartografía, un descriptor. En el siguiente apartado veremos los diferentes tipos de descriptores.

Por otro lado, en la configuración de la capa, en el atributo attributesClassName, se le indica a CartoDruid cómo debe procesar este descriptor y cómo debe tratar las geometrías de la capa cuando las lea.

#### 5.4.1 Orígenes de datos para capas vectoriales

Para establecer un origen de datos contra una capa vectorial, debemos definir dos cosas:

* La implementación que se utilizará (etiqueta attributesClassName): determina cómo se van a leer las geometrías.
* Descriptor del origen de datos: determina cómo se localizan los ficheros de BD de referencia.

**Seleccionar la implementación de consulta de geometrías**

A la hora de definir el objeto que consultará las geometrías hay que decidir dos parámetros:

a) Tratamiento de las geometrías:

* Geometrías regulares: CartoDruid va a recuperar todas las geometrías que intersecten con la pantalla actual (extend o bbox). Cada geometría se recupera completa.
* Geometrías grandes: si el fichero spatialite tiene geometrías extremadamente grandes (> 10.000 vértices, estamos hablando de geometrías con una amplitud muy superior al nivel municipal, etc), con la aproximación anterior, la navegación se puede ver penalizada. En estos casos se puede utilizar una implementación que recupere solo la parte de las geometrías que se muestra en pantalla y no la geometría completa.

b) Definición de la ruta al fichero de BD:

* Único: en este caso solo queremos utilizar una única base de datos
* Múltiple: si queremos que las entidades que se muestran en una capa provengan de varios ficheros de base de datos, CartoDruid puede consultar todas las BBDD cuyo nombre de fichero empiece por una determinada cadena.

    Utilizando esto, por ejemplo, podemos tener una capa de recintos sigpac, que utilice los ficheros de Valladolid y Zamora poniendo en el descriptor:
    ```xml
    <dbURL>recintos.sqlite</dbURL>
    ```

    Y dejando en la misma carpeta los ficheros recintos_va.sqlite y recintos_za.sqlite.

    De esta forma CartoDruid busca en esa misma carpeta todos los ficheros que empiecen por "recintos" y tengan extensión "sqlite" y los utiliza como fuentes de datos para la capa

    <strong>Nota:</strong> es importante resaltar, que los implementadores multi solo se pueden utilizar para operaciones de consulta sobre entidades. Si se utiliza este tipo de implementador y se intenta modificar una geometría o sus atributos, se mostrará un mensaje de error.

* Consulta: si queremos que las entidades sean el resultado de una consulta sobre una o varias tablas de la BD.

Combinando estos dos parámetros, tenemos los cuatro posibles valores que podemos aplicar en la etiqueta `<attributesClassName>`.

<table class="bordered">
  <thead>
    <tr>
      <th></th>
      <th>Geometrías sencillas</th>
      <th>Geometrías complejas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="first-column">Fichero único</td>
      <td>DefaultSqlite</td>
      <td>LargeSqlite</td>
    </tr>
    <tr>
      <td class="first-column">Múltiples ficheros</td>
      <td>MultiSqlite</td>
      <td>MultiLargeSqlite</td>
    </tr>
    <tr>
      <td class="first-column">Consulta</td>
      <td colspan="2">QuerySqlite</td>
    </tr>
  </tbody>
</table>

**Descriptor de origen de datos**

A la hora de definir la localización de una capa vectorial, CartoDruid admite tres tipos de descriptor:

* <strong>Descriptor de fichero:</strong> en este caso identificamos la localización exacta del fichero, con una ruta absoluta en el dispositivo o relativa a la carpeta <code>/cartodroid/data</code>.

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">SpatiaLiteServiceDescriptor</td>
    </tr>
    <tr>
      <td>dbURL</td>
      <td>Localización del fichero, con una ruta absoluta en el dispositivo o relativa a la carpeta <code>/cartodruid/data</code>.</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>Nombre visible de la capa en la TOC.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Identifica el índice geográfico asociada a la capa.</td>
    </tr>
  </tbody>
</table>

Ejemplo:
```xml
<SpatiaLiteServiceDescriptor>
 <dbURL>/storage/emulated/0/cartodroid/data/plantaciones.sqlite</dbURL>
 <dataTable>plantaciones</dataTable>
 <indexTable>idx_plantaciones_Geometry</indexTable>
</SpatiaLiteServiceDescriptor>
```

* <strong>Descriptor por referencia a repositorio:</strong> el sistema anterior obliga a identificar el nombre del fichero y complica la reutilización de cartografía entre diferentes proyectos y extensiones. Existe una alternativa en la que se le indica a CartoDruid las características de la capa, y éste se encarga de buscar en todo el sistema de ficheros del dispositivo una capa con un nombre que cumpla esos requisitos.

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">RepoSpatiaLiteServiceDescriptor</td>
    </tr>
    <tr>
      <td>resourceid</td>
      <td>Localización del fichero, con una ruta absoluta en el dispositivo o relativa a la carpeta <code>/cartodroid/data</code>.</td>
    </tr>
    <tr>
      <td>srid</td>
      <td>Sistema de referencia a utilizar en la capa.</td>
    </tr>
    <tr>
      <td>version</td>
      <td>Identificador de la versión del producto cartográfico.</td>
    </tr>
    <tr>
      <td>dataTable</td>
      <td>Nombre visible de la capa en la TOC.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Identifica el índice geográfico asociada a la capa.</td>
    </tr>
  </tbody>
</table>

Con estos atributos, CartoDruid buscará en todo el dispositivo un fichero con el nombre:
```
<resourceid>_<srid>_<version>.sqlite
```

Por ejemplo para esta definición de capa:
```xml
<RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>2016</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
</RepoSpatiaLiteServiceDescriptor>
```

CartoDruid intentará localizar un fichero de bd con el siguiente nombre:
```
recintos_25830_2016.sqlite
```

Si estamos utilizando un implementador multi (atributo <code>attributesClassName</code>), además CartoDruid encontrará todas las BDs que empiecen por "recintos_25830_2016" y tengan extensión .sqlite.

* <strong>Descriptor por consulta:</strong> Si queremos que los datos sean el resultado de una consulta SQL sobre una o varias tablas.

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">SpatiaLiteQueryServiceDescriptor</td>
    </tr>
    <tr>
      <td>fields</td>
      <td>Campos que va a devolver la consulta.</td>
    </tr>
    <tr>
      <td>from</td>
      <td>- Tabla o tablas que intervienen. <br>- La tabla que contenga las geometrías tendrá asociado el alias "g". <br>- También se pueden añadir subconsultas SQL anidadas.</td>
    </tr>
    <tr>
      <td>where (opcional)</td>
      <td>Condición de filtrado de la consulta.</td>
    </tr>
    <tr>
      <td>groupBy (opcional)</td>
      <td>Condición de agrupamiento para la consulta.</td>
    </tr>
    <tr>
      <td>orderBy (opcional)</td>
      <td>Condición de ordenación para la consulta.</td>
    </tr>
    <tr>
      <td>primaryKey</td>
      <td>Campo que va a actuar como identificador en el resultado de la consulta. Debe estar dentro de la lista de campos de <code>fields</code>.</td>
    </tr>
    <tr>
      <td>indexTable</td>
      <td>Índice espacial de la tabla que contiene las geometrías.</td>
    </tr>
    <tr>
      <td>dbURL</td>
      <td>Nombre del fichero sqlite que contiene los datos.</td>
    </tr>
  </tbody>
</table>

Con estos atributos, para obtener las entidades CartoDruid generará una consulta como esta:
```sql
SELECT <fields> FROM <from> WHERE <where> GROUB by <groupBy> ORDER BY <orderBy>
```

Que se ejecutará sobre la base de datos especificada en <code>&lt;dbURL&gt;</code>

Por ejemplo para esta definición de capa:
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

CartoDruid generara la siguiente consulta:
```sql
SELECT c_parvit, group_concat("c_subparvit"), st_union(geometry) as geometry
FROM subparcelas g
GROUP BY c_parvit;
```

#### 5.4.2 Orígenes de datos para capas raster

En el caso de las capas raster solo es necesario indicar un descriptor de origen de datos. Cada formato o servicio raster soportado por CartoDruid tendrá su propio descriptor.

##### 5.4.2.1 Configuración de capas rasterlite y MBTiles

De forma similar a las capas vectoriales, tendremos descriptores distintos en función de si queremos referenciar la BD directamente por el nombre del fichero o por la referencia a sus características cartográficas:

<table class="bordered">
  <thead>
    <tr>
      <th></th>
      <th>Descriptor de fichero</th>
      <th>Descriptor de referencia a repositorio</th>
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

**Configuración de capa rasterlite con descriptor por referencia**
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

**Configuración de capa MBTiles con descriptor por referencia**
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

##### 5.4.2.2 Configuración de servicio TMS (Tile Map Service)

CartoDruid puede consumir servicios TMS online, pero también puede servir teselas desde el sistema de ficheros del dispositivo, siempre que estén almacenadas con una estructura similar a la que mantienen los servidores TMS (<code>base_cache/nivel_zoom/x/y</code>).

En ambos casos el descriptor a utilizar es el mismo, <code>es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor</code>, pero en el caso de hacer referencia a un servicio online, la etiqueta baseURI será una URL que empiece por http, y en el caso de hacer referencia a una caché en el dispositivo, indicaremos la ruta a la base de la caché.

La etiqueta <code>intertY</code>, determina el orden en el que debe crecer el eje de coordenadas y a la hora de construir la url de la tesela. En la definición del estándar TMS, la ruta a una tesela se construye como:
```
${baseURI}/nivel_zoom/x/y.${imageExtension}
```

La coordenada y empieza a numerarse en la parte inferior del mapa. En cambio, en el caso de servicios de Google Maps, el eje y se empieza a numerar en la parte superior.

CartoDruid cubre los dos casos simplemente modificando el valor de la etiqueta <code>invertY</code>:

* <code>invertY = true</code>: acceso a mapa de tiles tipo Google.
* <code>invertY = false</code>: acceso a mapa TMS estándar.

Para más información sobre estas diferencias: <a href="http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/">http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/</a>

**Configuración acceso TMS online**
```xml
<es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
 <baseURI>http://a.tile.openstreetmap.org</baseURI>
 <imageExtension>png</imageExtension>
 <invertY>false</invertY>
</es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
```

**Configuración acceso caché TMS**
```xml
<es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
 <baseURI>/sdcard/cartorepo/osm_cache/</baseURI>
 <imageExtension>png</imageExtension>
 <invertY>false</invertY>
</es.jcyl.ita.crtcyl.client.dao.source.TMSServiceDescriptor>
```

##### 5.4.2.3 Configuración de servicio WMS (Web Map Service)

CartoDruid soporta una implementación mínima del acceso a servicios WMS. La versión actual no soporta consultas de tipo GetCapabilities para comprobar capacidades del servidor, pero se pueden configurar prácticamente todos los parámetros de una petición WMS.

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="first-column centered-cell">es.jcyl.ita.crtcyl.client.dao.source.WMSServiceDescriptor</td>
    </tr>
    <tr>
      <td>layerName</td>
      <td>Parámetro LAYERS de la petición WMS indicando la capa o capas a consultar. Si se consulta más de una capa simultáneamente, separar con comas los nombres.</td>
    </tr>
    <tr>
      <td>format</td>
      <td>Parámetro FORMAT, por ejemplo image/png.</td>
    </tr>
    <tr>
      <td>request</td>
      <td>Tipo de petición WMS que se enviará al servicio, generalmente será GetMap.</td>
    </tr>
    <tr>
      <td>EPSG</td>
      <td>Sistema de referencia a utilizar.</td>
    </tr>
    <tr>
      <td>transparent</td>
      <td>Transparencia de la tesela devuelta. <code>True | false</code></td>
    </tr>
    <tr>
      <td>quality</td>
      <td>Parámetro QUALITY para la petición WMS.</td>
    </tr>
    <tr>
      <td>invertAxisOrientation</td>
      <td>Indica si es necesario invertir el orden de los ejes en función del sistema de referencia.
        <ul>
          <li>Para sistemas de coordenadas <strong>geográficas</strong>, generalmente el valor debe ser "Y", aunque hay casos que invierten los ejes y debería ser "N".</li>
          <li>Para sistemas de coordenadas <strong>proyectadas</strong>, no es necesario invertir los ejes, por lo que el valor debe ser "N".</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>wmsVersion</td>
      <td>Versión de wms a utilizar.</td>
    </tr>
    <tr>
      <td>endpointList</td>
      <td>Configuración de la ruta al servicio online.</td>
    </tr>
  </tbody>
</table>

Un ejemplo de configuración de una capa que consulta un servicio WMS:
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
