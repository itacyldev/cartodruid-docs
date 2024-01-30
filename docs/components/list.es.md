# 4.2 List
<div style="text-align: justify;">
    <p>El componente List se emplea para diseñar formularios de listado, proporcionando una manera eficiente de mostrar conjuntos de datos organizados y permitiendo la interacción con los mismos.</p>
    <p>Estos formularios pueden incluir acciones que indican operaciones específicas a realizar entre diferentes formularios, mejorando la capacidad de gestión y navegación del usuario.</p>
    <p>Los datos del List se presentan a través de un <a href="../datatable.es">Datatable</a>, componente utilizado para organizar y visualizar conjuntos de datos tabulares de manera estructurada. El <a href="../datatable.es">Datatable</a> está asociado a un repositorio definido en el atributo "repo", lo que permite una vinculación directa de datos para su presentación.</p>
    <p>Adicionalmente, el <a href="../datatable.es">Datatable</a> ofrece funcionalidades avanzadas, como la capacidad de filtrar y ordenar los datos según criterios predefinidos. Esto mejora la eficiencia en la búsqueda y visualización de información, permitiendo a los usuarios interactuar de manera efectiva con los datos presentados.</p>
    <p>La personalización del número de filas visibles y la selección de propiedades de entidad proporcionan flexibilidad para adaptar el <a href="../datatable.es">Datatable</a> a diversas necesidades de presentación y contenido, permitiendo una experiencia de usuario más personalizada.</p>
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

## 4.2.1 Datatable
Ver [4.8. Datatable](datatable.es.md)

## 4.2.2 Buttonbar
Ver [4.20. Buttonbar](buttonbar.es.md)