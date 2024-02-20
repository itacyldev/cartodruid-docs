# 4.19 Image
<div style="text-align: justify;">
<p>El componente de imagen permite renderizar imágenes en una aplicación, siendo útil para mostrar firmas, fotografías, u otros elementos visuales relevantes para la interfaz de usuario.</p>
<p>Las imágenes pueden cargarse desde diversas fuentes, tales como:</p>
<ul>
    <li>Archivos estáticos almacenados localmente en el dispositivo del usuario.</li>
    <li>Medios almacenados en una base de datos, representados como archivos blob (datos binarios sin procesar).</li>
    <li>Archivos de texto que contienen datos de imagen codificados, por ejemplo, en formato B64.</li>
</ul>
<p>Este componente ofrece flexibilidad para la presentación de imágenes, permitiendo a los desarrolladores crear experiencias visuales personalizadas adaptadas a las necesidades específicas de la aplicación.</p>
<strong><u>Expresión literal</u></strong><i> (Ej: batman.jpg)</i>
<p>Cuando la expresión es un literal, la imagen se localiza utilizando el repositorio de imágenes por defecto del proyecto, que apunta al directorio "pictures" anidado a la carpeta actual del proyecto. En este caso, el componente será de solo lectura, y el conversor es por defecto "urlImage".</p>
<strong><u>Expresión de solo lectura</u></strong><i> (Ej: ${entity.category}/${entity.id}.jpeg)</i>
<p>Si la expresión no es un atributo de entidad, es decir, no es una columna de la tabla a la que hace referencia el atributo repo, por defecto se interpreta como una expresión para definir el ID de la entidad en el repositorio.</p>
<p>Ejemplo: ${entity.category}/${entity.id}.jpeg. La imagen se tratará como una entidad relacionada que se recupera utilizando el repositorio de imágenes por defecto del proyecto, o el repositorio establecido en el atributo "repo", y el ID de la entidad en este repositorio se calculará utilizando la expresión dada: ${entity.category}/${entity.id}.jpeg. La expresión es de solo lectura, pero la imagen sí se puede almacenar.</p>
<strong><u>Expresión Double-Binding</u></strong><i> (Ej: ${entity.image})</i>
<p>Si la expresión define un enlace de atributo de entidad, la propiedad de entidad a la que hace referencia la expresión puede contener el ID de la entidad relacionada en un repositorio externo o el propio contenido de la entidad. El atributo EMBEDDED se utiliza para determinarlo.</p>
<ul>
    <li>Embedded=true: significa que el contenido de la imagen se almacena en la propiedad de la entidad.</li>
    <li>Embedded=false: significa que la imagen está en un repositorio y la propiedad entity almacena el ID de la entidad relacionada.</li>
</ul>
<p>En estos casos, la imagen puede recuperarse de diferentes maneras:</p>
<ul>
    <li>Utilizando un repositorio específico y la propiedad de entidad que almacena el ID de la imagen en ese repositorio. </li>
    <li>Utilizando el repositorio de imágenes por defecto del proyecto y el ID de la imagen se forma a partir del ID de la entidad con el sufijo ".jpg".</li>
    <li>Personalizando el nombre y la ubicación de la imagen.</li>
</ul>
</div>

    <image repo="superHImages" value="${entity.image}" />
    <image value="${entity.id}.jpg" width="300" height="200" />
    <image value="superhéroes/${entity.name.toLowerCase().replace(' ','_')+'.jpg'}" />

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

![Imagen 2](../img/imagen1.png){: width="170"} ![Imagen 3](../img/imagen2.png){: width="170"} ![Imagen 3](../img/imagen3.png){: width="170"} ![Imagen 3](../img/imagen4.png){: width="170"}
    
