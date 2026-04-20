---
title: QGIS Plugin to synchronize files between a device and a QGIS project
description: Guide for using the QGIS plugin to download and upload files between a device and a QGIS project using ADB or MTP protocols.
keywords: cartodruid, qgis plugin, file synchronization, adb, mtp, device, GIS
canonical: https://docs.cartodruid.es/en/latest/qgisPlugin/qgis_plugin/
---

# 11 QGIS Plugin to synchronize files between a device and a QGIS project

## 11.1 Overview

**CartoDruid Device Sync** is a QGIS plugin designed to synchronize files between a PC and one or more mobile devices.  
It enables fast and efficient data exchange between QGIS projects and the fieldwork tool **CartoDruid, without relying on cloud services**.

Although focused on CartoDruid projects, the plugin is **data-agnostic** and can be used to synchronize any folder structure between a mobile device and a PC.

Communication is performed via:

- **ADB (Android Debug Bridge)** as the primary transport protocol, currently working only via **USB cable**.
- **MTP (Media Transfer Protocol)** as a fallback when ADB is not available.

**Key features:**

- **Automatic detection of CartoDruid projects**: scans device storage to locate projects and generate synchronization settings.
- **Project configuration synchronization**: copies and updates CartoDruid project configuration files.
- **Vector data synchronization**: synchronizes vector layers and automatically adds them to the QGIS Table of Contents (TOC).
- **Georeferenced image synchronization**: transfers images from the device and imports them as geo-tagged photo layers.
- **Generic folder synchronization**: allows synchronization of any folder between device and PC, not limited to CartoDruid data.

This plugin enables teams to **synchronize field data locally without relying on cloud services**, allowing multiple technicians to collaborate efficiently through a central office PC.

![Inforgrafía](../img/infografia.png)

## 11.2 How to use it

To load the plugin you have **3 options**:

- Search in the QGIS plugin repository for **CartoDruid Device Sync** and install it from there.
- Create a **symlink** of the `qgis-plugin` folder (located inside `src`) in your QGIS python plugin folder.
- Execute **create_zip.py** (`python create_zip.py`) in the path **/src/qgis-plugin**. This will create a folder called **build** with a zip that you can load on QGIS as a plugin.

![Plugin QGIS Toolbar](../img/qgisplugin/plugin_menu.png)

This is the plugin toolbar. The buttons from left to right do the following:

- Down arrow: **download files** from the device folder using the configured filters.
- Up arrow: **upload files** from the PC folder using the configured filters.
- Combo box: **select connected device** using the selected protocol.
- Gears: open the **configuration menu**.
- Cartodruid folder: open the **Cartodruid Synchronization Wizard**.

The easiest way to configure the synchronization is using the **Cartodruid Synchronization Wizard**.

If you don't use CartoDruid, go to the [Configuration menu section](#configuration-menu).

### 11.2.1 Fast connection to a Cartodruid Project.

The fastest and easiest way to **connect to a Cartodruid Project** using the plugin is the following:

