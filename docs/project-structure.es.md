##  Estructura del proyecto

Contenido de la carpeta del proyecto:

<table border="1">
    <tbody>
        <tr>
            <td rowspan="3"><strong>/data/</strong></td>
            <td colspan="2">Contiene los xml de configuración de los repositorios y los ficheros de BDs y ficheros de datos o propiedades del proyecto (repositorios).</td>
        </tr>
        <tr>
            <td><strong>/data/repos.xml</strong></td>
            <td>Configuración de repositorios del proyecto</td>
        </tr>
        <tr>
            <td><strong>/data/ejemplo.sqlite</strong></td>
            <td>Fichero de base de datos</td>
        </tr>
        <tr>
            <td><strong>/forms/</strong></td>
            <td colspan="2">Carpeta con los ficheros xml de configuración de formularios.</td>
        </tr>
        <tr>
            <td><strong>/jobs/</strong></td>
            <td colspan="2">Carpeta con los ficheros json de tareas que se invocarán desde los formularios, como por ejemplo generación de documentación.</td>
        </tr>
  </tbody>
</table>

####  repos.xml

Fichero de configuración del repositorio.

<table border="1">
    <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>id</strong></td>
            <td>Identificador único del componente, si no está definido, se utilizará el nombre del archivo base. Este identificador es el que vamos a usar en los formularios para indicar sobre qué tabla (dbTable) de la base de datos (dbFile) vamos a tomar los datos o guardar los datos del componente del formulario.</td>
        </tr>    
		<tr>
            <td><strong>dbFile</strong></td>
            <td>Hace referencia a la base de datos, fichero *.sqlite de la carpeta /data.</td>
        </tr>  
		<tr>
            <td><strong>dbTable</strong></td>
            <td>Tabla como base para consultar/almacenar entidades.</td>
        </tr>  
    </tbody>

</table>

Ejemplo:

<repos>

    <repo dbFile="dbTest.sqlite" dbTable="provincia" id="provRepo" />
    <repo dbFile="dbTest.sqlite" dbTable="municipio" id="muniRepo" />
    <repo dbFile="dbTest.sqlite" dbTable="contacts" id="contacts" />
    <repo dbFile="dbTest.sqlite" dbTable="assigned_agents" id="agentsRepo">
        <mapping fk="${entity.provmuni.substring(0,2)}" property="provincia" repo="provRepo" />
        <mapping fk="provmuni" property="municipio" repo="muniRepo" />
    </repo>
    <repo dbFile="pruebas.sqlite" dbTable="pruebas" id="prue" />
    <repo dbFile="pruebas.sqlite" dbTable="autocompletado" id="autocompletado" />

    <!-- sups -->
    <repo dbFile="dbTest.sqlite" dbTable="superheroes" id="superHRepo">
        <meta>
            <property name="creation_date" converter="date" evalOn="insert"
                expression="${date.now}" />
            <property name="update_date" converter="date" evalOn="update"
                expression="${date.now}" />
            <property name="current_time" converter="date" evalOn="select"
                expression="${date.now}" />
        </meta>
    </repo>
    <repo dbFile="dbTest.sqlite" dbTable="super_relation" id="superRelRepo">
        <mapping fk="other_id" property="other" repo="superHRepo" insertable="false" updatable="false" />
    </repo>
    <filerepo defaultExtension="jpg" folder="pictures/superheroes" id="superHImages" />
    <repo dbFile="dbTest.sqlite" dbTable="superheroes" id="superHImagesDBRepo"/>
    <memorepo id="resumenIncis" properties="f1,f2,f3"/>
</repos>
