# 4.17 Select
<div style="text-align: justify;">
<p>The Select component provides a user interface element for choosing a single option from a predefined list. It is commonly used to represent dropdown menus, allowing users to select one option from various choices.</p>
<p>This component is particularly useful when the user needs to choose an exclusive option from a predefined set. When interacting with the component, a list of options is displayed, and the user can select one of them.</p>
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
   </tbody>
</table>

## 4.17.1 Options

### 4.17.1.1 Option
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
        {% include "./common/option.md" %}
   </tbody>
</table>

    <select label="Select: " value="${entity.d_prueba}">
        <options>
            <option value="1" label="Value 1"/>
            <option value="2" label="Value 2" />
            <option value="3" label="Value 3" />
            <option value="4" label="Value 4" />
            <option value="5" label="Value 5" />
        </options>
    </select>

![img.png](../img/select.png){: width="240" .center }
