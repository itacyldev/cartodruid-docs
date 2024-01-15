# 4.18 Autocomplete
<table border="1">
    <thead>
        <tr>
            <th colspan="2">Atributo</th>
            <th>Valor por defecto</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        {% include "./common/base.es.md" %}
        {% include "./common/input.es.md" %}
        {% include "./common/value.es.md" %}
        {% include "./common/repo.es.md" %}
    <tr>
        <td colspan="2"><strong>forceSelection</strong></td>
        <td>false</td>
        <td>Boolean</td>
        <td>Si se establece en true, obliga al usuario a seleccionar una de las opciones disponibles y no se admite texto libre. En este caso, si el usuario inserta algún texto que no se ajusta a ninguna de las opciones, el componente borrará la entrada y se establecerá null como valor de la propiedad entity.</td>
    </tr>
</tbody>
</table>

## 4.18.1 Options

<table border="1">
    <thead>
        <tr>
            <th colspan="2">Atributo</th>
            <th>Valor por defecto</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        {% include "./common/options.es.md" %}
   </tbody>
</table>


## 4.18.2 Repofilter
{% include "./common/repofilter.es.md" %}

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

![Imagen 1](../img/autocomplete1.png){: width="240"} | ![Imagen 2](../img/autocomplete2.png){: width="240"} |
