CartoDruid permite definir la visualización que se le quiere dar a un formulario, y definir reglas para determinar qué campos puede editar el usuario o qué reglas de validación aplicar.

Para poder crear un formulario de edición alfanumérica propio para una capa es necesario establecer el atributo <code>alphaEditFinisher</code> de la capa como sigue:

```xml
<alphaEditFinisher>userFormAlphaEditFinisher</alphaEditFinisher>
```

Estableciendo este parámetro, CartoDruid buscará dentro de la carpeta <code>cartodroid/values</code> un fichero con el nombre <code>identificadordecapa_AlphaEdit.xml</code>. Por ejemplo, para configurar un formulario para la capa "aforos", habrá que crear un XML <code>cartodroid/values/aforos_AlphaEdit.xml</code>.

Nota: el fichero se almacena en un sistema de ficheros Android que es sensible a minúsculas/mayúsculas, el nombre del fichero debe empezar con exactamente el identificador de la capa, luego si la capa se ha identificado como INSPECCIONES, el fichero debe llamarse <code>INSPECCIONES_AlphaEdit.xml</code>.

### 7.1 Estructura general del fichero

El XML de configuración del formulario tendrá la siguiente organización:

* Formulario (<code>&lt;form&gt;</code>): pantalla de edición alfanumérica
  * Grupo de pestañas (<code>&lt;tabs&gt;</code>), y para cada pestaña anidada (<code>&lt;tab&gt;</code>):
    * Grupo de campos de la pestaña (<code>&lt;fields&gt;</code>), y dentro de ésta, por cada campo a mostrar, tendremos una etiqueta <code>&lt;field&gt;</code>.

Un ejemplo de la organización del fichero XML:

```xml
<form>
 <id>aforosForm</id>
 <name>Aforos (Edición)</name> <!-- nombre a mostrar como título de pantalla -->
 <tabs class="linked-list">
 <tab>
 <id>tab1</id>
 <name>Edición</name> <!-- nombre de la pestaña -->
 <fields class="linked-list">
 <field>
 …
 </field>
 …
 </fields>
 </tab>
 …
 </tabs>
</form>
```

### 7.2 Configuración de campos del formulario

<table class="bordered">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>Identificador único del campo.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>Nombre que se mostrará para el campo.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Tipo de campo, puede ser <code>TEXT</code>, <code>DROPDOWN</code>, <code>DATE</code>, <code>BOOLEAN</code>, <code>SEPARATOR</code>, <code>INFO</code>, <code>SIGN</code>. <br>Nota: el tipo <code>COMBO</code> ha desaparecido en favor de <code>DROPDOWN</code>.</td>
    </tr>
    <tr>
      <td>inputType</td>
      <td>Tipo de componente del campo <code>TEXT</code>: configurable en función de <a href="http://developer.android.com/reference/android/text/InputType.html" target="_blank">http://developer.android.com/reference/android/text/InputType.html</a>. <br><br>Por ejemplo, para configurar un campo numérico, con signo y decimal, se pondría <code>12290</code> (2 + 4096 + 8192), equivalente a sumar: <br>• <code>InputType.TYPE_CLASS_NUMBER</code> (2) <br>• <code>InputType.TYPE_NUMBER_FLAG_SIGNED</code> (4096) <br>• <code>InputType.TYPE_NUMBER_FLAG_DECIMAL</code> (8192)
      <br><br>
  Para configurar un <code>textarea</code> se utilizaría el número <code>131073</code> (1 + 131072).</td>
    </tr>
    <tr>
      <td>regexp</td>
      <td>Expresión regular que debe cumplir el valor introducido por el usuario para validar correctamente. Solo aplicable a campos de tipo <code>TEXT</code>. Útil para validar valores numéricos, emails, teléfonos, etc.</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>Texto de ayuda para rellenar el campo.</td>
    </tr>
    <tr>
      <td>extendedHint</td>
      <td>Texto extendido de ayuda para rellenar el campo.</td>
    </tr>
    <tr>
      <td>persistedField</td>
      <td>Nombre del campo de la base de datos que se utilizará para mostrar o almacenar la información.</td>
    </tr>
    <tr>
      <td>required</td>
      <td>Indica si el campo es obligatorio. Si está en <code>true</code>, no se guardarán los datos hasta rellenarlo. Si no se incluye, su valor por defecto es <code>false</code>.</td>
    </tr>
    <tr>
      <td>deletable</td>
      <td>Indica si se permite al usuario eliminar el valor del campo.</td>
    </tr>
    <tr>
      <td>editable</td>
      <td>Indica si el campo es editable.</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>Valor por defecto del campo: <br>• Para campos de tipo <code>TEXT</code>: un texto <br>• Para <code>DROPDOWN</code>: el código del combo (ej: <code>'VI'</code> para 'Viñedo') <br>• Para <code>DATE</code>: con el formato <code>'dd/MM/yyyy'</code> <br>• Para <code>BOOLEAN</code>: <code>'true'</code> o <code>'false'</code> (cualquier otro valor se interpreta como <code>false</code>)</td>
    </tr>
    <tr>
      <td>choices</td>
      <td>Permite definir una lista de <code>&lt;items&gt;</code> de un desplegable asociado al campo. Cada ítem contiene un <code>key</code> (código) y un <code>value</code> (descripción). Ver ejemplo más adelante.</td>
    </tr>
    <tr>
      <td>choicesByFile</td>
      <td>Identifica el fichero que contiene los valores del desplegable. Debe estar en la ruta <code>/cartodroid/values</code>.</td>
    </tr>
    <tr>
      <td>choicesByQuery</td>
      <td>Consulta SQL para cargar los valores del desplegable. Se debe indicar el fichero de base de datos con <code>&lt;dbFile&gt;</code> (ruta relativa o absoluta) y la consulta con <code>&lt;query&gt;</code>.</td>
    </tr>
  </tbody>
