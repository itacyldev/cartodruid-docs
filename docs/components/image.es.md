# 4.19 Image
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
            <td colspan="2"><strong>embedded</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td>Si es true indica que la imagen se almacena como una propiedad de la entidad. Si se establece en true, no se puede utilizar el atributo repo.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>width</strong></td>
            <td></td>
            <td>Integer</td>
            <td>Anchura aplicada a la vista de imagen.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>height</strong></td>
            <td></td>
            <td>Integer</td>
            <td>Altura aplicada a la vista de imagen.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>repoProperty</strong></td>
            <td>content</td>
            <td>String</td>
            <td>Si se utiliza repositorio para recuperar la imagen, esta propiedad indica la propiedad de la entidad relacionada que almacena el contenido de la imagen. Por defecto se espera una propiedad llamada "contenido".</td>
        </tr>
   </tbody>
</table>

    <image label="Imagen 1: " value="${'batman.jpg'}" />

    <image label="Imagen 2: " converter="b64Image" height="200" repo="pruebaRepo" repoProperty="image"
        value="${entity.imagen2}" width="300" inputType="1"/>

    <image converter="b64Image" embedded="true" label="Imagen 2: " value="${entity.image}" inputType="1"/>
    <image converter="b64Image" embedded="true" label="Imagen 3: " value="${entity.image}" inputType="2"/>
    <image converter="b64Image" embedded="true" label="Imagen 5: " value="${entity.image}" inputType="4"/>
    <image converter="b64Image" embedded="true" label="Imagen 4: " value="${entity.image}" inputType="3"/>
    <image converter="b64Image" embedded="true" label="Imagen 6: " value="${entity.image}" inputType="5"/>
    <image converter="b64Image" embedded="true" label="Imagen 7: " value="${entity.image}" inputType="6"/>
    <image converter="b64Image" embedded="true" label="Imagen 8: " value="${entity.image}" inputType="7"/>

![Imagen 2](../img/imagen1.png){: width="170"} | ![Imagen 3](../img/imagen2.png){: width="170"} | ![Imagen 3](../img/imagen3.png){: width="170"} | ![Imagen 3](../img/imagen4.png){: width="170"} |
    
