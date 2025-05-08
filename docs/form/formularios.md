CartoDruid allows defining the visualization you want to give to a form, and defining rules to determine what fields the user can edit or what validation rules to apply.

To create a custom alphanumeric editing form for a layer, it is necessary to set the <code>alphaEditFinisher</code> attribute of the layer as follows:

```xml
<alphaEditFinisher>userFormAlphaEditFinisher</alphaEditFinisher>
```

By setting this parameter, CartoDruid will search within the <code>cartodroid/values</code> folder for a file with the name <code>layeridentifier_AlphaEdit.xml</code>. For example, to configure a form for the "aforos" layer, you will need to create an XML <code>cartodroid/values/aforos_AlphaEdit.xml</code>.

Note: the file is stored in an Android file system that is case-sensitive, the file name must start with exactly the layer identifier, so if the layer has been identified as INSPECCIONES, the file must be called <code>INSPECCIONES_AlphaEdit.xml</code>.

### 7.1 General Structure of the File

The form configuration XML will have the following organization:

* Form (<code>&lt;form&gt;</code>): alphanumeric editing screen
  * Tab group (<code>&lt;tabs&gt;</code>), and for each nested tab (<code>&lt;tab&gt;</code>):
    * Tab field group (<code>&lt;fields&gt;</code>), and within this, for each field to display, we will have a <code>&lt;field&gt;</code> tag.

An example of the organization of the XML file:

```xml
<form>
 <id>aforosForm</id>
 <name>Aforos (Edición)</name> <!-- name to display as screen title -->
 <tabs class="linked-list">
 <tab>
 <id>tab1</id>
 <name>Edición</name> <!-- tab name -->
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

### 7.2 Form Field Configuration

<table class="bordered">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>Unique field identifier.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>Name that will be displayed for the field.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Field type, can be <code>TEXT</code>, <code>DROPDOWN</code>, <code>DATE</code>, <code>BOOLEAN</code>, <code>SEPARATOR</code>, <code>INFO</code>, <code>SIGN</code>. <br>Note: the <code>COMBO</code> type has disappeared in favor of <code>DROPDOWN</code>.</td>
    </tr>
    <tr>
      <td>inputType</td>
      <td>Type of TEXT field component: configurable according to <a href="http://developer.android.com/reference/android/text/InputType.html" target="_blank">http://developer.android.com/reference/android/text/InputType.html</a>. <br>For example, to configure a numeric field with sign and decimal, use <code>12290</code> (2 + 4096 + 8192), equivalent to adding: <br>• <code>InputType.TYPE_CLASS_NUMBER</code> (2) <br>• <code>InputType.TYPE_NUMBER_FLAG_SIGNED</code> (4096) <br>• <code>InputType.TYPE_NUMBER_FLAG_DECIMAL</code> (8192)</td>
    </tr>
    <tr>
      <td>regexp</td>
      <td>Regular expression that the value entered by the user must meet to validate correctly. Only for <code>TEXT</code> fields. Useful to validate numeric values, emails, phone numbers, etc.</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>Help text to fill in the field.</td>
    </tr>
    <tr>
      <td>extendedHint</td>
      <td>Extended help text to fill in the field.</td>
    </tr>
    <tr>
      <td>persistedField</td>
      <td>Name of the DB field that will be used to display/store the information.</td>
    </tr>
    <tr>
      <td>required</td>
      <td>Indicates if the field is mandatory. If true, data won’t save until it’s filled. Defaults to false if omitted.</td>
    </tr>
    <tr>
      <td>deletable</td>
      <td>Indicates if the user is allowed to delete the field value.</td>
    </tr>
    <tr>
      <td>editable</td>
      <td>Indicates if the field is editable.</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>Default value of the field: <br>• For <code>TEXT</code> fields: a text value<br>• For <code>DROPDOWN</code> fields: the combo code (e.g. <code>'VI'</code> for 'Viñedo')<br>• For <code>DATE</code> fields: format <code>'dd/MM/yyyy'</code><br>• For <code>BOOLEAN</code> fields: <code>'true'</code> or <code>'false'</code> (any other value = <code>false</code>)</td>
    </tr>
    <tr>
      <td>choices</td>
      <td>Defines a list of <code>&lt;items&gt;</code> for a dropdown. Each item has a <code>key</code> (code) and <code>value</code> (description). See example in docs.</td>
    </tr>
    <tr>
      <td>choicesByFile</td>
      <td>Identifies the file containing the dropdown values. File should be in <code>/cartodroid/values</code>.</td>
    </tr>
    <tr>
      <td>choicesByQuery</td>
      <td>SQL query to load dropdown values. Specify the DB file with <code>&lt;dbFile&gt;</code> (relative or absolute path) and the query with <code>&lt;query&gt;</code>.</td>
    </tr>
  </tbody>
</table>

<strong>Note</strong>: Using the <code>SEPARATOR</code> type, it is possible to create intermediate headers for the data, either empty (a horizontal line), or with text (filling in the <code>name</code> attribute).

#### 7.2.1 Definition of Tabs in the Form

The following code snippet defines three empty tabs, the user can move from one to another by swiping sideways on the screen.

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
        Form with three tabs
      </td>
    </tr>
  </table>
</div>

#### 7.2.2 Use of Boolean Fields

With the following XML snippet, we configure a section with three boolean fields for an inspection form. To display a boolean control, the table field must start with "B_", see section <a href="../../sqliteLayers/sqllayers.es/#{#nomenclatura-nombres-campos-tablas}">9.2 - <em>Nomenclature of Table Field Names</em></a>.

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
        Use of separator and boolean components
      </td>
    </tr>
  </table>
</div>

#### 7.2.3 Data Validation with Regular Expression

The following code shows how to define a validation for an email field:

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

If the user does not enter a valid value, an error message will be displayed in the form.

<div style="text-align: center;">
  <table style="border-collapse: collapse; margin: 0 auto;">
    <tr>
      <td style="padding: 10px;">
        <img src="../../img/formularios/formularios_7_2_3.png" style="max-width: 100%; height: auto;">
      </td>
    </tr>
    <tr>
      <td style="padding-top: 5px; font-style: italic; text-align: center">
        Error message after form validation
      </td>
    </tr>
  </table>
</div>

Other examples of regular expressions that may be useful:

* Enter a numerical value with 2 decimals allowing a separator of "." or ",":

```
    <regexp>\d+([\.,]\d{1,2})?</regexp>