</table>

<p><strong>Ejemplos de configuración del campo <code>inputType</code> en función del texto a recoger:</strong></p>

<table class="bordered">
  <thead>
    <tr>
      <th style="text-align:left;">Campo típico</th>
      <th>Constantes usadas</th>
      <th style="text-align:right;">Valor entero</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left;"><strong>Texto multilínea</strong> (textarea)</td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_FLAG_MULTI_LINE (131072)</code></td>
      <td style="text-align:right;"><strong>131073</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Número entero</strong></td>
      <td><code>TYPE_CLASS_NUMBER (2)</code></td>
      <td style="text-align:right;"><strong>2</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Número con signo y decimales</strong></td>
      <td><code>TYPE_CLASS_NUMBER (2)</code> + <code>TYPE_NUMBER_FLAG_SIGNED (4096)</code> + <code>TYPE_NUMBER_FLAG_DECIMAL (8192)</code></td>
      <td style="text-align:right;"><strong>12290</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Teléfono</strong></td>
      <td><code>TYPE_CLASS_PHONE (3)</code></td>
      <td style="text-align:right;"><strong>3</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Email</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_VARIATION_EMAIL_ADDRESS (32)</code></td>
      <td style="text-align:right;"><strong>33</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>URL</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_VARIATION_URI (16)</code></td>
      <td style="text-align:right;"><strong>17</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Contraseña (texto)</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_VARIATION_PASSWORD (128)</code></td>
      <td style="text-align:right;"><strong>129</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Contraseña visible temporalmente</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_VARIATION_VISIBLE_PASSWORD (144)</code></td>
      <td style="text-align:right;"><strong>145</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Contraseña numérica (PIN)</strong></td>
      <td><code>TYPE_CLASS_NUMBER (2)</code> + <code>TYPE_NUMBER_VARIATION_PASSWORD (16)</code></td>
      <td style="text-align:right;"><strong>18</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Nombre propio</strong> (capitalización de palabras)</td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_FLAG_CAP_WORDS (8192)</code></td>
      <td style="text-align:right;"><strong>8193</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Texto con autocorrección</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_FLAG_AUTO_CORRECT (32768)</code></td>
      <td style="text-align:right;"><strong>32769</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Texto con sugerencias desactivadas</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_FLAG_NO_SUGGESTIONS (524288)</code></td>
      <td style="text-align:right;"><strong>524289</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Campo de fecha</strong></td>
      <td><code>TYPE_CLASS_DATETIME (4)</code> + <code>TYPE_DATETIME_VARIATION_DATE (16)</code></td>
      <td style="text-align:right;"><strong>20</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Campo de hora</strong></td>
      <td><code>TYPE_CLASS_DATETIME (4)</code> + <code>TYPE_DATETIME_VARIATION_TIME (32)</code></td>
      <td style="text-align:right;"><strong>36</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Número con decimales (sin signo)</strong></td>
      <td><code>TYPE_CLASS_NUMBER (2)</code> + <code>TYPE_NUMBER_FLAG_DECIMAL (8192)</code></td>
      <td style="text-align:right;"><strong>8194</strong></td>
    </tr>
    <tr>
      <td style="text-align:left;"><strong>Código / NIF en mayúsculas</strong></td>
      <td><code>TYPE_CLASS_TEXT (1)</code> + <code>TYPE_TEXT_FLAG_CAP_CHARACTERS (4096)</code> + <code>TYPE_TEXT_FLAG_NO_SUGGESTIONS (524288)</code></td>
      <td style="text-align:right;"><strong>528385</strong></td>
    </tr>
  </tbody>
