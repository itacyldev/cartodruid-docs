# 4.10 Imagegallery

<div style="text-align: justify;">
<p>The Imagegallery component allows users to conveniently view and manage sets of related images.</p>
<p>Each element in the image gallery is referred to as an Imagegalleryitem.</p>
<p>This component is associated with a repository defined in "repo," enabling direct data binding.</p>
<p>Additionally, it features the functionality of being filtered through the "repofilter" component, providing the ability to display specific data based on predefined filtering criteria.</p>
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
        {% include "./common/repo.md" %}
    </tbody>
</table>

## 4.10.1 Imagegalleryitem

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
        {% include "./common/id.md" %}
        {% include "./common/label.md" %}
        <tr>
            <td colspan="2"><strong>value</strong></td>
            <td>null</td>
            <td>String or JEXLExpression</td>
            <td>EL Expression to calculate the component's value.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>converter</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Instance of the converter to apply to the entity property.</td>
        </tr>
    </tbody>
</table>

## 4.10.1 Repofilter


{% include "./common/repofilter.md" %}

    <imagegallery repo="pruebaRepo" allowsPartialRestore="false">
        <repofilter>
            <and>
                <le property="prueba_id" value="4" />
            </and>
        </repofilter>
        <imagegalleryitem converter="b64Image" value="${entity.image}" />
    </imagegallery>

![img.png](../img/imagegallery.png){: width="240" .center } 