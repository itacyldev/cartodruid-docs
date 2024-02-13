# 4.14 Radio
<div style="text-align: justify;">
    <p>The Radio component provides users with the ability to choose a single exclusive option from several alternatives. Its main functionality focuses on presenting a set of mutually exclusive options, where selecting one option automatically deselects the others within the same group. This behavior ensures that only one option is active within the group at any given time.</p>
    <p>The Radio component offers flexibility in its presentation, allowing two different orientations: vertical and horizontal. You can configure the arrangement of options based on your design needs and space in the user interface.</p>
    <p>Additionally, the "weights" attribute provides a way to distribute space among the options. By specifying percentages separated by commas, you can adjust the occupancy proportion of each option within the component. This offers detailed control over the visual presentation, allowing certain options to occupy more space than others according to your design preferences.</p>
    <p>In summary, the Radio component not only provides the capability of exclusive selection but also offers visual customization options through orientation and weight distribution, facilitating its adaptation to different user interface designs.</p>
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
            <td colspan="2"><strong>weights</strong></td>
            <td>null</td>
            <td>String</td>
            <td>The proportion of space occupation for options relative to the whole. Percentages of occupation are separated by commas. If nothing is specified, options will occupy the entire space proportionally.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>orientation</strong></td>
            <td>vertical</td>
            <td>String</td>
            <td>Orientation of options: vertical, horizontal.</td>
        </tr>
    </tbody>
</table>

## 4.14.1 Options

### 4.14.1.1 Option
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

![img.png](../img/radio.png){: width="240" .center }
