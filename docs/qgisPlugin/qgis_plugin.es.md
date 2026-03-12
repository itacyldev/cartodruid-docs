---
title: Plugin de QGIS para sincronizar archivos entre un dispositivo y un proyecto QGIS
description: Guía para usar el plugin de QGIS para descargar y subir archivos entre un dispositivo y un proyecto QGIS mediante los protocolos ADB o MTP.
keywords: cartodruid, plugin qgis, sincronización de archivos, adb, mtp, dispositivo, GIS
canonical: https://docs.cartodruid.es/es/latest/qgisPlugin/qgis_plugin.es/
---

# 11 Plugin QGIS para sincronizar archivos entre un dispositivo y un proyecto QGIS

Este proyecto contiene un plugin QGIS para descargar/subir archivos entre un dispositivo conectado por USB y un proyecto QGIS.

Actualmente, este plugin se encuentra en una fase inicial. Es capaz de descargar/subir archivos correctamente y tiene una configuración para seleccionar la carpeta que deseas sincronizar.

## 11.1 Método ADB

Este método utiliza **Android Device Bridge (ADB)** para la comunicación. Es el método más rápido y seguro, pero requiere cierta configuración en el dispositivo y en el PC. Funciona en **Windows y Linux**.

### Requisitos

<ul>
<li>Debes poner el dispositivo en <strong>modo depuración USB</strong>. Para ello, haz lo siguiente:
<ul>
<li>Presiona 7 veces el número de compilación en los ajustes de tu dispositivo. Normalmente se encuentra en: <strong>Ajustes → Acerca del dispositivo → Información del software</strong>.</li>
<li>Esto desbloqueará las <strong>Opciones de desarrollador</strong> en el menú de ajustes. Ahí encontrarás muchas opciones; necesitamos activar la <strong>depuración USB</strong>.</li>
</ul>
</li>

<li>También necesitarás tener instalado en tu PC el <strong>binario ADB</strong>.
<ul>
<li>Puedes descargarlo desde <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip">Android platform-tools</a>.</li>
<li>El plugin también proporciona un botón para <strong>descargar y configurar automáticamente ADB</strong>.</li>
<li>Si lo descargas manualmente, debes indicar la ruta del archivo <code>adb.exe</code> en <strong>"Ruta del binario ADB"</strong> en el menú de configuración del plugin.</li>
</ul>
</li>

<li>Conecta tu dispositivo al PC mediante un cable USB.
<ul>
<li>La primera vez, el dispositivo preguntará si permites la depuración USB. Debes aceptarlo.</li>
</ul>
</li>
</ul>

## 11.2 Método MTP

Este método utiliza **Media Transfer Protocol (MTP)** para la comunicación. Es más lento que ADB y puede tener problemas con archivos grandes (4GB+) pero no requiere configuración adicional. Por el momento solo funciona en **Windows**.

### Requisitos

<ul>
<li>Conecta tu dispositivo al PC mediante un cable USB.</li>
<li>Asegúrate de permitir el acceso a los datos del dispositivo mediante la ventana emergente o la notificación.</li>
</ul>

## 11.3 Cómo usar el plugin

Para cargar el plugin tienes **dos opciones**:

<ul>
<li>Crear un enlace simbólico de la carpeta <code>qgis-plugin</code> (ubicada dentro de <code>src</code>) en tu carpeta de plugins Python de QGIS.</li>
<li>Ejecutar el script <code>python create_zip.py</code> que se encuentra en <code>/src/qgis-plugin</code>. Esto creará una carpeta llamada <code>build</code> con un archivo ZIP que puedes cargar en QGIS como plugin.</li>
</ul>

![Barra de herramientas del plugin QGIS](../img/qgisplugin/plugin_menu.png)

Esta es la barra de herramientas del plugin. Los botones de izquierda a derecha hacen lo siguiente:

