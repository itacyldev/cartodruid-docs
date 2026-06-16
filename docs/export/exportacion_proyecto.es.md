---
title: Exportar tu proyecto CartoDruid
description: Guía para exportar proyectos CartoDruid en formato .crtd para compartirlos e importarlos en otros dispositivos.
keywords: cartodruid, exportación, crtd, proyecto, sincronización, GIS
canonical: https://docs.cartodruid.es/es/latest/export/exportacion_proyecto.es.md/
---


# 12 Exportar tu proyecto CartoDruid

En esta sección se describe cómo exportar un proyecto CartoDruid en formato **.crtd**. Este formato es un archivo comprimido tipo ZIP, lo que permite compartirlo e importarlo en otros dispositivos.

## 12.1 Descripción general

CartoDruid permite exportar el proyecto y compartirlo directamente desde el dispositivo.

Todo el contenido del proyecto se empaqueta en un fichero **.crtd**, que puede ser importado posteriormente en cualquier otro dispositivo.

El fichero **.crtd** contendrá lo siguiente:

- Ficheros de configuración de capas, sincronización, usuarios y formularios personalizados.
- Ficheros SQLite con los datos del proyecto. Es posible seleccionar qué tablas conservan los datos y cuáles se exportan vacías.
- Imágenes asociadas a los elementos del proyecto. También se puede optar por no incluirlas en el paquete.

## 12.2 Exportación de un proyecto

Para utilizar la herramienta, desplegamos la TOC y seleccionamos el botón situado en la esquina inferior derecha:

 <table>
    <tr>
        <td>
        <img src="../../img/exportar/TOC.png" style="width: 100%; height: auto;">
        </td>
    </tr>
</table>

Al pulsar el botón aparece el siguiente diálogo:

<table>
<tr>
<td style="width: 50%;">
<img src="../../img/exportar/share_dialog.png" style="width: 100%; height: auto;">
</td>
<td style="width: 50%;">
<p>En este diálogo se puede seleccionar si se incluyen las imágenes y si se exportan todos los datos de las tablas SQLite.</p>
<ul>
<li><strong>Incluir imágenes:</strong> empaqueta todas las imágenes asociadas al proyecto.</li>
<li><strong>Incluir datos de tablas:</strong> permite decidir si se exportan todos los datos o solo una selección.</li>
</ul>
</td>
</tr>
</table>

Si desmarca la opción **“Incluir todos los datos de las tablas”**, al pulsar **ACEPTAR** aparece un nuevo diálogo:

<table>
<tr>
<td style="width: 50%;">
<img src="../../img/exportar/select_tables.png" style="width: 100%; height: auto;">
</td>
<td style="width: 50%;">
<p>En este paso se selecciona qué tablas conservarán sus datos y cuáles se exportarán vacías.</p>
</td>
</tr>
</table>

## 12.3 Resultado de la exportación

Una vez empaquetado el contenido en el fichero **.crtd**, el dispositivo mostrará las opciones de compartición disponibles:

<table>
<tr>
<td style="width: 100%;">
<img src="../../img/exportar/share_file.png" style="width: 100%; height: auto;">
</td>
</tr>
</table>

