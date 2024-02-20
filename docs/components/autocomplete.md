# 4.18 Autocomplete
<div style="text-align: justify;">
<p>
An interactive component that provides real-time suggestions to the user while typing in an input field. This component facilitates the selection of options by displaying possible matches, thereby improving efficiency and accuracy in data entry.</p>
<p>This component is associated with a repository defined in "repo," allowing for the direct linkage of data.</p>
<p>Additionally, it features the ability to be filtered through the "repofilter" component, providing the capability to display specific data based on predefined filtering criteria.</p>
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
        {% include "./common/input.md" %}
        {% include "./common/value.md" %}
        {% include "./common/repo.md" %}
    <tr>
        <td colspan="2"><strong>forceSelection</strong></td>
        <td>false</td>
        <td>Boolean</td>
        <td style="text-align: justify;">If set to true, forces the user to select one of the available options, and free text input is not allowed. In this case, if the user enters any text that does not match any of the options, the component will clear the input and set null as the value of the entity property.</td>
    </tr>
</tbody>
</table>

## 4.18.1 Options

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
        {% include "./common/options.md" %}
   </tbody>
</table>

## 4.18.2 Repofilter
{% include "./common/repofilter.md" %}

    <autocomplete forceSelection="true" id="c_provincia_id" label="Provincia: " repo="provinciaRepo" value="${entity.c_provincia_id}">
        <options labelExpression="${entity.d_provincia}" labelFilteringProperty="d_provincia" valueProperty="c_provincia_id" />
    </autocomplete>
    <autocomplete forceSelection="true" id="c_provmuni_id" label="Municipio: " repo="municipioRepo" value="${entity.c_provmuni_id}">
        <options labelExpression="${entity.d_nombre}" labelFilteringProperty="d_nombre" valueProperty="c_provmuni_id" />
        <repofilter>
            <eq property="c_provincia_id" value="${view.c_provincia_id}" mandatory="true"/>
            <contains property="d_nombre" value="${this.value}"/>
        </repofilter>
    </autocomplete>

![Imagen 1](../img/autocomplete1.png){: width="240"} ![Imagen 2](../img/autocomplete2.png){: width="240"}
