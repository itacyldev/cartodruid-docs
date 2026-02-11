---
title: Gestión de proyectos con CartoDruid
description: Explicación de cómo CartoDruid gestiona múltiples proyectos, incluyendo la creación, carga y configuración de capas y simbologías de cada proyecto en la carpeta /cartodroid/config.
keywords: cartodruid, proyectos, configuración de proyectos, capas, simbología, GIS, ficheros de configuración, multiproyecto
canonical: https://docs.cartodruid.es/es/latest/project/proyectos.es/
---
# 4 Gestión de proyectos con CartoDruid
CartoDruid es una herramienta multiproyecto que permite tener varias configuraciones de trabajo en una misma instalación. Cada proyecto tiene sus propios ficheros de configuración, todos ellos almacenados en la carpeta `/cartodroid/config`.

Desde la propia herramienta se pueden crear y cargar proyectos con los botones que aparecen en la parte inferior de la TOC.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/proyectos/proyectos_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 33%;">
      <img src="../../img/proyectos/proyectos_2.png" style="width: 100%; height: auto;">
    </td>
   </tr>
</table>

La configuración de un proyecto CartoDruid se apoya principalmente en dos ficheros almacenados en la carpeta `/cartodroid/config`:

* `crtdrdLayers.<id_proyecto>.xml`: contiene la configuración de las capas del proyecto, es obligatorio. Por defecto con la instalación de CartoDruid se incluye un fichero `crtdrdLayers.xml` sin contenido para trabajar en el proyecto básico.
* `crtdrdSymbologies.<id_proyecto>.xml`: fichero de configuración de simbologías personalizadas para el proyecto. Es optativo, si no se incluye, se utilizará el fichero `crtdrdSymbologies.xml` que viene por defecto con la instalación para buscar los estilos y simbologías.
