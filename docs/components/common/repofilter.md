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
        {% include "./id.md" %}
   </tbody>
</table>

The `repoFilter` tag has no attributes; the expression is defined by nesting predicate tags such as `and`, `or`.

<ul>
    <li>Operators: EQ, LT, GT, LE, GE, IN, NOT_IN, IS_NULL, NOT_NULL, LIKE, CONTAINS, STARTS_WITH, ENDS_WITH.</li>
    <li>Criteria: and, or</li>
</ul>

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
        {% include "./operators.md" %}
   </tbody>
</table>
