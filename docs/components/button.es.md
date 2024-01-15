# 4.21 Button
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
        {% include "./common/label.es.md" %}
        <tr>
            <td colspan="2"><strong>route</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Identificador del formulario de destino que se abrirá cuando el usuario haga clic en una entidad.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>readonly</strong></td>
            <td>false</td>
            <td>Boolean o JEXLExpression</td>
            <td>Evaluar si el componente debe ser de sólo lectura o no.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>readonlyMessage</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Texto que se muestra al pulsar el botón y este es de tipo readonly, es decir, no se ejecutará la acción.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>confirmation</strong></td>
            <td>false</td>
            <td>Boolean o JEXLExpression</td>
            <td>Evaluar si debe mostrarse panel de confirmación de la acción.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>labelConfirmation</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Texto que se muestra en el panel de confirmación.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>action</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Acción que se realizará al pulsar el botón: add, create, update, save, cancel, delete, nav, js. Ver Ver <a href="./actions.es.md" target="_blank">4.28 Action</a>
        </td>
        </tr>
    </tbody>
</table>    

    <button label="Button readonly" route="formLink-list" readonly="true" readonlyMessage="No puede realizar esta acción"/>

    <button label="Button confirmation" route="formLink-list" confirmation="true" labelConfirmation="¿Desea realizar esta acción?"/>

![Imagen 1](../img/button1.png){: width="240"} | ![Imagen 2](../img/button2.png){: width="240"} |