```

* Basic validation of DNI (only format not control code):

```
    <regexp>[0-9]{7,8}[a-zA-Z]</regexp>
```

* Validate the input to allow only numeric values 1, 2 or 3.

    
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

For more information on regular expressions:
<a href="https://docs.oracle.com/javase/tutorial/essential/regex/">https://docs.oracle.com/javase/tutorial/essential/regex/</a>

#### 7.2.4 Using Dropdowns in Forms {#uso-de-desplegables}

CartoDruid allows defining dropdowns in forms in three different ways:

  1) Directly including the values to use in the form configuration file.

  2) Using values defined in a properties file.
  
  3) Loading values from a Database table.

First, we need to define the field in the XML configuration file of the form, indicating that it is of type DROPDOWN.

```xml
<field>
 <id>variedad</id>
 <name>Variety</name>
 <type>DROPDOWN</type>
 <persistedField>c_variedad</persistedField>
 <editable>true</editable>
 …
</field>
```

To load the dropdown content, we have three options that can be configured with an attribute within `<field></field>`.

**Values directly in the form configuration file**

In this case, within the field configuration, we add the list of options as follows:

```xml
<field>
 <id>variedad</id>
 <name>Variety</name>
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

Each `<item>` corresponds to one of the dropdown options. The value of the `<key>` tag is what will be saved in the database, and the `<value>` is what will appear in the dropdown.

**Using a properties file**

In this case, we use the tag `<choicesByFile>varieties.properties</choicesByFile>`, where varieties.properties is the name of the file that contains the different options to be loaded into the dropdown.

```xml
<field>
…
<choicesByFile>varieties.properties</choicesByFile>,
</field>
```

This file must be in the <code>cartodroid/values</code> folder and its structure should be as follows:
```
CA=Cabernet
GA=Garnacha
ME=Merlot
PA=Palomino
SA=Sauvignon Blanc
TE=Tempranillo
VE=Verdejo
VI=Viura
```

CA is the value that will be stored in the database and <code>Cabernet</code> is the content that will appear in the dropdown.

**From a database**

In the third case, you need to specify an SQL query and the database on which to execute it in the form configuration file:

```xml
<field>
…
 <choicesByQuery>
 <dbFile>plantaciones.sqlite</dbFile>
 <query>Select id, nombre from variedades</query>
 </choicesByQuery>
</field>
```

In this case, the database is the same one that contains the project layers, but it could be any other and it doesn't need to be a graphic layer, it just needs to be an alphanumeric table. The path to the database file can be relative (and the DB will be searched in the <code>/cartodroid/data</code> folder) or absolute.

In the query, the first value will be used as a key (what will be stored in the database) and the second is the text that will appear in the dropdown.

#### 7.2.5 Using Signature Fields

With the following XML snippet, we configure a signature field where a signature drawn on a pop-up screen is recorded. In the block that appears in the form, we can define the title (name), an explanatory text (hint), as well as require that the signature be made mandatory (required). A button will appear to indicate that we want to sign, and a small signature will be displayed if it has already been signed. To show a signature type control, the table field must start with "S_", see section <a href="../../sqliteLayers/sqllayers.es/#{#nomenclatura-nombres-campos-tablas}">9.2 - <em>Nomenclature of Table Field Names</em></a>.

```xml
<field>
 <id>S_FIRMA_TITULAR</id>
 <name>Signature</name>
 <hint>Before the action begins, I have been informed about how it will be carried out.</hint>
 <type>SIGN</type>
 <required>true</required>
 <persistedField>S_FIRMA_ TITULAR</persistedField>
</field>
```