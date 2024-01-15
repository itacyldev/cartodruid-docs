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
        {% include "./id.es.md" %}
   </tbody>
</table>

La etiqueta repoFilter no tiene atributos, la expresión se define anidando etiquetas de predicado como and|or|.
<ul>
<li>Operadores: EQ, LT, GT, LE, GE, IN, NOT_IN, IS_NULL, NOT_NULL, LIKE, CONTAINS, STARTS_WITH, ENDS_WITH.</li>
<li>Criterios: and, or</li>
</ul>
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
        {% include "./operators.es.md" %}
   </tbody>
</table>