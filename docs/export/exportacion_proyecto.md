---
title: Export your CartoDruid project
description: Guide to export CartoDruid projects in .crtd format for sharing and importing on other devices.
keywords: cartodruid, export, crtd, project, synchronization, GIS
canonical: https://docs.cartodruid.es/es/latest/export/exportacion_proyecto.es/
---

# 12 Export your CartoDruid project

In this section, you will learn how to export a CartoDruid project in **.crtd** format. This format is a ZIP-compressed file, which allows it to be shared and imported on other devices.

## 12.1 Overview

CartoDruid allows you to export a project and share it directly from the device.

All project content is packaged into a **.crtd** file, which can later be imported on any other device.

The **.crtd** file contains the following:

- Configuration files for layers, synchronization, users, and custom forms.
- SQLite files containing project data. You can choose which tables retain their data and which are exported empty.
- Images associated with project elements. You can also choose not to include them in the package.

## 12.2 Project export

To use the tool, open the TOC and select the button located in the bottom-right corner:

<table>
    <tr>
        <td>
        <img src="../../img/exportar/TOC.png" style="width: 100%; height: auto;">
        </td>
    </tr>
</table>

When the button is pressed, the following dialog appears:

<table>
<tr>
<td style="width: 50%;">
<img src="../../img/exportar/share_dialog.png" style="width: 100%; height: auto;">
</td>
<td style="width: 50%;">
<p>In this dialog you can choose whether to include images and whether to export all SQLite table data.</p>
<ul>
<li><strong>Include images:</strong> packages all images associated with the project.</li>
<li><strong>Include table data:</strong> allows you to decide whether to export all data or only a selection.</li>
</ul>
</td>
</tr>
</table>

If you uncheck the option **“Include all table data”**, after pressing **ACCEPT** a new dialog will appear:

<table>
<tr>
<td style="width: 50%;">
<img src="../../img/exportar/select_tables.png" style="width: 100%; height: auto;">
</td>
<td style="width: 50%;">
<p>In this step you can select which tables will retain their data and which will be exported empty.</p>
</td>
</tr>
</table>

## 12.3 Export result

Once the content has been packaged into the **.crtd** file, the device will display the available sharing options:

<table>
<tr>
<td style="width: 100%;">
<img src="../../img/exportar/share_file.png" style="width: 100%; height: auto;">
</td>
</tr>
</table>