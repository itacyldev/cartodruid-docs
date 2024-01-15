# 4.2 List
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
            <td>Identificador único del componente. Si no se define, por defecto el id será formId#list.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>name</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Nombre descriptivo del grupo de formularios.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>description</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Descripción del grupo de formularios.</td>
        </tr>
    </tbody>
</table>

    <main id="formDatatable" name="Datatable" repo="provinciaRepo">
        <list id="provincias" name="Provincias" description="Listado de provincias">
            <datatable id="datatableProvincia">
                <column id="column_c_provincia_id" headerText="Cod. Provincia" filtering="true" ordering="true" value="${entity.c_provincia_id}">
                    <filter property="c_provincia_id" matching="contains" valueExpression="${this.column_c_provincia_id}"/>
                    <order property="c_provincia_id"/>
                </column>
                <column id="column_d_provincia" headerText="Provincia" filtering="true" ordering="true" value="${entity.d_provincia}">
                    <filter property="d_provincia" matching="contains" valueExpression="${this.column_d_provincia}"/>
                    <order property="d_provincia"/>
                </column>
            </datatable>
        </list>
    </main>

![Imagen 1](../img/list1.png){: width="240"} | ![Imagen 2](../img/list2.png){: width="240"} |