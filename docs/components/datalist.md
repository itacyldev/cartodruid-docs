# 4.9 Datalist
<div style="text-align: justify;">
<p>
Datalist is a list-type component used to organize and present sets of related data.</p> 
<p>Each element in this list, known as "datalistitem," has the capability to contain various elements such as tables, inputs, images, and other components.</p>
<p>This component is associated with a repository defined in "repo," allowing for the direct linking of data.</p>
<p>Additionally, it features the ability to be filtered through the "repofilter" component, providing the capability to display specific data based on predefined filtering criteria.</p>
<p>This versatility allows for the creation of interactive and customizable lists that can incorporate a variety of elements based on the specific requirements of the user interface and application functionality.
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
        {% include "./common/repo.md" %}
    </tbody>
</table>

## 4.9.1 Datalistitem
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
         {% include "./common/id.md" %}
    </tbody>
</table>

## 4.9.2 Repofilter
{% include "./common/repofilter.md" %}

    <datalist id="datalistProvincia" repo="provinciaRepo">
        <datalistitem>
            <table border="0" weigths="30, 70">
                <row>
                    <input label="Cod.: " value="${entity.c_provincia_id}"/>
                    <input label="Provincia" value="${entity.d_provincia}"/>
                </row>
            </table>
        </datalistitem>
        <repofilter>
            <le property="c_provincia_id" value="9"/>
       </repofilter>
    </datalist>

![Image 1](../img/datalist.png){: width="240" .center }

## 4.9.3 Components of datalist-datalistitem
 {% include "./common/components.md" %}
