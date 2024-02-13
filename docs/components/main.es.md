# 4.1 Main
<div style="text-align: justify;">
<p>
Elemento principal de una definición de formulario xml que agrupa un conjunto relacionado de formularios.
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
        <tr>
            <td colspan="2"><strong>id</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Identificador único del componente; si no se define, se utilizará el nombre del archivo base.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>name</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Nombre descriptivo del grupo de formularios.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>description</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Descripción del grupo de formularios.</td>
        </tr>
        {% include "./common/repo.es.md" %}
        <tr>
            <td colspan="2"><strong>mainForm</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td style="text-align: justify;">Indica si este formulario se mostrará en el listado principal de formularios.</td>
        </tr>
    </tbody>
</table>

    <main id="prueba1" name="Name prueba 1" description="Description prueba 1" repo="pruebaRepo">
        <list name="Name prueba 1" description="Description prueba 1" id="listPrueba1"/>
        <edit id="editPrueba1"/>
    </main>

    <main id="prueba2" name="Name prueba 2" description="Description prueba 2" repo="pruebaRepo" mainForm="false">
        <list name="Name prueba 2" description="Description prueba 2" id="listPrueba2"/>
        <edit id="editPrueba2"/>
    </main>

    <main id="prueba3" name="Name prueba 3" description="Description prueba 3" repo="pruebaRepo" mainForm="true">
        <list name="Name prueba 3" description="Description prueba 3" id="listPrueba3"/>
        <edit id="editPrueba3"/>
    </main>

![img.png](../img/main.png){: width="240" .center }

## 4.1.1 List
Ver [4.2. List](list.es.md)

## 4.1.2 Edit
Ver [4.1.2. Edit](edit.es.md)

