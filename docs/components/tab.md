# 4.6 Tab
<div style="text-align: justify;">
<p>The Tab component functions as an organized container for displaying multiple tab elements, allowing users to navigate between different content sections. It enhances the user experience by presenting information in a segmented manner.</p>
<p>Each tab, represented by a Tabitem, can contain specific information or related functionalities. This provides an organized presentation, making it easy for users to quickly find what they are looking for. Additionally, the segmented design offers a clear view of the application structure, improving understanding and usability.</p>
</div>
<table border="1">
    <thead>
        <tr>
            <th colspan="2">Attribute</th>
            <th>Default Value</th>
            <th>Type</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        {% include "./common/base.md" %}
    </tbody>
</table>

## 4.6.1 Tabitem

<table border="1">
    <thead>
        <tr>
            <th colspan="2">Attribute</th>
            <th>Default Value</th>
            <th>Type</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        {% include "./common/base.md" %}
        {% include "./common/label.md" %}
        <tr>
            <td colspan="2"><strong>properties</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Comma-separated list of properties of the current entity to be displayed in the current tab.</td>
        </tr>
    </tbody>
</table>

    <tab>
        <tabitem label="Tab1" properties="d_prueba">
        </tabitem>
        <tabitem label="Tab2">
        </tabitem>
        <tabitem label="Tab3">
        </tabitem>
        <tabitem label="Tab4">
        </tabitem>
    </tab>

![img.png](../img/tabs.png){: .center }

## 4.6.2 Components of the Tab-Tabitem
 {% include "./common/components.md" %}
