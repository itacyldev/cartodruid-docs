<tr>
    <td rowspan="6" class="vertical-text" align="center"><strong>Comunes</strong></td>
    <td><strong>id</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Identificador único del componente. Si no tiene id, se le asigna con nomenclatura ${tag}${num}.</td>
</tr>
<tr>
    <td><strong>render</strong></td>
    <td>true</td>
    <td>Boolean o JEXLExpression</td>
    <td style="text-align: justify;">Expresión EL para evaluar si el componente debe mostrarse.</td>
</tr>
<tr>
    <td><strong>onBeforeRender</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Método JS a ejecutar antes de que el componente actual sea renderizado.</td>
</tr>
<tr>
    <td><strong>onAfterRender</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Método JS que se ejecutará una vez renderizado el componente actual.</td>
</tr>
<tr>
    <td><strong>action</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Identificador de la acción a realizar cuando el usuario interactúa con este componente.</td>
</tr>
<tr>
    <td><strong>allowsPartialRestore</strong></td>
    <td>false</td>
    <td>Boolean</td>
    <td style="text-align: justify;">Si el estado del componente actual debe restaurarse cuando el usuario vuelva a la vista.</td>
</tr>
