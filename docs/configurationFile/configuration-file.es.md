# 3. Fichero de configuración: repos.xml
<div style="text-align: justify;">
<p>
Fichero de configuración del repositorio. Una vez tenemos definida nuestra/s base/s de datos de la aplicación, fichero/s *.sqlite en el directorio data, necesitamos un fichero de configuración del repositorio.
</p>
</div>
Ejemplo: <u>/data/repos.xml</u>

    <repos>
        <repo dbFile="inspeccionesvinedo.sqlite" id="variedadRepo" dbTable="variedad"/>
        <repo dbFile="inspeccionesvinedo.sqlite" id="tipoPlagaRepo" dbTable="tipo_plaga"/>
        <repo dbFile="inspeccionesvinedo.sqlite" id="severidadRepo" dbTable="severidad" >
            <mapping fk="tipo_plaga_id" property="tipoPlaga" repo="tipoPlagaRepo"/>
        </repo>
        <repo dbFile="inspeccionesvinedo.sqlite" id="provinciaRepo" dbTable="provincia" />
        <repo dbFile="inspeccionesvinedo.sqlite" id="municipioRepo" dbTable="municipio">
            <mapping fk="c_provincia_id" property="provincia" repo="provinciaRepo"/>
        </repo>
    
        <repo dbFile="inspeccionesvinedo.sqlite" id="plagaRepo" dbTable="plaga">
            <meta properties="all">
                <property name="location" columnName="location" converter="string" calculated="jexl" expression="${location.asWKT}" evalOn="insert"/>
                <property name="f_actuacion" converter="date" pattern="seconds" evalOn="update" expression="${date.now}" />
                <keyGenerator type="numericUUID"/>
            </meta>
            <mapping fk="variedad_id" property="variedad" repo="variedadRepo"/>
            <mapping fk="tipo_plaga_id" property="tipoPlaga" repo="tipoPlagaRepo"/>
            <mapping fk="severidad_id" property="severidad" repo="severidadRepo"/>
    
        </repo>
        <repo dbFile="inspeccionesvinedo.sqlite" id="plagaImagesRepo" dbTable="plaga_foto">
            <meta>
                <keyGenerator type="numericUUID"/>
                <property name="f_actuacion" converter="date" pattern="seconds" evalOn="update" expression="${date.now}" />
            </meta>
            <mapping fk="plaga_id" property="plaga" repo="plagaRepo"/>
        </repo>
    
        <filerepo defaultExtension="jpg" folder="pictures/estado_fen" id="estadoFenImages" />
        
    </repos>

Base de datos: <u>/data/inspeccionesvinedo.sqlite</u>
   
    CREATE TABLE "variedad" (
        variedad_id integer primary key AUTOINCREMENT,
        nombre text
    );

    CREATE TABLE "tipo_plaga" (
        tipo_plaga_id TEXT primary key,
        tipo_plaga TEXT
    );

    CREATE TABLE "severidad" (
        severidad_id  INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_plaga_id INTEGER,
        codigo_severidad INTEGER,
        descripcion_severidad TEXT,
        FOREIGN KEY(tipo_plaga_id) REFERENCES tipo_plaga(tipo_plaga_id)
    );

    CREATE TABLE "provincia"(
        "c_provincia_id" INTEGER PRIMARY KEY,
        "d_provincia" TEXT,
        "c_orden_provincia" INTEGER
    );
    
    CREATE TABLE "municipio"(
        "c_municipio" TEXT,
        "c_provmuni_id" TEXT PRIMARY KEY,
        "c_provincia_id" INTEGER,
        "d_nombre" TEXT,
        FOREIGN KEY(c_provincia_id) REFERENCES provincia(c_provincia_id)
    );

    CREATE TABLE plaga (
        plaga_id INTEGER PRIMARY KEY,
        tipo_plaga_id TEXT,
        ref_sigpac TEXT,
        estado_fenologico_id TEXT,
        observaciones TEXT,
        location TEXT, 
        fecha_inspeccion TEXT, 
        variedad_id INTEGER,
        severidad_id INTEGER,
        f_actuacion INTEGER,
        f_sincro INTEGER,
        FOREIGN KEY(variedad_id) REFERENCES variedad(variedad_id),
        FOREIGN KEY(severidad_id) REFERENCES severidad(severidad_id),
        FOREIGN KEY(tipo_plaga_id) REFERENCES tipo_plaga(tipo_plaga_id)
    );

    CREATE TABLE plaga_foto (
        plaga_foto_id INTEGER PRIMARY KEY,
        plaga_id INTEGER,
        image TEXT,
        f_actuacion INTEGER,
        f_sincro INTEGER,
        FOREIGN KEY(plaga_id) REFERENCES plaga(plaga_id)
    );

## 3.1 Tag repo

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
            <td style="text-align: justify;">Identificador único del componente, si no está definido, se utilizará el nombre del archivo base. Este identificador es el que vamos a usar en los formularios para indicar sobre qué tabla (dbTable) de la base de datos (dbFile) vamos a tomar los datos o guardar los datos del componente del formulario.</td>
        </tr>    
		<tr>
            <td><strong>dbFile</strong></td>
            <td style="text-align: justify;">Hace referencia a la base de datos, fichero *.sqlite de la carpeta /data.</td>
        </tr>  
		<tr>
            <td><strong>dbTable</strong></td>
            <td style="text-align: justify;">Tabla como base para consultar/almacenar entidades.</td>
        </tr>  
    </tbody>
