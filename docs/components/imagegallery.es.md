# 4.10 Imagegallery
<div style="text-align: justify;">
<p>El componente galería de imágenes permite a los usuarios visualizar y gestionar de manera conveniente conjuntos de imágenes relacionadas.</p>
<p>Cada elemento de la galería de imágenes es llamado Imagegalleryitem.</p>
<p>Este componente está asociado a un repositorio definido en "repo", permitiendo la vinculación directa de datos.</p>
<p>Además presenta la funcionalidad de ser filtrado a través del componente "repofilter", lo que proporciona la capacidad de mostrar datos específicos basados en criterios de filtrado predefinidos.</p>
</div>
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

![img.png](../img/imagegallery.png){: width="240" .center } 