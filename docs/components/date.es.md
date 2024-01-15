# 4.16 Date/Datetime

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
            <td colspan="2"><strong>pattern</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Patrón con el que se quiere representar la fecha o fecha-hora. 
                <ul>
                    <li>Si tenemos un campo long y queremos almacenarlos en unix epoc, podemos utilizar estos dos patterns:
                        seconds: unixepoch en segundos, milliseconds: unixepoch en milisegundos.</li>
                    <li>Si tenemos un campo texto para almacenar la fecha podemos utilizar formatos de java: pattern =”yyyy-mm-dd”</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="2"><strong>hasTodayButton</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td>indica si se debe mostrar el botón de "Today" para date o "Now" para datetime.</td>
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


![Imagen 1](../img/date.png){: width="240"} | ![Imagen 2](../img/datetime.png){: width="240"} | 