<ul>
<li><strong>Flecha hacia abajo:</strong> Descargar los archivos de la carpeta del dispositivo usando los filtros indicados en la configuración.</li>
<li><strong>Flecha hacia arriba:</strong> Subir los archivos desde la carpeta del PC usando los filtros indicados en la configuración.</li>
<li><strong>Cuadro combinado:</strong> Buscar los dispositivos conectados usando el protocolo seleccionado y mostrarlos para que puedas seleccionar con cuál comunicarte.</li>
<li><strong>Engranajes:</strong> Abrir el menú de configuración.</li>
</ul>

### Menú de configuración

![Plugin Protocolo](../img/qgisplugin/plugin_protocol.png)

Esta es la **pestaña de Protocolo** del menú de configuración del plugin.

<ul>
<li>Aquí puedes seleccionar entre los protocolos <strong>ADB</strong> o <strong>MTP</strong>.</li>
<li>También puedes configurar la ubicación del <strong>binario ADB</strong> o descargarlo y configurarlo automáticamente.</li>
</ul>

![Plugin Rutas](../img/qgisplugin/plugin_paths.png)

Este es el submenú **Rutas de búsqueda** del menú de configuración del plugin. Aquí puedes seleccionar qué carpetas deseas sincronizar entre el dispositivo y el PC.

Utiliza **formato JSON** con la siguiente estructura:

<ul>
<li>El elemento raíz <code>[]</code> es una lista. Esto permite tener más de una configuración para el mismo proyecto. Las configuraciones se revisarán secuencialmente, de primera a última.</li>

<li>Cada objeto JSON dentro de la lista tiene las siguientes claves:
<ul>
<li><strong>source</strong>: Ruta en el PC desde donde se descargarán/subirán los archivos.</li>

<li><strong>destination</strong>: Ruta en el dispositivo donde se subirán/descargarán los archivos. Es importante saber que la ruta raíz de destino cambia según el protocolo y no es muy intuitiva.</li>

<li><strong>includes</strong>: Lista de patrones glob para filtrar los archivos encontrados en source o destination. Cualquier archivo que cumpla al menos un patrón será copiado.</li>

<li><strong>excludes</strong>: Lista de patrones glob para filtrar los archivos encontrados en source o destination. Cualquier archivo que cumpla al menos un patrón será excluido.</li>
</ul>
</li>
</ul>

Ejemplo de configuración:

```json
[
  {
    "source": "C:/User/projects",
    "destination": "/sdcard/backup/projects",
    "excludes": ["node_modules", "*.log", ".git"],
    "includes": []
  },
  {
    "source": "C:/user/photos",
    "destination": "/sdcard/backup/photos",
    "excludes": [],
    "includes": ["*.jpg", "*.png"]
  }
]
```
### Carpeta raíz de destino

La carpeta raíz del destino es diferente según el protocolo. Aquí se muestra una lista de todas las rutas posibles y ejemplos.

Supongamos que queremos sincronizar la carpeta `/projects/project1` en el dispositivo.

#### ADB

- **Memoria interna:** `/sdcard`, `/storage/emulated/0` o `/storage/self/primary`.  
  Todas ellas son referencias a la memoria interna del dispositivo.

Ejemplo:

```
"destination":"/sdcard/projects/project1"
"destination":"/storage/emulated/0/projects/project1"
"destination":"/storage/self/primary/projects/project1"
```

- **Tarjeta SD:** `/storage/XXXX-XXXX` donde cada X es un número hexadecimal.  
  No hay una manera fácil de conocer el valor exacto.  
  Puedes usar este comando para buscarlo: `adb shell ls /storage`.  
  El valor más habitual es `0123-4567`.

Ejemplo:

```
"destination":"/storage/0123-4567/projects/project1"
```

#### MTP

En este caso, la ruta raíz es la que puedes ver en el **explorador de archivos**.

En este ejemplo se muestran las rutas para la **tarjeta SD** y la **memoria interna**.

![MTP root](../img/qgisplugin/MTP_root.png)

En esta imagen, las rutas correctas serían:

```
"destination":"/Memoria interna/projects/project1"
"destination":"/Tarjeta SD/projects/project1"
```