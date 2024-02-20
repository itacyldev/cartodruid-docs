# 4.16 Date/Datetime
<div style="text-align: justify;">
    <p>The Date component is used to display and input dates, while the DateTime component extends this functionality to include both date and time information.</p>
    <p>For the "pattern" attribute, users can specify the format in which they want the date or datetime to be represented. If Unix epoch time is used (as a long field), "seconds" and "milliseconds" patterns are available. For text fields, Java date formats, such as "yyyy-MM-dd", can be applied.</p>
    <p>The "hasTodayButton" attribute, set to true by default, determines whether the "Today" button (for Date) or "Now" button (for DateTime) should be displayed, allowing users to easily populate the field with the current date or datetime.</p>
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
            <td colspan="2"><strong>pattern</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Pattern with which to represent the date or datetime.
                <ul>
                    <li>If you have a long field and want to store it in Unix epoch, you can use these two patterns:
                        seconds: unixepoch in seconds, milliseconds: unixepoch in milliseconds.</li>
                    <li>If you have a text field to store the date, you can use Java formats: pattern="yyyy-MM-dd".</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="2"><strong>hasTodayButton</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td>Indicates whether the "Today" button (for Date) or "Now" button (for DateTime) should be displayed.</td>
        </tr>
   </tbody>
</table>

    <date converter="integer" label="Fecha integer segundos: "
        pattern="unixepoch_s" value="${entity.fecha_integer_seconds}" />
    <date converter="integer" label="Fecha integer milisegundos: "
        pattern="unixepoch_m" value="${entity.fecha_integer_milliseconds}" />
    <date converter="string" label="Fecha string: "
        pattern="yyyy/MM/dd" value="${entity.fecha_text}" />

    <datetime converter="integer" label="Fecha integer segundos: "
        pattern="unixepoch_s" value="${entity.fecha_integer_seconds}" />
    <datetime converter="integer" label="Fecha integer milisegundos: "
        pattern="unixepoch_m" value="${entity.fecha_integer_milliseconds}" />
    <datetime converter="string" label="Fecha string: "
        pattern="yyyy/MM/dd" value="${entity.fecha_text}" />

![Image 1](../img/date.png){: width="180"} ![Image 2](../img/date2.png){: width="180"} 
<br/>
![Image 3](../img/datetime.png){: width="180"} ![Image 4](../img/datetime2.png){: width="180"} ![Image 5](../img/datetime3.png){: width="180"} 


