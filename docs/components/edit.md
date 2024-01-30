# 4.3 Edit
<div style="text-align: justify;">
    <p>The edit component is used to create edit forms.</p>
    <p>They can have actions to indicate operations between forms.
    If no action is specified, the following actions are set up by default: save and cancel.</p>
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
        <tr>
            <td colspan="2"><strong>id</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Unique identifier for the component. If not defined, the default id will be formId#edit. If more than one edit form is defined, a numeric suffix will be added.</td>
        </tr>
    </tbody>
</table>

    <main id="formEdit" name="Edit" repo="provinciaRepo">
        <edit id="editProvincias">
        </edit>
    </main>

![img.png](../img/edit.png){: .center }

## 4.3.1 Form
See [4.5. Form](form.md)

## 4.3.2 Script
See [4.25. Script](script.md)

## 4.3.3 Buttonbar
See [4.20. Buttonbar](buttonbar.md)


