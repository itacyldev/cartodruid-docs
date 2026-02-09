---
title: Creación de capas desde CartoDruid
description: Guía paso a paso para crear capas vectoriales, raster, WMS y TMS desde cero en CartoDruid, incluyendo configuración de capa, simbología y actualización de bases de datos.
keywords: cartodruid, capa vectorial, capa raster, WMS, TMS, SQLite, spatialite, GIS, configuración de capas, simbología, mapa
canonical: https://docs.cartodruid.es/es/latest/layer/capas.es/
extra:
  hreflang:
    - lang: es
      url: https://docs.cartodruid.es/es/latest/layer/capas.es/
    - lang: en
      url: https://docs.cartodruid.es/es/latest/layer/capas/
---
# 3 Creación de capas desde CartoDruid
En esta sección se indica cómo crear una capa vectorial desde cero con CartoDruid.

1. Para la creación de capas desde CRTDRD, lo primero que debemos hacer es abrir la TOC.

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

### 3.1 Creación de capa vectorial

Al seleccionar "Capa vectorial" y tendremos las siguientes opciones:

<table>
  <tr>
    <td style="width: 33%;" colspan="3">
      <img src="../../img/capas/capas_3-1_0.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

a. Seleccionamos "Nueva capa" y aparecerá el siguiente formulario:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_a_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>1. En la parte superior se muestran campos básicos de identificación y visualización de la capa:</p>
      <ul>
        <li><strong>Identificación y nombre:</strong> serán los valores que aparecerán identificando a la capa en el menú de la tabla de contenidos.</li>
        <li><strong>Tipo:</strong> debemos seleccionar el tipo de geometría con la que vamos a trabajar: punto (ej: puntos de interés, árboles, cepas, …), línea (tracks, lindes, …) o polígonos (trabajo con superficies).</li>
        <li><strong>Escala mínima y máxima:</strong> indican los niveles de zoom a los que la capa estará visible (niveles van del 0 al 21, éste último el más cercano al suelo).</li>
        <li><strong>Escala mínima y máxima de etiquetas:</strong> tiene el mismo significado que el anterior pero para las etiquetas de las geometrías.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style="width: 33%;">
      <!-- Sustituye esta imagen por la que toque, si no quieres imagen, puedes dejar la celda vacía -->
      <img src="../../img/capas/capas_3-1_a_2.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>2. Inmediatamente después, aparece una selección de campos "especiales" propuestos, que serán automáticamente añadidos a la capa si se deja marcado el check.</p>
      <ul>
        <li><strong>Galería de fotos:</strong> abre la posibilidad de adjuntar fotos a las entidades de una capa (puntos, líneas y polígonos).</li>
        <li><strong>Referencia de recinto:</strong> añade un campo a la capa para actualizarlo con la referencia del recinto que se encuentra debajo de la entidad.</li>
        <li><strong>Inspeccionado:</strong> marca de trabajo para indicar que esta entidad ha sido inspeccionada.</li>
        <li><strong>Fechas de creación/actualización:</strong> dos campos para indicar cuándo se creó la entidad y cuándo se realizó el último cambio sobre ella.</li>
        <li><strong>Fecha de inspección:</strong> campo de fecha.</li>
        <li><strong>Observaciones:</strong> campo de texto para rellenar en campo.</li>
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
      <p>3. En el siguiente apartado, dentro del mismo formulario, el usuario puede añadir los campos que necesite. Para cada campo se debe indicar el nombre y el tipo. CartoDruid soporta los siguientes tipos:</p>
      <ul>
        <li><strong>Text:</strong> texto.</li>
        <li><strong>Integer:</strong> número entero sin decimales.</li>
        <li><strong>Double:</strong> número con decimales.</li>
        <li><strong>Date:</strong> fecha.</li>
        <li><strong>Boolean:</strong> campo booleano (sí/no, 1/0).</li>
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
      <p>4. Por último, se debe seleccionar la simbología de la capa. La simbología va a determinar la forma en que se pintarán las entidades de la capa (borde, color de fondo, transparencia, etc.).</p>
      <ul>
        <li>Por defecto, CartoDruid trae una serie de <strong>simbologías predefinidas</strong> para que el usuario elija, pero cada proyecto puede definir sus propias simbologías.</li>
        <li>La simbología se puede definir tanto a nivel de <strong>entidad (geometría)</strong>, como de <strong>etiqueta</strong>, si se quiere que el texto identificativo que aparece en el mapa tenga un determinado estilo.</li>
        <li>También es posible configurar <strong>simbologías condicionadas</strong>, en base a atributos de la entidad o de reglas, como veremos más adelante.</li>
      </ul>
    </td>
  </tr>
</table>


b. Si seleccionamos la opción "Cargar fichero sqlite", nos dará la opción de abrir un explorador de archivos para buscar el fichero .sqlite que contiene la capa que queremos cargar. Una vez seleccionado el fichero, aparecerá el siguiente formulario:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_b_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Es muy parecido al caso anterior, solo que en este caso hay que <strong>seleccionar la tabla</strong> que vamos a cargar y, además, <strong>no podemos añadir ningún campo</strong>. La estructura de la tabla viene definida y no es editable desde este formulario.</p>
    </td>
  </tr>
</table>


