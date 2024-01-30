# 4.15 Switcher
<div style="text-align: justify;">
<p>The Switcher component offers an intuitive user interface designed to toggle between two states: on or off. Its utility lies in providing users with the ability to switch between two binary options, offering a straightforward and direct selection experience.</p>
<p>When using the Switcher, users can activate or deactivate a specific function or state with a simple visual switch. This component is particularly beneficial when seeking an efficient and easy way to allow users to choose between two clearly defined options.</p>
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
        <tr>
            <td><strong>value</strong></td>
            <td>false</td>
            <td>Boolean or JEXLExpression</td>
            <td>Component value. If true, the Switcher will be active.</td>
        </tr>
   </tbody>
</table>

    <switcher label="Switcher true: " value="true" />
    <switcher label="Switcher false: " value="false" />

![img.png](../img/switcher.png){: .center } 


