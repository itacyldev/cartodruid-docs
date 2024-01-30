# 4.8 Datatable
<div style="text-align: justify;">
<p>Table component, used to organize and present sets of tabular data in a structured and visually effective manner.</p>
<p>This component is associated with a repository defined in "repo," allowing direct data linkage.</p>
<p>Furthermore, it features functionalities such as the ability to filter and order data based on predefined criteria, improving efficiency in searching and visualizing information.</p>
<p>Customization of the number of visible rows and the selection of entity properties contribute to adapting the datatable to various presentation and content needs.</p>
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
        {% include "./common/repo.md" %}
        <tr>
            <td colspan="2"><strong>numVisibleRows</strong></td>
            <td>null</td>
            <td>Integer</td>
            <td>Number of visible rows. If there are more records, the vertical scrollbar will be displayed.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>properties</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Comma-separated list of entity properties to define the set of form fields.</td>
        </tr>
    </tbody>
</table>

<datatable id="datatableProvincia" repo="provinciaRepo" numVisibleRows="5" properties="c_provincia_id, d_provincia">
</datatable>

![Image 1](../img/datatable1.png){: .center }

## 4.8.1 Column
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
        {% include "./common/value.md" %}
        <tr>
            <td colspan="2"><strong>headerText</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Label for the column header.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>filtering</strong></td>
            <td></td>
            <td>Boolean</td>
            <td>If true, the datatable data can be filtered by the value provided in this column.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>ordering</strong></td>
            <td></td>
            <td>Boolean</td>
            <td>If true, the datatable data can be ordered in descending or ascending order by this column.</td>
        </tr>
    </tbody>
</table>

### 4.8.1.1 Filter
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
            <td colspan="2"><strong>property</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Entity field by which to filter.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>matching</strong></td>
            <td></td>
            <td>String</td>
            <td>Relationship type: "eq | le | gt | contains".</td>
        </tr>
        <tr>
            <td colspan="2"><strong>valueExpression</strong></td>
            <td></td>
            <td>String or JEXLExpression</td>
            <td>Value with which the filtering will be performed.</td>
        </tr>
    </tbody>
</table>

### 4.8.1.2 Order
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
            <td colspan="2"><strong>property</strong></td>
            <td></td>
            <td>String</td>
            <td>Entity field by which to order.</td>
        </tr>
    </tbody>
</table>

# 4.8.2 Repofilter
{% include "./common/repofilter.md" %}

    <datatable id="datatableProvincia2" repo="provinciaRepo" numVisibleRows="5">
        <column id="column_c_provincia_id" headerText="Cod. Provincia" filtering="true" ordering="true" value="${entity.c_provincia_id}">
            <filter property="c_provincia_id" matching="contains" valueExpression="${this.column_c_provincia_id}"/>
            <order property="c_provincia_id"/>
        </column>
        <column id="column_d_provincia" headerText="Provincia" filtering="true" ordering="true" value="${entity.d_provincia}">
            <filter property="d_provincia" matching="contains" valueExpression="${this.column_d_provincia}"/>
            <order property="d_provincia"/>
        </column>
    </datatable>

     <datatable id="datatableProvincia3" repo="provinciaRepo" numVisibleRows="5">
        <column headerText="Cod. Provincia" filtering="false" ordering="false" value="${entity.c_provincia_id}"/>
        <column headerText="Provincia" filtering="false" ordering="false" value="${entity.d_provincia}"/>
        <repofilter>
            <le property="c_provincia_id" value="9"/>
        </repofilter>
    </datatable>

![Image 2](../img/datatable2.png){: width="240"} | ![Image 3](../img/datatable3.png){: width="240"} |
