# 4.14 Radio
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
        <tr>
            <td colspan="2"><strong>weights</strong></td>
            <td>null</td>
            <td>String</td>
            <td>La proporción de ocupación de las opciones con respecto al todo. Separado por comas los porcentajes de ocupación. Si no se indica nada, las opciones ocuparán el todo de manera proporcional.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>orientation</strong></td>
            <td>vertical</td>
            <td>String</td>
            <td>Orientación de las opciones: vertical, horizontal.</td>
        </tr>
    </tbody>
</table>

## 4.14.1 Options

### 4.14.1.1 Option
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
        {% include "./common/option.es.md" %}
   </tbody>
</table>

    <radio label="Radio horizontal: " value="${entity.tipo_figura_calidad}" orientation="horizontal" weights="20, 30, 50">
        <options>
            <option id="uno" label="Uno" value="Uno" />
            <option id="dos" label="Dos" value="Dos" />
            <option id="tres" label="Tres" value="Tres" />
        </options>
    </radio>
    <radio label="Radio vertical: " value="${entity.tipo_figura_calidad}" orientation="vertical">
        <options>
            <option id="cuatro" label="Cuatro" value="Cuatro" />
            <option id="cinco" label="Cinco" value="Cinco" />
            <option id="seis" label="Seis" value="Seis" />
        </options>
    </radio>

![img.png](../img/radio.png){: .center } 