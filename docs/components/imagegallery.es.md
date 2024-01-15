# 4.10 Imagegallery

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
        {% include "./common/repo.es.md" %}
    </tbody>
</table>

## 4.10.1 Imagegalleryitem
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
        {% include "./common/id.es.md" %}
        {% include "./common/label.es.md" %}
        <tr>
            <td colspan="2"><strong>value</strong></td>
            <td>null</td>
            <td>String o JEXLExpression</td>
            <td>Expresión EL para calcular el valor del componente.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>converter</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Instancia del conversor a aplicar a la propiedad de la entidad.</td>
        </tr>
    </tbody>
</table>

## 4.10.1 Repofilter
{% include "./common/repofilter.es.md" %}

    <imagegallery repo="pruebaRepo" allowsPartialRestore="false">
        <repofilter>
            <and>
                <le property="prueba_id" value="4" />
            </and>
        </repofilter>
        <imagegalleryitem converter="b64Image" value="${entity.image}" />
    </imagegallery>

![img.png](../img/imagegallery.png){: .center } 