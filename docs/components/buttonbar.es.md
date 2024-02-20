# 4.20 Buttonbar
<div style="text-align: justify;">
<p>
En el formulario de edición y en el de listado la configuración los botones de acción se pueden mostrar en:
</p>
<ul>
<li>BottomBar</li>
<li>FabBar</li>
</ul>
<p>
Para determinar qué botones/opciones mostrar y qué acciones ejecutar se utilizará un buttonbar con atributo "type" con valores "bottom" y "fab" si es una botonera que se tiene que mostrar en el contenido de la vista.
</p>
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
            <td colspan="2"><strong>type</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Tipo de la botonera: Fab, bottom.</td>
        </tr>
    </tbody>
</table>

    <main id="formButtonbar" name="Buttonbar" repo="pruebaRepo">
        <list name="Buttonbar">
            <buttonbar type="fab">
                <button id="btnFab">
                    <action id="createPrueba" type="create" route="formButtonbar-editButtonbar1">
                        <param name="repo" value="pruebaRepo"/>
                    </action>
                </button>
            </buttonbar>
        </list>
        <edit id="editButtonbar1">
            <form>
                <input label="Description: " value="${entity.d_prueba}"/>
            </form>
            <buttonbar type="bottom">
                <button id="btnSave" label="Save" action="save" route="back"/>
                <button id="btnCancel" label="Cancel" route="back"/>
            </buttonbar>
        </edit>
    </main>

![Imagen 1](../img/buttonbar1.png){: width="240"} ![Imagen 2](../img/buttonbar2.png){: width="240"}

## 4.20.1 Button
Ver [4.21. Button](button.es.md)