c. Si seleccionamos la opción "Capa repositorio ITACYL", aparece un diálogo en el cual podemos seleccionar para añadir cualquiera de las capas disponibles en el repositorio del ITACyL.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-1_c_1.png" style="width: 100%; height: auto;">
    <td style="width: 66%;">
      <p>Al aceptar, simplemente se añade la <strong>configuración de la capa</strong> en el fichero <strong>XML de capas</strong>. Si no se tienen los datos en el dispositivo, habría que <strong>descargar los ficheros que contienen los datos</strong> desde el repositorio de Cartografía del ITACyL, disponible en este enlace: <a href="https://www.cartodruid.es/cartografia" target="_blank">https://www.cartodruid.es/cartografia</a>.</p>
    </td>
  </tr>
</table>


### 3.2 Creación de capa raster

Para la creación de "Capa Raster" tenemos las siguientes opciones:

<table>
  <tr>
    <td style="width: 33%;" colspan="3">
      <img src="../../img/capas/capas_3-2_0.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

Si seleccionamos fichero MBTiles/Rasterlite se abrirá un explorador de archivos para poder seleccionar el fichero correspondiente. Hecho esto aparecerá el siguiente diálogo:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Indicamos el <strong>nombre</strong> y la <strong>descripción</strong> que van a aparecer en la TOC, así como las <strong>escalas de visualización mínima y máxima</strong>.</p>
    </td>
  </tr>
</table>


#### 3.2.1 Capa WMS

Cuando queramos añadir una capa WMS habrá que tenerla previamente añadida al catálogo de servicios WMS. Para ello cuando pulsamos en Capa WMS se abre el siguiente diálogo:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-1_0.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Aquí tenemos el listado de los diferentes  <strong>grupos de servicios WMS</strong> que tenemos.</p>
      <ul>
        <li>Por defecto solo tenemos el grupo <strong>"Default"</strong>, que es en el que se van a cargar todos los servicios cuando los vayamos añadiendo.</li>
        <li>Si queremos crear otro grupo pulsamos en <strong>"Nuevo Grupo"</strong>.</li>
        <li>Si queremos añadir un nuevo servicio pulsamos en <strong>"Nuevo Servicio WMS"</strong>.</li>
      </ul>
    </td>
  </tr>
</table>


Al pulsar en "Nuevo Servicio WMS" nos aparece el siguiente diálogo donde indicamos las características del Servicio:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-1_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>En este formulario debemos indicar los siguientes parámetros para configurar el servicio WMS:</p>
      <ul>
        <li><strong>URL</strong> del servicio.</li>
        <li><strong>Nombre de la capa</strong> dentro del servicio.</li>
        <li><strong>Nombre</strong> con el que vamos a mostrar el <strong>servicio</strong> en CartoDruid.</li>
        <li><strong>Descripción.</strong></li>
        <li><strong>Versión WMS:</strong> a elegir entre 1.3.0 y 1.1.x.</li>
        <li><strong>Sistema de referencia del servicio:</strong> por defecto aparece WGS84 (4326).</li>
        <li><strong>Formato de la imagen:</strong> podremos elegir JPG o PNG.</li>
        <li><strong>Escalas de visualización mínima y máxima.</strong></li>
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
      <p>Una vez añadido el servicio al catálogo (por defecto al grupo <strong>"Default"</strong>), podremos realizar las siguientes acciones:</p>
      <ul>
        <li><strong>Cargarlo</strong> en el mapa.</li>
        <li><strong>Editar</strong> sus propiedades.</li>
        <li><strong>Eliminarlo</strong> del catálogo.</li>
        <li><strong>Moverlo a</strong> otro grupo que hayamos creado previamente.</li>
      </ul>
    </td>
  </tr>
</table>

#### 3.2.2 Capa TMS

Igualmente que los servicios WMS, cuando queramos añadir una capa TMS hay que cargarla previamente en el catálogo de servicios TMS. Para ello cuando pulsamos en Capa TMS se abre el siguiente diálogo:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-2_0.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <p>Aquí tenemos el listado de los diferentes <strong>grupos de servicios TMS</strong> que tenemos:</p>
      <ul>
        <li>Por defecto, solo tenemos el grupo <strong>"Default"</strong>, que es en el que se van a cargar todos los servicios cuando los vayamos añadiendo.</li>
        <li>Si queremos crear otro grupo pulsamos en <strong>"Nuevo Grupo"</strong>.</li>
        <li>Si queremos añadir un nuevo servicio pulsamos en <strong>"Nuevo Servicio TMS"</strong>.</li>
      </ul>
    </td>
  </tr>
</table>


Al pulsar en "Nuevo Servicio TMS" nos aparece el siguiente diálogo donde indicamos las características del Servicio:

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/capas/capas_3-2-2_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 66%;">
      <ul>
        <li><strong>URL</strong> del servicio.</li>
        <li><strong>Nombre</strong> con el que vamos a mostrar el servicio en CartoDruid.</li>
        <li><strong>Escalas</strong> de visualización <strong>mínima y máxima.</strong></li>
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
      <p>Una vez añadido el servicio al catálogo (por defecto al grupo "Default"), lo podemos cargar en el mapa, editar, eliminar o moverlo a otro grupo.</p>
    </td>
  </tr>
</table>

Con los datos introducidos en el formulario la aplicación creará una base de datos sqlite-spatialite en el directorio /cartodroid/data del dispositivo y actualizará el fichero cartodroid/config/crtdrdLayers.xml para incluir la definición de la nueva capa.