# 4.20 Buttonbar
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
            <td>Tipo de la botonera: Fab, bottom.</td>
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

![Imagen 1](../img/buttonbar1.png){: width="240"} | ![Imagen 2](../img/buttonbar2.png){: width="240"} |
