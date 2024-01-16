# 4.7 Table

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
            <td colspan="2"><strong>headerText</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Lista de textos separados por comas para las celdas de cabecera.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>weights</strong></td>
            <td>null</td>
            <td>String</td>
            <td>La proporción de ocupación de las columnas con respecto al todo. Separado por comas los porcentajes de ocupación. Si no se indica nada, las columnas ocuparán el todo de manera proporcional.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>border</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td>Si su valor es false, se eliminarán los bordes.</td>
        </tr>
    </tbody>
</table>

        <table headerText=" Header Text 1, Header Text2 ">
            <row>
                <p value="Column1 row1"/>
                <p value="Column2 row1"/>
            </row>
            <row>
                <p value="Column1 row2"/>
                <p value="Column2 row2"/>
            </row>
        </table>

        <table headerText=" Header Text 1, Header Text2 " border="false">
            <row>
                <p value="Column1 row1"/>
                <p value="Column2 row1"/>
            </row>
            <row>
                <p value="Column1 row2"/>
                <p value="Column2 row2"/>
            </row>
        </table>

        <table headerText=" Header Text 1, Header Text2 " weights="35, 65">
            <row>
                <p value="Column1 row1"/>
                <p value="Column2 row1"/>
            </row>
            <row>
                <p value="Column1 row2"/>
                <p value="Column2 row2"/>
            </row>
        </table>

![img.png](../img/table.png){: .center }

## 4.7.1 Row

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
            <td colspan="2"><strong>properties</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Lista separada por comas de las propiedades de la entidad actual que se ordenarán en la fila actual</td>
        </tr>
        <tr>
            <td colspan="2"><strong>weights</strong></td>
            <td>null</td>
            <td>String</td>
            <td>La proporción de ocupación de las columnas para esta fila con respecto al todo. Separado por comas los porcentajes de ocupación. Si no se indica nada, las columnas de la fila ocuparán el todo de manera proporcional.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>colspan</strong></td>
            <td>null</td>
            <td>Integer</td>
            <td>Entero que determina el número de posiciones de columna que debe ocupar cada elemento de la fila actual.</td>
        </tr>
    </tbody>
</table>

    <table headerText=" Header Text 1, Header Text2 ">
        <row properties="prueba_id, d_prueba">
        </row>
    </table>

    <table headerText=" Header Text 1, Header Text2, Header Text3">
        <row weights="20, 30, 50">
            <p value="Column1 row1"/>
            <p value="Column2 row1"/>
            <p value="Column3 row1"/>
        </row>
        <row weights="50, 30, 20">
            <p value="Column1 row2"/>
            <p value="Column2 row2"/>
            <p value="Column3 row2"/>
        </row>
    </table>

    <table headerText=" Header Text 1, Header Text2, Header Text3">
        <row colspan="3">
            <p value="Column1 row1"/>
        </row>
        <row>
            <p value="Column1 row2"/>
            <p value="Column2 row2"/>
            <p value="Column3 row2"/>
        </row>
    </table>

![img.png](../img/table_row.png){: .center }

## 4.7.2 Componentes del table-row
 {% include "./common/components.es.md" %}