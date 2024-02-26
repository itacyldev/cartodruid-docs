# 2. Estructura del proyecto
<div style="text-align: justify;">
<p>Basada en el principio de <strong>Convention over Configuration</strong> para poder obtener 
una solución de prototipado rápida y sencilla.</p>

<p>Contenido de la carpeta del proyecto:</p>
</div>
<table border="1">
    <tbody>
        <tr>
            <td rowspan="3"><strong>/data/</strong></td>
            <td colspan="2">Contiene los xml de configuración de los repositorios y los ficheros de BDs y ficheros de datos o propiedades del proyecto (repositorios).</td>
        </tr>
        <tr>
            <td><strong>/data/repos.xml</strong></td>
            <td>Configuración de repositorios del proyecto.</td>
        </tr>
        <tr>
            <td><strong>/data/*.sqlite</strong></td>
            <td>Ficheros de base de datos.</td>
        </tr>
        <tr>
            <td rowspan="2"><strong>/forms/</strong></td>
            <td><strong>/forms/*.xml</strong></td>
            <td>Ficheros xml de configuración de formularios.</td>
        </tr>
        <tr>
            <td><strong>/forms/scripts/*.js</strong></td>
            <td>Ficheros *.js con las funciones javascript.</td>
        </tr>
        <tr>
            <td rowspan="2"><strong>/jobs/</strong></td>
            <td><strong>/jobs/*.json</strong></td>
            <td>Ficheros json de tareas que se invocarán desde los formularios, como por ejemplo generación de documentación.</td>
        </tr>
  </tbody>
</table>

