# 4.20 Buttonbar
<div style="text-align: justify;">
<p>
In the edit form and in the listing form, the configuration of the action buttons can be displayed in:
</p>
<ul>
<li>BottomBar</li>
<li>FabBar</li>
</ul>
<p>
To determine which buttons/options to show and which actions to perform, a button bar with the "type" attribute will be used with values "bottom" and "fab" if it is a button bar that needs to be displayed in the content of the view.
</p>
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
            <td colspan="2"><strong>type</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Type of the button bar: Fab, bottom.</td>
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

## 4.20.1 Button
Ver [4.21. Button](button.md)