</table>


    <repo dbFile="inspeccionesvinedo.sqlite" id="variedadRepo" dbTable="variedad"/>

### 3.1.1 Tag mapping

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
            <td style="text-align: justify;">Identificador único del componente, si no está definido, se utilizará el nombre del archivo base. Este identificador es el que vamos a usar en los formularios para indicar sobre qué tabla (dbTable) de la base de datos (dbFile) vamos a tomar los datos o guardar los datos del componente del formulario.</td>
        </tr>    
		<tr>
            <td><strong>fk</strong></td>
            <td style="text-align: justify;">Clave foránea.</td>
        </tr>  
		<tr>
            <td><strong>property</strong></td>
            <td style="text-align: justify;">Nombre de la propiedad de la entidad principal en la que se almacenará la entidad relacionada.</td>
        </tr>  
        <tr>
            <td><strong>repo</strong></td>
            <td style="text-align: justify;">Identificador del repositorio.</td>
        </tr>  
        <tr>
            <td><strong>insertable</strong></td>
            <td style="text-align: justify;">Por defecto=verdadero. Si es true, cuando se inserta la entidad principal, también se inserta la entidad relacionada.</td>
        </tr>  
        <tr>
            <td><strong>updatable</strong></td>
            <td style="text-align: justify;">Por defecto=verdadero. Si es true, cuando se almacena la entidad principal, también se actualiza la entidad relacionada.</td>
        </tr>  
        <tr>
            <td><strong>deletable</strong></td>
            <td style="text-align: justify;">Por defecto=false. Si es true, cuando se elimina la entidad principal, se elimina la entidad relacionada.</td>
        </tr>  
    </tbody>
</table>

     <mapping fk="c_provincia_id" property="provincia" repo="provinciaRepo"/>

### 3.1.2 Tag meta

#### 3.1.2.1 Tag keyGenerator
<table border="1">
    <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>type</strong></td>
            <td style="text-align: justify;">Estrategia de generación de clave de entidad. Posibles valores: 
                <ul>
                    <li><em>MAXROWID</em>: La nueva clave para la entidad será el valor máximo de rowid incrementado en 1.</li>
                </ul>
                <ul>
                    <li><em>TIMESTAMP</em>: La nueva clave para la entidad será la fecha actual en formato timestamp.</li>
                </ul>
                <ul>
                    <li><em>UUID</em>: La nueva clave para la entidad se generará usando UUID.</li>
                </ul>
                <ul>
                    <li><em>NUMERICUUID</em>: La nueva clave para la entidad será la fecha actual en formato timestamp concatenado con 5 dígitos aleatorios.</li>
                </ul>
            </td>
        </tr>    
    </tbody>
</table>

    <keyGenerator type="numericUUID"/>

#### 3.1.2.2 Tag property
<table border="1">
    <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>name</strong></td>
            <td style="text-align: justify;">Nombre de la propiedad de la entidad.</td>
        </tr>    
        <tr>
            <td><strong>expression</strong></td>
            <td style="text-align: justify;"></td>
        </tr>  
        <tr>
            <td><strong>columnName</strong></td>
            <td style="text-align: justify;">Nombre de la propiedad de la entidad.</td>
        </tr>
        <tr>
            <td><strong>expressionType</strong></td>
            <td style="text-align: justify;">Tipo utilizado para representar el valor de columna recuperado.</td>
        </tr>
        <tr>
            <td><strong>converter</strong></td>
            <td style="text-align: justify;">Instancia del conversor a aplicar a la propiedad de la entidad.</td>
        </tr>
        <tr>
            <td><strong>evalOn</strong></td>
            <td style="text-align: justify;">select,insert,update</td>
        </tr>
        <tr>
            <td><strong>calculated</strong></td>
            <td style="text-align: justify;">jext|sql</td>
        </tr>
        <tr>
            <td><strong>pattern</strong></td>
            <td style="text-align: justify;">Patrón para convertir los valores calculados (sólo los calculados) antes de insertarlos en la BD.</td>
        </tr>
    </tbody>
</table>

    <property name="f_actuacion" converter="date" pattern="seconds" evalOn="update" expression="${date.now}" />

## 3.2 Tag filerepo
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
            <td style="text-align: justify;">Identificador único del componente.</td>
        </tr>
        <tr>
            <td><strong>folder</strong></td>
            <td style="text-align: justify;">Carpeta base que contiene las imágenes del repositorio. Si es relativa, la url se interpreta desde la carpeta del proyecto.</td>
        </tr>
        <tr>
            <td><strong>defaultExtension</strong></td>
            <td style="text-align: justify;">Extensión por defecto</td>
        </tr>
    </tbody>
</table>


    <filerepo defaultExtension="jpg" folder="pictures/estado_fen" id="estadoFenImages" />
