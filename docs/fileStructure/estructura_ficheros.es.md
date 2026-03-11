---
title: Estructura de ficheros de la aplicación
description: Tras la instalación de CartoDruid en un dispositivo, la herramienta configura la estructura de directorios incluyendo projects, common, config, data, values, symbol, temp y pictures.
keywords: cartodruid, estructura de directorios, configuración, bases de datos, GIS, fotos
canonical: https://docs.cartodruid.es/es/latest/fileStructure/estructura_ficheros.es/
---
# 2 Estructura de ficheros de la aplicación

Después de instalar CartoDruid en un dispositivo, la herramienta configura la siguiente estructura de directorios dentro del directorio <code>cartodruid</code>. En este directorio se encuentran varias carpetas principales:

<ul>
<li><strong>projects:</strong> contiene todos los proyectos creados en CartoDruid, cada uno en su propia carpeta.</li>
<li><strong>common:</strong> contiene recursos y ficheros compartidos entre todos los proyectos.</li>
<li><strong>temp:</strong> directorio donde se almacenan archivos temporales generados por la aplicación.</li>
</ul>

![Estructura de ficheros](../img/fileStructure.png)

<div>
<ul>

<li><strong>common:</strong> contiene ficheros comunes utilizados por todos los proyectos. En este directorio se encuentran:
  <ul>
    <li><code>crtdrdStockSymbologies.xml</code>: fichero de configuración de las simbologías básicas incluidas de base en la instalación.</li>
    <li><code>utils.sqlite</code>: base de datos SQLite con utilidades y recursos comunes utilizados por la aplicación.</li>
  </ul>
</li>

<li><strong>projects:</strong> contiene las carpetas de los distintos proyectos. Dentro de cada carpeta de proyecto se encuentra la siguiente estructura:
  <ul>

<li><strong>config:</strong> contiene los ficheros de configuración del proyecto. En el directorio se encuentran:
  <ul>
    <li><code>crtdrdLayers.xml</code>: fichero con la configuración de capas del proyecto.</li>
    <li><code>crtdrdSymbologies.&lt;id_proyecto&gt;.xml</code>: fichero de configuración de simbologías personalizadas para el proyecto.</li>
    <li><code>sigpac.properties</code>: configuración de las tablas que se utilizarán para la búsqueda de recintos SIGPAC.</li>
  </ul>
</li>

<li><strong>data:</strong> directorio por defecto para almacenar las bases de datos SQLite que se crean desde la herramienta.</li>

<li><strong>values:</strong> en este directorio se encuentran los ficheros xml de configuración de los formularios personalizados y los ficheros de properties asociados a dichos formularios.</li>

<li><strong>pictures:</strong> directorio donde se almacenarán las fotos tomadas desde CartoDruid (asociadas a entidades geográficas).</li>

<li><strong>symbol:</strong> directorio donde se guardan las imágenes utilizadas en las simbologías personalizadas de cada proyecto.</li>

  </ul>
</li>

<li><strong>temp:</strong> directorio con archivos temporales generados por la aplicación.</li>

</ul>
</div>