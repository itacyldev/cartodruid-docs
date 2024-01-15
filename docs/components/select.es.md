# 4.17 Select
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

## 4.17.1 Options

### 4.17.1.1 Option
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

    <select label="Select: " value="${entity.d_prueba}">
        <options>
            <option value="1" label="Valor 1"/>
            <option value="2" label="Valor 2" />
            <option value="3" label="Valor 3" />
            <option value="4" label="Valor 4" />
            <option value="5" label="Valor 5" />
        </options>
    </select>

![img.png](../img/select.png){: .center } 