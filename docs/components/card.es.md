# 4.11 Card
<div style="text-align: justify;">
<p>Componente de tarjeta, elemento que actúa como contenedor de información, presentando una estructura basada en una plantilla que incluye etiqueta, título, subtítulo, descripción e imagen, lo que proporciona una representación visualmente atractiva de datos. </p>
<p>Este componente es flexible y se puede extender para adaptarse a diversas necesidades de presentación.</p>
<p>Permite la creación de interfaces de usuario atractivas y fácilmente comprensibles al organizar la información de manera visualmente efectiva dentro de tarjetas extensibles y personalizables.</p>
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
         <tr>
            <td colspan="2"><strong>label</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Etiqueta que se mostrará de cabecera.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>template</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Plantilla. Posibles valores: card_template_1. </td>
        </tr>
        <tr>
            <td colspan="2"><strong>title</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Título de la tarjeta.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>subtitle</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Subtítulo de la tarjeta.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>description</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Descripción de la tarjeta.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>image</strong></td>
            <td>null</td>
            <td>String o JEXLExpression</td>
            <td style="text-align: justify;">Imagen asociada a la tarjeta.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>imagenPosition</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Posición de la imagen con respecto al texto dentro de la tarjeta: Bottom, top, right, left.</td>
        </tr>
       <tr>
            <td colspan="2"><strong>expanded</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td style="text-align: justify;">Indica si está expandido.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>expandable</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td style="text-align: justify;">Indica si se puede expandir.</td>
        </tr>
   </tbody>
</table>

    <main name="Card" id="formCard" repo="pruebaRepo">
        <edit>
            <form>
                <card label="Label 1" template="card_template_1" title="Card 1" subtitle="Subtitle card 1" image="${'batman.jpg'}" imagePosition="left">
                  <p name="description" value="Description 1"/>
                 </card>
                <card label="Label 2" template="card_template_1" imagePosition="bottom">
                  <p name="title" value="Card 2"/>
                  <p name="subtitle" value="Subtitle card 2"/>
                  <p name="description" value="Description 2"/>
                  <image label="Imagen 1: " value="${'batman.jpg'}" readonly="true"/>
                </card>
                <card label="Label 3" template="card_template_1" title="Card 3" subtitle="Subtitle card 3" expandable="true" expanded="true" imagePosition="right">
                  <p name="description" value="Description 3"/>
                 </card>
                <card label="Label 4" template="card_template_1" title="Card 4" subtitle="Subtitle card 4" expandable="true" expanded="false">
                  <p name="description" value="Description 4"/>
                </card>
            </form>
        </edit>
        <list name="Card">
        </list>
    </main>

![img.png](../img/card.png){: width="240" .center } 