# 4.22 Link
<div style="text-align: justify;">
    <p>The Link component is used to create links within the application.</p>
    <p>This component is useful for creating easy navigation between different forms or sections of the application. By clicking on the link, the application will navigate to the form specified in the route attribute.</p>
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
        <tr>
            <td colspan="2"><strong>value</strong></td>
            <td>null</td>
            <td>String or JEXLExpression</td>
            <td>EL expression to calculate the value of the component.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>route</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Identifier of the target form that will open when the user clicks on the link.</td>
        </tr>
    </tbody>
</table>

    <link route="formLink-list" value="link"/>

![Image 1](../img/link1.png){: width="240"} ![Image 2](../img/link2.png){: width="240"}
