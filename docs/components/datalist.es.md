# 4.9 Datalist
<div style="text-align: justify;">
<p>Componente tipo lista utilizado para organizar y presentar conjuntos de datos relacionados.</p> 
<p>Cada elemento en esta lista, conocido como "datalistitem", tiene la capacidad de contener diversos elementos 
como tablas, inputs, imágenes y otros componentes.</p>
<p>Este componente está asociado a un repositorio definido en "repo", permitiendo la vinculación directa de datos.</p>
<p>Además presenta la funcionalidad de ser filtrado a través del componente "repofilter", lo que proporciona la capacidad de mostrar datos específicos basados en criterios de filtrado predefinidos.</p>
<p>Esta versatilidad permite la creación de listas interactivas y
personalizables que pueden incorporar una variedad de elementos según los requisitos específicos de la interfaz de usuario y la funcionalidad de la aplicación.
</p>
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

## 4.9.1 Datalistitem
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
    </tbody>
</table>

## 4.9.2 Repofilter
{% include "./common/repofilter.es.md" %}

    <datalist id="datalistProvincia" repo="provinciaRepo">
        <datalistitem>
            <table border="0" weigths="30, 70">
                <row>
                    <input label="Cod.: " value="${entity.c_provincia_id}"/>
                    <input label="Provincia" value="${entity.d_provincia}"/>
                </row>
            </table>
        </datalistitem>
        <repofilter>
            <le property="c_provincia_id" value="9"/>
       </repofilter>
    </datalist>

![Imagen 1](../img/datalist.png){: .center }

## 4.9.3 Componentes del datalist-datalistitem
 {% include "./common/components.es.md" %}