</table>

<strong>Nota</strong>: Utilizando el tipo <code>SEPARATOR</code> es posible crear cabeceras intermedias para los datos, o bien vacías (una línea horizontal), o bien con un texto (rellenando el atributo <code>name</code>).

#### 7.2.1 Definición de pestañas en el formulario

El siguiente trozo de código define tres pestañas vacías, el usuario podrá moverse de una a otra desplazando lateralmente la pantalla.

```xml
<form>
 <id>dopfigurasForm</id>
 <name>Inspecciones DOP/IGP</name>
 <tabs class="linked-list">
 <tab>
 <id>general</id>
 <name>1.- General</name>
 </tab>
 <tab>
 <id>obligatorios</id>
 <name>2.- Obligatorios</name>
 </tab>
 <tab>
 <id>facultativos</id>
 <name>3.- Facultativos</name>
 </tab>
 </tabs>
</form>
```

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/formularios/formularios_7_2_1.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
    <tr>
      <td style="padding-top: 5px; font-style: italic; text-align: center">
        Formulario con tres pestañas
      </td>
    </tr>
  </table>
</div>

#### 7.2.2 Uso de campos booleanos

Con el siguiente trozo de XML, configuramos un apartado con tres capos booleanos para un formulario de inspecciones. Para mostrar un control de tipo booleano el campo de la tabla debe empezar por "B_", ver el apartado de <a href="../../sqliteLayers/sqllayers.es/#{#nomenclatura-nombres-campos-tablas}">9.2 - <em>Nomenclatura de los nombres de campos de las tablas</em></a>.

```xml
<field>
 <id>obl_separador2</id>
 <name>Nombre registrado</name>
 <type>SEPARATOR</type>
</field>
<field>
 <id>b_oblig_nombre_aparece</id>
 <name>Aparece en el etiquetado</name>
 <hint>El nombre de la DOP/IGP debe aparecer en el etiquetado.</hint>
 <type>BOOLEAN</type>
 <persistedField>b_oblig_nombre_aparece</persistedField>
 <editable>true</editable>
</field>
<field>
 <id>b_oblig_nombre_logo_ue</id>
 <name>Nombre registrado junto a logo UE</name>
 <hint>El nombre de la DOP/IGP está en el mismo campo visual que el símbolo de la Unión.</hint>
 <type>BOOLEAN</type>
 <persistedField>b_oblig_nombre_logo_ue</persistedField>
 <editable>true</editable>
</field>
<field>
 <id>b_oblig_nombre_mencion_igp</id>
 <name>Va acompañado de mención DOP/IGP</name>
 <type>BOOLEAN</type>
 <persistedField>b_oblig_nombre_mencion_igp</persistedField>
 <editable>true</editable>
</field>
```

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/formularios/formularios_7_2_2.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
    <tr>
      <td style="padding-top: 5px; font-style: italic; text-align: center">
        Uso de separador y componentes booleanos
      </td>
    </tr>
  </table>
</div>

#### 7.2.3 Validación de datos con expresión regular

El siguiente código muestra cómo definir una validación de un campo de correo electrónico:

```xml
<field>
 <id>d_info_correo</id>
 <name>Correo Electronico</name>
 <hint></hint>
 <type>TEXT</type>
 <persistedField>d_info_correo</persistedField>
 <editable>true</editable>
 <regexp>^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$</regexp>
</field>
```

Si el usuario no introduce un valor válido, se mostrará un mensaje de error en el formulario.

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/formularios/formularios_7_2_3.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
    <tr>
      <td style="padding-top: 5px; font-style: italic; text-align: center">
        Mensaje de error tras validación de formulario
      </td>
    </tr>
  </table>
</div>


Otros ejemplos de expresiones regulares que pueden ser de utilidad:

* Introducir un valor numérico de 2 decimales permitiendo separador de "." o ",":

```
  <regexp>\d+([\.,]\d{1,2})?</regexp>
```

* Validación básica de DNI (solo formato no código de control):
```
  <regexp>[0-9]{7,8}[a-zA-Z]</regexp>
```

* Validar la entrada para permitir solo values numéricos 1, 2 o 3.
```xml
  <field>
    <id>d_tipo_instalacion</id>
    <name>Tipo instalacion</name>
    <hint></hint>
    <type>TEXT</type>
    <inputType>2</inputType>
    <persistedField>d_tipo_instalacion</persistedField>
    <editable>true</editable>
    <regexp>(1|2|3)</regexp>
  </field>
```

