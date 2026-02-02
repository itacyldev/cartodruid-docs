---
title: Project management with CartoDruid
description: Overview of how CartoDruid manages multiple projects, including creating, loading, and configuring layers and symbologies for each project in the /cartodroid/config folder.
keywords: cartodruid, projects, project configuration, layers, symbology, GIS, configuration files, multi-project
---
### 4.1  Project management with CartoDruid
CartoDruid is a multi-project tool that allows having several work configurations in the same installation. Each project has its own configuration files, all stored in the `/cartodroid/config` folder.

From the tool itself, projects can be created and loaded with the buttons that appear at the bottom of the TOC.

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


The configuration of a CartoDruid project is mainly supported by two files stored in the `/cartodroid/config` folder:

* `crtdrdLayers.<project_id>.xml`: contains the project layer configuration, it is mandatory. By default, CartoDruid installation includes an empty `crtdrdLayers.xml` file to work with the basic project.
* `crtdrdSymbologies.<project_id>.xml`: custom symbology configuration file for the project. It is optional; if not included, the default `crtdrdSymbologies.xml` file that comes with the installation will be used to search for styles and symbologies.
