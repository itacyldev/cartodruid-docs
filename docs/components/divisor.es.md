# 4.24 Divisor
<div style="text-align: justify;">
<p>El componente divisor es una línea que se utiliza para separar o dividir visualmente secciones de contenido.</p>
</div>
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
            <td colspan="2"><strong>color</strong></td>
            <td></td>
            <td>String</td>
            <td>Color de la línea divisora.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>strokeWidth</strong></td>
            <td></td>
            <td>Integer</td>
            <td>Altura (ancho) que tendrá la línea divisora.</td>
        </tr>
    </tbody>
</table>    

    <divisor color="#FF0000" strokeWidth="8" />
    <p/>
    <divisor color="#FF0000" strokeWidth="16" />
    <p/>
    <divisor color="#FF0000" strokeWidth="24" />
    <p/>

    <divisor color="#00FF00" strokeWidth="8" />
    <p/>
    <divisor color="#00FF00" strokeWidth="16" />
    <p/>
    <divisor color="#00FF00" strokeWidth="24" />
    <p/>

    <divisor color="#0000FF" strokeWidth="8" />
    <p/>
    <divisor color="#0000FF" strokeWidth="16" />
    <p/>
    <divisor color="#0000FF" strokeWidth="24" />
    <p/>

![img.png](../img/divisor.png){: width="240" .center }