Para más información sobre expresiones regulares:
<a href="https://docs.oracle.com/javase/tutorial/essential/regex/">https://docs.oracle.com/javase/tutorial/essential/regex/</a>

#### 7.2.4 Uso de desplegables en formularios {#uso-de-desplegables}

Cartodruid permite definir desplegables en formularios de tres formas diferentes:

  1) Incluyendo directamente en el fichero de configuración del formulario los valores a utilizar.

  2) Utilizando los valores definidos en un fichero de propiedades.

  3) Cargando los valores desde una tabla de Base de Datos.

En primer lugar, hemos definido el campo en el fichero xml de configuración del formulario, para ello indicando que es de tipo DROPDOWN.

```xml
<field>
 <id>variedad</id>
 <name>Variedad</name>
 <type>DROPDOWN</type>
 <persistedField>c_variedad</persistedField>
 <editable>true</editable>
 …
</field>
```

Para cargar el contenido del desplegable tenemos tres opciones que se configurarán con un atributo dentro de `<field></field>`.

**Valores directamente en el fichero de configuración del formulario**

En este caso, dentro de la configuración del campo, añadimos el listado de opciones de la siguiente forma:

```xml
<field>
 <id>variedad</id>
 <name>Variedad</name>
 <type>DROPDOWN</type>
 <persistedField>variedad</persistedField>
 <editable>true</editable>
 <deletable>true</deletable>
 <choices>
 <item>
 <key>CA</key>
 <value>Cabernet</value>
 </item>
 <item>
 <key>GA</key>
 <value>Garnacha</value>
 </item>
 <item>
 <key>ME</key>
 <value>Merlot</value>
 </item>
 …
 </choices>
</field>
```

Cada `<item>` se corresponde con una de las opciones del desplegable. El valor de la etiqueta `<key>` es lo que se guardará en base de datos y el de `<value>` lo que aparecerá en el desplegable.

**Mediante un fichero de propiedades**

En este caso, utilizamos la etiqueta `<choicesByFile>variedades.properties</choicesByFile>`, donde variedades.properties es el nombre del fichero que contiene las diferentes opciones que se cargarán en el desplegable.

```xml
<field>
…
<choicesByFile>variedades.properties</choicesByFile>,
</field>
```

Dicho fichero debe estar en la carpeta `cartodroid/values` y su estructura debe ser la siguiente
```
CA=Cabernet
GA=Carnacha
ME=Merlot
PA=Palomino
SA=Sauvignon Blanc
TE=Tempranillo
VE=Verdejo
VI=Viura
```

CA es el valor que se almacenará en base de datos y `Cabernet` el contenido que aparecerá en el desplegable.

**A partir de base de datos**

En el tercer caso, se debe indicar en el fichero de configuración del formulario una consulta SQL y la base de datos sobre la que ejecutarla:

```xml
<field>
…
 <choicesByQuery>
 <dbFile>plantaciones.sqlite</dbFile>
 <query>Select id, nombre from variedades</query>
 </choicesByQuery>
</field>
```

En este caso, la base de datos es la misma que contiene las capas del proyecto, pero podría ser cualquier otra y no es necesario que sea una capa gráfica, basta con que sea una tabla alfanumérica. La ruta al fichero de base de datos puede ser relativa, y se buscará la BD en la carpeta `/cartodroid/data` o absoluta.

En la consulta, el primer valor se utilizará como clave (lo que se almacenará en la base de datos) y el segundo es el texto que aparecerá en el desplegable.

#### 7.2.5 Uso de campos de firma

Con el siguiente trozo de XML, configuramos un campo de firma en el que se queda registrada la firma que dibujemos en una pantalla emergente. En el bloque que aparece en el formulario podemos definir el título (name), un texto de aclaración (hint), así como exigir que la firma sea realizada obligatoriamente (required). Nos aparecerá un botón para indicar que queremos firmar y la firma en pequeño en caso de que ya se haya firmado. Para mostrar un control de tipo firma el campo de la tabla debe empezar por "S_", ver el apartado de <a href="../../sqliteLayers/sqllayers.es/#{#nomenclatura-nombres-campos-tablas}">9.2 - <em>Nomenclatura de los nombres de campos de las tablas</em></a>.

```xml
<field>
 <id>S_FIRMA_TITULAR</id>
 <name>Firma</name>
 <hint>Antes de iniciarse la actuación he sido informado sobre la forma en que se va a desarrollar la misma.</hint>
 <type>SIGN</type>
 <required>true</required>
 <persistedField>S_FIRMA_ TITULAR</persistedField>
</field>
```