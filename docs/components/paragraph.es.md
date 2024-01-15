# 4.23 Paragraph
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
            <td colspan="2"><strong>value</strong></td>
            <td>null</td>
            <td>String o JEXLExpression</td>
            <td>Expresión EL para calcular el valor del componente.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>fontSize</strong></td>
            <td>null</td>
            <td>Integer</td>
            <td>Tamaño de letra.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>fontColor</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Color de la letra.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>backgroundColor</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Color de fondo.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>italic</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td>Cursiva.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>bold</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td>Negrita.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>uppercase</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td>Maýusculas.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>underlined</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td>Subrayado.</td>
        </tr>
    </tbody>
</table>

    <p value="Texto normal"/>
    <p value="Texto tamaño 22" fontSize="22"/>
    <p value="Texto rojo" fontColor="#ED1C24"/>
    <p value="Fondo rojo" backgroundColor="#ED1C24"/>
    <p bold="true" value="Negrita"/>
    <p italic="true" value="Cursiva"/>
    <p uppercase="true" value="Mayúsculas"/>
    <p underlined="true" value="Subrayado"/>

![img.png](../img/paragraph.png){: .center } 