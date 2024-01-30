<div style="text-align: justify;">
<p>
Repository configuration file. Once we have defined our application's database(s), represented by *.sqlite file(s) in the data directory, we need a repository configuration file.
</p>
</div>
Example: <u>/data/repos.xml</u>

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

Database: <u>/data/inspeccionesvinedo.sqlite</u>
   
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
            <th>Attribute</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>id</strong></td>
            <td style="text-align: justify;">Unique identifier for the component. If not defined, the base filename will be used. This identifier is used in forms to specify which table (dbTable) from the database (dbFile) the form component will use to retrieve or store data.</td>
        </tr>    
		<tr>
            <td><strong>dbFile</strong></td>
            <td style="text-align: justify;">References the database, *.sqlite file in the /data folder.</td>
        </tr>  
		<tr>
            <td><strong>dbTable</strong></td>
            <td style="text-align: justify;">Table serving as a base to query/store entities.</td>
        </tr>  
    </tbody>
</table>


    <repo dbFile="inspeccionesvinedo.sqlite" id="variedadRepo" dbTable="variedad"/>

### 3.1.1 Tag mapping

<table border="1">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>id</strong></td>
            <td style="text-align: justify;">Unique identifier for the component. If not defined, the base filename will be used. This identifier is used in forms to specify which table (dbTable) from the database (dbFile) the form component will use to retrieve or store data.</td>
        </tr>    
		<tr>
            <td><strong>fk</strong></td>
            <td style="text-align: justify;">Foreign key.</td>
        </tr>  
		<tr>
            <td><strong>property</strong></td>
            <td style="text-align: justify;">Name of the property of the main entity where the related entity will be stored.</td>
        </tr>  
        <tr>
            <td><strong>repo</strong></td>
            <td style="text-align: justify;">Repository identifier.</td>
        </tr>  
        <tr>
            <td><strong>insertable</strong></td>
            <td style="text-align: justify;">Default=true. If true, when the main entity is inserted, the related entity is also inserted.</td>
        </tr>  
        <tr>
            <td><strong>updatable</strong></td>
            <td style="text-align: justify;">Default=true. If true, when the main entity is stored, the related entity is also updated.</td>
        </tr>  
        <tr>
            <td><strong>deletable</strong></td>
            <td style="text-align: justify;">Default=false. If true, when the main entity is deleted, the related entity is also deleted.</td>
        </tr>  
    </tbody>
</table>

     <mapping fk="c_provincia_id" property="provincia" repo="provinciaRepo"/>

### 3.1.2 Tag meta

#### 3.1.2.1 Tag keyGenerator
<table border="1">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>type</strong></td>
            <td style="text-align: justify;">Entity key generation strategy. Possible values: 
                <ul>
                    <li><em>MAXROWID</em>: The new key for the entity will be the maximum value of rowid incremented by 1.</li>
                </ul>
                <ul>
                    <li><em>TIMESTAMP</em>: The new key for the entity will be the current date in timestamp format.</li>
                </ul>
                <ul>
                    <li><em>UUID</em>: The new key for the entity will be generated using UUID.</li>
                </ul>
                <ul>
                    <li><em>NUMERICUUID</em>: The new key for the entity will be the current date in timestamp format concatenated with 5 random digits.</li>
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
            <th>Attribute</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>name</strong></td>
            <td style="text-align: justify;">Property name of the entity.</td>
        </tr>    
        <tr>
            <td><strong>expression</strong></td>
            <td style="text-align: justify;"></td>
        </tr>  
        <tr>
            <td><strong>columnName</strong></td>
            <td style="text-align: justify;">Property name of the entity.</td>
        </tr>
        <tr>
            <td><strong>expressionType</strong></td>
            <td style="text-align: justify;">Type used to represent the retrieved column value.</td>
        </tr>
        <tr>
            <td><strong>converter</strong></td>
            <td style="text-align: justify;">Instance of the converter to apply to the entity's property.</td>
        </tr>
        <tr>
            <td><strong>evalOn</strong></td>
            <td style="text-align: justify;">select, insert, update</td>
        </tr>
        <tr>
            <td><strong>calculated</strong></td>
            <td style="text-align: justify;">jext|sql</td>
        </tr>
        <tr>
            <td><strong>pattern</strong></td>
            <td style="text-align: justify;">Pattern to convert calculated values (only calculated ones) before inserting them into the database.</td>
        </tr>
    </tbody>

</table>

    <property name="f_actuacion" converter="date" pattern="seconds" evalOn="update" expression="${date.now}" />

## 3.2 Tag filerepo
<table border="1">
    <thead>
        <tr>
            <th>Attribute</th>
            <th>Description</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>id</strong></td>
            <td style="text-align: justify;">Unique identifier for the component.</td>
        </tr>
        <tr>
            <td><strong>folder</strong></td>
            <td style="text-align: justify;">Base folder containing the repository's images. If relative, the URL is interpreted from the project's folder.</td>
        </tr>
        <tr>
            <td><strong>defaultExtension</strong></td>
            <td style="text-align: justify;">Default extension</td>
        </tr>
    </tbody>
</table>

    <filerepo defaultExtension="jpg" folder="pictures/estado_fen" id="estadoFenImages" />
