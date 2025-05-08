### 8.1 Configuración de capa vectorial con múltiples ficheros

En este ejemplo utilizamos un implementador `MultiSqlite` para consultar varias bases de datos de recintos. Con esta configuración, CartoDruid buscará todas las bases de datos con el nombre `recintos_25830_2016_*.sqlite` y mostrará la información como una única capa.

```xml
<entry>
<string>rec_2016</string>
<es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <attributesClassName>es.jcyl.ita.crtdrd.data.MultiSqlite</attributesClassName>
 <id>recintos_2016</id>
 <name>Recintos SIGPAC 2016</name>
 <srs>25830</srs>
 <vectorialType>30</vectorialType>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>2016</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 </sources>
 <symbId>GREGORIO</symbId>
 <range>
 <max>21</max>
 <min>17</min>
 </range>
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

### 8.2 Configuración de capa vectorial con restricciones para la edición

En este caso definimos una capa en la que no queremos que se pueda modificar la información, para ello utilizamos las etiquetas `editable, deletable,` etc. de forma que desaparezcan del menú las opciones de modificación de datos.

```xml
<entry>
<string>rec_2016</string>
<es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <attributesClassName>es.jcyl.ita.crtdrd.data.MultiSqlite</attributesClassName>
 <id>recintos_2016</id>
 <name>Recintos SIGPAC 2016</name>
 <srs>25830</srs>
 <vectorialType>30</vectorialType>
 <sources>
 <es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 <resourceid>recintos</resourceid>
 <srid>25830</srid>
 <version>20160229</version>
 <dataTable>RECINTOS</dataTable>
 <indexTable>idx_RECINTOS_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.RepoSpatiaLiteServiceDescriptor>
 </sources>
 <symbId>GREGORIO</symbId>
<!-- la capa se visualiza en los niveles [17,21] -->
 <range>
 <max>21</max>
 <min>17</min>
 </range>
 <editable>false</editable>
 <deletable>false</deletable>
 <canCreate>false</canCreate>
 <canPaste>false</canPaste>
 <canSanitize>false</canSanitize>
</es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

### 8.3 Definir una etiqueta dinámica

En el texto que se muestra asociado a una geometría en el mapa (etiqueta), CartoDruid por defecto muestra el campo `pk_uid` de la tabla. El valor a mostrar se puede configurar para que se calcule en base a los campos de la capa utilizando una expresión SQL.

Por ejemplo en este caso se mostraría el valor del campo "variedad".

```xml
<labelExpression>variedad</labelExpression>
```

Pero también podemos aplicar funciones para que este valor se calcule en función de diferentes. En este caso se utilizará como etiqueta de la geometría del municipio el código y su descripción separados por un valor.

```xml
<labelExpression>cod_municipio || '-' || desc_municipio</labelExpression>
```

### 8.4 Cambiar la vista de identificación de una entidad.

En este caso vamos a determinar qué campos queremos mostrar en el formulario de identificación, para ello podemos definir una expresión SQL directamente en la etiqueta `<sqlIdentify>`.

Por ejemplo, en este caso, mostramos un campo numérico formateado a 2 decimales y añadimos al final el texto "%".

```xml
<sqlIdentify>*, ROUND(cobertura,2) || '%' as cobertura</sqlIdentify>
```

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p>La etiqueta <code>sqlIdentity</code> sobrescribe la forma en que CartoDruid muestra la información de la entidad, por ello, la configuración anterior añade <strong>"*"</strong> al principio, para que se muestren todos los campos de la entidad y al final se añada el nuevo campo.</p>
      <p>Si queremos mostrar solo una parte de los campos, podemos seleccionarlos directamente con la expresión SQL. En este caso solo mostramos cuatro campos al identificar:</p>
      <p><code>&lt;sqlIdentify&gt;codigo, variedad, ROUND(cobertura,2)|| '%' as cobertura&lt;/sqlIdentify&gt;</code></p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_4.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

### 8.5 Cambiar la vista de la lista de entidades.

De igual forma que `sqlIdentify` permite modificar la información a mostrar al identificar una entidad, `sqlAsListView` permite modificar la presentación del listado de entidades.

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p>Introduciendo la expresión del ejemplo anterior, veremos que en el listado solo se muestran las cuatro columnas seleccionadas.</p>
      <p><code>&lt;sqlAsListView&gt;
codigo, variedad, ROUND(cobertura,2)|| '%' as cobertura
&lt;/sqlAsListView&gt;</code></p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_5_1.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

De forma similar, podemos mostrar información en el listado (o en la identificación) de una tabla relacionada incluyendo una subquery como parte de la expresión.

<table>
  <tr>
    <td style="width: 55%; vertical-align: top;">
      <p><code>&lt;sqlAsListView&gt;
*, (select nombre || ' ' || apellidos 
from propietario p 
where p.pk_uid = r.propietario_id) 
as propietario 
&lt;/sqlAsListView&gt;</code></p>
      <p>Con la expresión anterior, añadimos una consulta para calcular el campo <code>propietario</code> obteniéndolo de una tabla <code>Propietario</code> que existe en la misma BD que la tabla de la capa.</p>
      <p>CartoDruid establece <strong>"r"</strong> como alias de la tabla actual, por lo que se puede utilizar este alias para hacer el join en la subconsulta.</p>
    </td>
    <td style="width: 45%; vertical-align: top;">
      <img src="../../img/casos/casos_practicos_8_5_2.png" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>

## 8.6 Configurar filtros reutilizables para una capa

