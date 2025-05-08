<div class="justify">
<p>
Tras la instalación de CartoDruid en un dispositivo, la herramienta configura la siguiente estructura de directorios:
</p>

</diV>

![Estructura de ficheros](../img/fileStructure.png)

<div>
<ul>
<li><strong>config:</strong> contiene los ficheros de configuración de los proyectos, tanto el básico que viene de base con CartoDruid, como de los proyectos creados por usuarios. En el directorio se encuentra:
  <ul>
    <li><code>crtdrdLayers.&lt;id_proyecto&gt;.xml</code>: ficheros de configuración de proyectos. Por defecto con la instalación de CartoDruid se incluye un fichero <code>crtdrdLayer.xml</code> sin contenido para trabajar en el proyecto básico.</li>
    <li><code>crtdrdSymbologies.&lt;id_proyecto&gt;.xml</code>: fichero de configuración de simbologías personalizadas para el proyecto.</li>
    <li><code>crtdrdStockSymbologies.xml</code>: fichero de configuración de las simbologías básicas incluidas de base en la instalación.</li>
    <li><code>sigpac.properties</code>: configuración de las tablas que se utilizarán para la búsqueda de recintos SIGPAC.</li>
  </ul>
</li>

<li><strong>data:</strong> directorio por defecto para almacenar las bases de datos SQLite que se crean desde la herramienta.</li>

<li><strong>values:</strong> en este directorio se encuentran los archivos para almacenar valores constantes que utilizaremos en la aplicación (Ej.: sistemas de explotación).</li>

<li><strong>temp:</strong> directorio con archivos temporales de la aplicación.</li>

<li><strong>pictures:</strong> directorio donde se almacenarán las fotos tomadas desde CartoDruid (asociadas a entidades geográficas).</li>
</ul>

</div>

