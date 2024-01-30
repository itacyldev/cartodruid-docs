# 4.12 Input
<div style="text-align: justify;">
    <p>Un elemento para ingresar y modificar texto.</p>
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
        {% include "./common/input.es.md" %}
        {% include "./common/value.es.md" %}
   </tbody>
</table>

    <input label="Required: " value="${entity.d_prueba}" validator="required"/>
    <input label="Hint: " value="${entity.d_prueba}" hint="Hint description"/>
    <input label="Readonly: " value="${entity.d_prueba}" readonly="true"/>
    <input label="PlaceHolder: " placeHolder="${params.d_prueba}" value="${entity.d_prueba}"/>
    <input label="InputType: " inputType="3" value="${entity.d_prueba}"/>
    <input label="HasDeleteButton: " hasDeleteButton="false"  value="${entity.d_prueba}"/>
    <input label="Converter: " converter="integer" value="${entity.d_prueba}"/>

![Imagen 1](../img/input1.png){: width="240"} | ![Imagen 2](../img/input2.png){: width="240"} | ![Imagen 3](../img/input3.png){: width="240"} | 

