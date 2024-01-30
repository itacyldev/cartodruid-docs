<tr>
    <td rowspan="6" class="vertical-text" align="center"><strong>Common</strong></td>
    <td><strong>id</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Unique identifier of the component. If it doesn't have an id, it is assigned with the nomenclature ${tag}${num}.</td>
</tr>
<tr>
    <td><strong>render</strong></td>
    <td>true</td>
    <td>Boolean or JEXLExpression</td>
    <td style="text-align: justify;">EL expression to evaluate if the component should be displayed.</td>
</tr>
<tr>
    <td><strong>onBeforeRender</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">JS method to execute before the current component is rendered.</td>
</tr>
<tr>
    <td><strong>onAfterRender</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">JS method that will be executed once the current component is rendered.</td>
</tr>
<tr>
    <td><strong>action</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Identifier of the action to perform when the user interacts with this component.</td>
</tr>
<tr>
    <td><strong>allowsPartialRestore</strong></td>
    <td>false</td>
    <td>Boolean</td>
    <td style="text-align: justify;">If the state of the current component should be restored when the user returns to the view.</td>
</tr>