A la hora de trabajar con un proyecto es común tener una serie de filtros reutilizables para mostrar distintos grupos de información.

CartoDruid permite definir estos filtrados a nivel de capa estableciendo lo que habitualmente se conoce como definition queries. Para ello, definimos el fichero `cartodroid/values/<ID_DE_CAPA>DefinitionQueries.properties`.

El fichero contendrá el nombre que aparecerá en el desplegable de filtros y la definition query que se establecerá. Por ejemplo si establecemos el fichero `/cartodroid/values/plantacionesDefinitionQueries.properties` el siguiente contenido:
```
Cobertura >10% = cobertura>0.1
Cobertura >20% = cobertura>0.2
```

Veremos que en las opciones de filtrado de la capa aparece un desplegable de "Filtros más usados", y al abrirlo aparecerán las opciones incluidas en el fichero.

<table>
  <tr>
    <td style="width: 33%;">
      <img src="../../img/casos/casos_practicos_8_6_1.png" style="width: 100%; height: auto;">
    </td>
    <td style="width: 33%;">
      <img src="../../img/casos/casos_practicos_8_6_2.png" style="width: 100%; height: auto;">
    </td>
   </tr>
</table>

En definitiva el texto introducido en el fichero de definition queries, se aplica directamente a la cláusula where de la consulta de las entidades, por lo que se pueden hacer consultas más complejas, que por ejemplo apliquen expresiones booleanas sobre los campos:
```
Condicion especial=(variedad = 'PA' and sistcond = 'V') or (variedad = 'VE' and marco1 >= 3)
```

O cruzar con otra tabla para establecer la condición en base a campos de la tabla referida, por ejemplo para mostrar solo las parcelas de los propietarios asociados:
```
Asociados=exists(select 1 from propietario p where p.pk_uid = r.propietario_id and p.asociado = 'S')
```

### 8.7 Configurar nombres de las imágenes tomadas con CartoDruid

Es posible configurar los nombres de las imágenes de las entidades mediante una expresión SQL sobre la entidad. Para ello, se puede usar la etiqueta `<labelPictureExpression>`, esta etiqueta define el prefijo que se asociará al archivo de la imagen.
```xml
<labelPictureExpression>pk_uid||'-'||c_refrec</labelPictureExpression>
```

### 8.8 Simbolización de entidades por expresión

En este caso utilizamos el atributo `symbologyExpression` para calcular el estilo que se debe aplicar a cada entidad en función del valor variedad.

```xml
<entry>
 <string>insp</string>
 <es.jcyl.ita.crtcyl.core.model.VectorialLayer>
 <id>insp</id>
 <nombre>CAP</nombre>
 <descripcion>CAP 2015</descripcion>
 <vectorialType>30</vectorialType>
 <simbologia>REBECA</simbologia>
 <origenes>
 <es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 <dbURL>dorueda.sqlite</dbURL>
 <dataTable>plantaciones</dataTable>
 <indexTable>idx_plantaciones_Geometry</indexTable>
 </es.jcyl.ita.crtcyl.client.dao.source.SpatiaLiteServiceDescriptor>
 </origenes>
 <rango>
 <max>21</max>
 <min>0</min>
 </rango>
 <srs>25830</srs>
 <attributesClassName>es.jcyl.ita.crtdrd.data.DefaultSqlite</attributesClassName>
<!-- la etiqueta para la entidad será el código de variedad -->
 <labelExpression>variedad</labelExpression>
 <symbologyExpression>case when variedad = 'PA' then 'ALICIA' 
 when variedad = 'VI' then 'CARLA' 
 when variedad = 'VE' then 'CAMILO' 
 when variedad = 'TE' then 'ANA' 
 when variedad = 'SA' then 'JUAN' 
 when variedad = 'GA' then 'JAIME' 
 when variedad = 'CA' then 'IRENE' 
 when variedad = 'ME' then 'SOFIA' 
 else 'REBECA' end</symbologyExpression>
 </es.jcyl.ita.crtcyl.core.model.VectorialLayer>
</entry>
```

Este sería el resultado, una capa en la que las geometrías se muestran con distinta apariencia en función del atributo "variedad".

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/casos/casos_practicos_8_8.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
  </table>
</div>

### 8.9 Cambiar los markers por defecto de las simbologías puntuales

Es posible modificar la simbología por defecto de los markers (entidades puntuales).

Para ello, se debe meter el icono deseado en el directorio symbol del directorio CartoDruid del dispositivo, y configurar la simbología puntual de la siguiente manera en el archivo `crtdrdSymbologies*.xml`.

```xml
<symbologyConf>
<estilos>
<entry>
 <string>symbTopilloOK</string>
 <estilo class="estiloMarca">
 <id>symbTopilloOK</id>
 <urlImagen>topillo_ok.png</urlImagen>
 <transparencia>1.0</transparencia>
 <color>
 <rgb>0,255,255,255</rgb>
 </color>
 </estilo>
</entry>
</estilos>
<simbologias>
<entry>
 <string>symbTopilloOK</string>
 <symb class="punto">
 <id>symbTopilloOK</id>
 <idEstiloPunto>symbTopilloOK</idEstiloPunto>
 </symb>
</entry>
</simbologias>
</symbologyConf>
```

### 8.10 Mostrar puntas de flecha en las entidades lineales

Para mostrar puntas de flecha en las entidades lineales (para marcar el sentido de grabación), se debe añadir la siguiente etiqueta en la capa:
```xml
<showArrowHeads>true</showArrowHeads>
```