1. Create a new QGIS project and save it. It is recommended to use an exclusive folder for the project.
2. Open the **Configuration Menu** and select the **synchronization method** you would like to use.  
   i. ADB is the default method, but you need to follow the steps described in the [Requirements chapter](#requirements).
3. Connect the device via **USB** to the PC and select it in the combo box. You need to configure the USB connection
as file transfer on the device (a pop-up usually appears when connecting it).
4. Open the **Cartodruid Synchronization Wizard** and follow the steps described there. If you have any doubts, refer to
the [Cartodruid Synchronization Wizard chapter](#cartodruid-synchronization-wizard).
5. From this moment onwards, every download/upload will **synchronize files automatically** between the PC (in a folder called
`cartodruid` in the same location as the QGIS project) and the Cartodruid project on the device.
 
### 11.2.2 Cartodruid Synchronization Wizard {#cartodruid-synchronization-wizard}

The **Cartodruid Synchronization Wizard** implements an easy way to configure the plugin and get it ready to synchronize files between Cartodruid and QGIS. To use this option, first you need to **select a device from the device combo box**, and then you will be able to start the wizard.

Using this wizard will create a folder called **"cartodruid"** on the same folder where you saved the QGIS project.

![wizard_page1.png](../img/qgisplugin/wizard_page1.png)

In the first page the projects found on Cartodruid will be listed. You have to **select one of them** to continue with the wizard.

![wizard_page2.png](../img/qgisplugin/wizard_page2.png)

After that you need to select what files you want to synchronize: configuration, image or/and data files.  
This selection will copy the following information:

- Configuration files: The folders **"values"** and **"config"** and their files will be copied and saved under the **"cartodruid"** folder described above.
- Image files: The folder **"pictures"** and their files will be copied and saved under the **"cartodruid"** folder described above.
- Data files: The folder **"data"** and only the **selected files** in the list below will be copied and saved under the **"cartodruid"** folder described above.

After this step, the configuration and the selected files will be **downloaded from the mobile device**, to be able to do the next step.

![wizard_page3.png](../img/qgisplugin/wizard_page3.png)

In the third step, you can select the layers from the data files that you selected in the previous step to add them to the current project table of contents. A **"cartodruid" group** will be created and the selected layers will be placed beneath it.

![wizard_page4.png](../img/qgisplugin/wizard_page4.png)

In the fourth and last step, the content of the **pictures folder** will be shown so you can select what images you would like to add to the TOC as a layer of **geolocated photos**. By default, a temporal layer will be created for each selection. You can select the **"Create a permanent file to save the layers created"** option to create a **.gpkg** per item selected as well.  
They will be created under the pictures folder in the **"cartodruid" folder** in the same location as the QGIS project. The layers selected will be created under the group **"cartodruid"** in a subgroup called **"photos"**.

After completing the wizard, you can use the **download/upload buttons** at any time and the selected files will be synchronized and the layers will be updated accordingly.  
If you want to add any other file to the configuration that you forgot during the process, you can do it again from the beginning and the wizard will remember your past selections.

If after that you still need some more fine-tuning, refer to the [next section](#configuration-menu) where you will learn to change the configuration directly.

## 11.3 Configuration

### 11.3.1 Configuration menu {#configuration-menu}

![plugin_protocol.png](../img/qgisplugin/plugin_protocol.png)

This is the **Protocol tab** from the configuration menu of the plugin. Here you can select between the **ADB or MTP protocols**.  
Also, you can configure where your **ADB binary path** is or download and configure it automatically.

By default, it will try to download from the URL found in the user environment variable called **"ADB_DOWNLOAD"**. If it is not found, then it will be downloaded from:

- [Android Platform Tools (Windows)](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Android Platform Tools (Linux)](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)

depending on the OS.

![plugin_paths.png](../img/qgisplugin/plugin_paths.png)

This is the **Synchronization configuration submenu** from the configuration menu of the plugin. Here you can select what folders you want to **synchronize between the device and the PC**. It uses **JSON format** with the following structure:

- The root element `[]` is a **list**, allowing multiple configurations per project. Configurations are evaluated **sequentially (top to bottom)**.

- Every JSON object inside the list has the following keys:

    - **source**: Path on the PC where files will be **downloaded/uploaded from**.
    - **destination**: Path on the device where files will be **uploaded/downloaded to**. The **root destination path depends on the protocol** and may not be intuitive. See details [here](#root-folder-for-destination).
    - **includes**: List of **glob patterns** used to filter files. Only files matching at least one pattern will be **copied**.
    - **excludes**: List of **glob patterns** used to filter files. Only files matching at least one pattern will be **ignored**.

Here you can see an example of the configuration:

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
![plugin_photo_layers.png](../img/qgisplugin/plugin_photo_layers.png)

This is the last tab of the configuration menu. In here you can select what CartoDruid photo folder you would like to analyze to create photo layers from them. A temporal layer will be created unless you check **"Create a permanent file to save the layers created."**, in which case a file will be created for every layer.

A layer will be created for each pair key:value in the list following these rules:

- **Key**: first value of the pair key:value, and represents the name of the folder that will be analyzed. Folders are always searched under `<Qgis-project-folder>/cartodruid/pictures`, since this is the structure used for CartoDruid projects.
- **Value**: second value of the pair key:value, and represents the name of the created geolocalized layer. You can use any name here.

Example:

```json
{
  "test_photos": "My_test_photos_layer",
  "images": "My_images"
}
```
In this example, the folders "test_photos" and "images" will be searched under `<Qgis-project-folder>/cartodruid/pictures` for geolocated images. If the folders are found, two layers will be created: one named "My_test_photos_layer" with the images found in "test_photos", and a second one named "My_images" with the images found in "images".

These layers will be created on the next download from the device. If the layers were already created and you change the layer name, the name of the layer will be updated after pressing **OK**.

It is not allowed to use the same key or value in different key:value records. Every **key must be unique**, and every **value must also be unique**.

### 11.3.2 Root folder for destination {#root-folder-for-destination}

The root folder of the destination is different between protocols. Here is a list of the possible paths and an example for each one. Let’s suppose that we want to synchronize the folder `/projects/project1` inside the device.

#### 11.3.2.1 ADB

- **Internal memory**: `/sdcard`, `/storage/emulated/0` or `/storage/self/primary`. All of them are references to the internal memory of the device. Example:

```
"destination":"/sdcard/projects/project1"
"destination":"/storage/emulated/0/projects/project1"
"destination":"/storage/self/primary/projects/project1"
```

- **SD card**: `/storage/XXXX-XXXX`, where each `X` is a hexadecimal value. There is no easy way to know this value.  
  You can use this command to find it: `adb shell ls /storage`. The most common value is `0123-4567`. Example:

```
"destination":"/storage/0123-4567/projects/project1"
```

#### 11.3.2.2 MTP

In this case, the root value is the one shown in the file explorer.

In this example you can see the paths for SD card and internal memory:

![MTP_root.png](../img/qgisplugin/MTP_root.png)

In this image, the correct paths should be:

```json
"destination": "/Memoria interna/projects/project1"
"destination": "/Tarjeta SD/projects/project1"
```

## 11.4 Requirements {#requirements}

### 11.4.1 ADB

This method uses the Android Debug Bridge (ADB) for the communication. It is the fastest and safest method, but it requires
some configuration in the device and in the PC. This method works for Windows and Linux.

- You need to put the device in USB debugging mode. For that you need to do the following:
    - Press 7 times the compilation number in your device settings. It is usually located at: Settings -> About the device ->
    Software information.
    - This will unlock the Developer options under the settings menu. In there you will see a lot of options. We are looking for the
    USB debugging to activate it.
- You will also need to have installed in you PC the ADB binary. You can download it from: [Download Android Platform Tools (Windows)](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
but the plugin have also a button to auto-download and configure it automatically. If you downloaded manually, then you need to
put the path to the adb.exe file in the "ADB binary path" in the configuration menu of the plugin.
- Connect you device to the PC with a USB cable. First time you will see in the device that it asks if you allow the USB debugging, you have to accept it.

<div style="background-color:#f2f2f2; padding:12px; border-left:4px solid #bdbdbd; font-size:0.8em; text-align:justify;">

<strong>Note:</strong> Activating Developer Options and USB debugging is a standard Android feature and does not involve rooting the device or modifying its system in any invasive way. It is intended for development and testing purposes. In this context, no system-level modifications are performed, and the device remains fully secure as long as standard security practices are followed. The plugin only uses these permissions to establish a communication channel via ADB for file transfer operations.

</div>

### 11.4.2 MTP

This method uses Media Transport Protocol for the communication. It is slower than ADB and can have problems with large files
(4GB+) but it also doesn't require further configuration. This method only works on Windows for the moment.

- Just connect you device to your PC with a USB. Make sure that you allow to access the data on you phone on the popup or
select it in the notification.
