# 4.13 Textarea
<div style="text-align: justify;">
    <p>The Textarea component provides an interface for entering and modifying text.</p>
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
        <tr>
            <td colspan="2"><strong>lines</strong></td>
            <td>1</td>
            <td>Integer</td>
            <td>Number of lines to display.</td>
        </tr>
   </tbody>
</table>

    <textarea label="Textarea: " value="${entity.d_prueba}" validator="required" hint="Hint description" lines="4"/>
    <textarea label="Readonly: " value="${entity.d_prueba}" readonly="true"/>
    <textarea label="PlaceHolder: " placeHolder="${params.d_prueba}" value="${entity.d_prueba}"/>
    <textarea label="InputType: " inputType="3" value="${entity.d_prueba}"/>
    <textarea label="HasDeleteButton: " hasDeleteButton="false"  value="${entity.d_prueba}"/>
    <textarea label="Converter: " converter="integer" value="${entity.d_prueba}"/>

![img.png](../img/textarea.png){: .center } 
