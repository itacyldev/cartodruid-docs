---
title: QGIS Plugin to synchronize files between a device and a QGIS project
description: Guide for using the QGIS plugin to download and upload files between a device and a QGIS project using ADB or MTP protocols.
keywords: cartodruid, qgis plugin, file synchronization, adb, mtp, device, GIS
canonical: https://docs.cartodruid.es/en/latest/qgisPlugin/qgis_plugin/
---

# 11 QGIS Plugin to synchronize files between a device and a QGIS project

This project contains a QGIS plugin to download/upload files between a USB-connected device and a QGIS project.

Right now this plugin is in an early state. It is able to download/upload correctly and have a configuration to select the folder that you want to synchronize.

## 11.1 ADB Method

This method uses **Android Device Bridge (ADB)** for the communication. It is the fastest and safest method, but it requires some configuration on the device and on the PC. This method works for **Windows and Linux**.

### Requirements

<ul>
<li>You need to put the device in <strong>USB debugging mode</strong>. For that you need to do the following:
<ul>
<li>Press 7 times the compilation number in your device settings. It is usually located at: <strong>Settings → About the device → Software information</strong>.</li>
<li>This will unlock the <strong>Developer options</strong> under the settings menu. In there you will see a lot of options. We are looking for the <strong>USB debugging</strong> to activate it.</li>
</ul>
</li>

<li>You will also need to have installed on your PC the <strong>ADB binary</strong>.
<ul>
<li>You can download it from <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip">Android platform-tools</a>.</li>
<li>The plugin also provides a button to <strong>auto-download and configure it automatically</strong>.</li>
<li>If you downloaded it manually, then you need to put the path to the <code>adb.exe</code> file in the <strong>"ADB binary path"</strong> in the configuration menu of the plugin.</li>
</ul>
</li>

<li>Connect your device to the PC with a USB cable.
<ul>
<li>The first time you will see in the device that it asks if you allow the USB debugging. You have to accept it.</li>
</ul>
</li>
</ul>

## 11.2 MTP Method

This method uses **Media Transfer Protocol (MTP)** for the communication. It is slower than ADB and can have problems with large files (4GB+) but it also doesn't require further configuration. This method only works on **Windows** for the moment.

### Requirements

<ul>
<li>Just connect your device to your PC with a USB.</li>
<li>Make sure that you allow access to the data on your phone in the popup or select it in the notification.</li>
</ul>

## 11.3 How to use the plugin

To load the plugin you have **two options**:

<ul>
<li>Create a symlink of the <code>qgis-plugin</code> folder (located inside <code>src</code>) in your QGIS Python plugin folder.</li>
<li>Execute the script <code>python create_zip.py</code> that is located in <code>/src/qgis-plugin</code>. This will create a folder called <code>build</code> with a ZIP file that you can load in QGIS as a plugin.</li>
</ul>

![Plugin QGIS Toolbar](../img/qgisplugin/plugin_menu.png)

This is the toolbar of the plugin. The buttons from left to right do the following:

<ul>
<li><strong>Down arrow:</strong> Download the files from the device folder using the filters indicated in the configuration.</li>
<li><strong>Up arrow:</strong> Upload the files from the PC folder using the filters indicated in the configuration.</li>
<li><strong>Combo box:</strong> Search for the connected devices using the selected protocol and shows them so you can select the device to communicate with.</li>
<li><strong>Gears:</strong> Open the configuration menu.</li>
</ul>

### Configuration menu

![Plugin Protocol](../img/qgisplugin/plugin_protocol.png)

This is the **Protocol tab** from the configuration menu of the plugin.

<ul>
<li>Here you can select between the <strong>ADB</strong> or <strong>MTP</strong> protocols.</li>
<li>You can also configure where your <strong>ADB binary path</strong> is or download and configure it automatically.</li>
</ul>

![Plugin Paths](../img/qgisplugin/plugin_paths.png)

This is the **Search paths** sub-menu from the configuration menu of the plugin. Here you can select what folders you want to synchronize between the device and the PC.

It uses **JSON format** with the following structure:

<ul>
<li>The root element <code>[]</code> is a list. This way you can have more than one configuration for the same project. The configurations will be checked sequentially, from first to last.</li>

<li>Every JSON object inside the list has the following keys:
<ul>
<li><strong>source</strong>: Path from the PC where the files will be downloaded/uploaded from.</li>

<li><strong>destination</strong>: Path from the device where the files will be uploaded/downloaded from. It is important to know that the root path of the destination changes between protocols and is not very intuitive.</li>

<li><strong>includes</strong>: A list of glob patterns used to filter files found on source or destination. Any file that fulfills at least one pattern will be copied.</li>

<li><strong>excludes</strong>: A list of glob patterns used to filter files found on source or destination. Any file that fulfills at least one pattern will not be copied.</li>
</ul>
</li>
</ul>

Here you can see an example configuration:

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

### Root folder for destination

The root folder of the destination is different between protocols. Here is a list of all possible paths and examples.

Let's suppose that we want to synchronize the folder `/projects/project1` inside your device.

#### ADB

- **Internal memory:** `/sdcard`, `/storage/emulated/0` or `/storage/self/primary`.  
  All of them are references to the internal memory of the device.

Example:

```
"destination":"/sdcard/projects/project1"
"destination":"/storage/emulated/0/projects/project1"
"destination":"/storage/self/primary/projects/project1"
```

- **SD Card:** `/storage/XXXX-XXXX` where every X is a hexadecimal number.  
  There is no easy way to know the exact value.  
  You can use this command to search for it `adb shell ls /storage`.  
  The most usual value is `0123-4567`. 

Example:

```
"destination":"/storage/0123-4567/projects/project1"
```
#### MTP

In this case the root value is the one that you can find in the **file explorer**.

In this example you can see the paths for **SD card** and **internal memory**.

![MTP root](../img/qgisplugin/MTP_root.png)

In this image the correct paths should be the following:

```
"destination":"/Memoria interna/projects/project1"
"destination":"/Tarjeta SD/projects/project1"
```