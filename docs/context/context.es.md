# 5. Contextos
<div style="text-align: justify;">
<p>El framework utiliza un sistema de "contextos" para acceder de forma uniforme a la información procedente de diferentes fuentes (base de datos, ficheros, apis REST, información del dispositivo, etc...) y soporta binding automático entre las entidades recuperadas del repositorio y los componetes de pantalla, 
de forma similar a lo que se puede encontrar en otros framework como Angular, JSF, etc.</p>

<p>El mecanismo de refresco entre componentes se basa en un mecanismo reactivo, implementado a partir de las dependencias entre componentes de la pantalla o entre componentes y contextos.</p>

<p>Existe un contexto global en el que se darán de alta contextos a utilizar por todas las pantallas (date, location, ... ), 
y un contexto por cada formulario de la pantalla actual.</p>
<p>Cada contexto global tiene un prefijo (date, location,...) y cada contexto de formulario irá identificado por el id del formulario.</p>

<p>El contexto del formulario contiene otros cuatro contextos:
<ul>
<li><u>Contexto de entidad</u>: da acceso a la propiedad actual, no almacena los datos, directamente obtiene la información de la entidad cargada actual. Este contexto está disponible al inicio de la carga del formulario.</li>
<li><u>Contexto de vista</u>: da acceso a los componentes de pantalla del formulario. No almacena datos, directamente busca el elemento indicado en la vista de Android enlazada. Este contexto está disponible en el momento del renderizado de la pantalla.</li>
<li><u>Contexto de mensajes</u>: se utiliza para almacenar mensajes de los validadores.</li>
<li><u>Contexto de estado</u>: se utiliza para almacenar el estado de la vista para poder recuperarlo en caso de que falle una validación y haya que re-renderizar un componente.</li>
</ul></p>

<p>Además, el contexto del formulario es accesible de forma relativa y absoluta. Los elementos de un formulario pueden utilizar expresiones ${entity|view.property} o ${formId.entity|view.property}, de esta forma se abre la posibilidad a acceder a datos de un formulario desde otro, o desde los scripts js.</p>

<p>Cuando desde un widget se evalúa una expresión jextl ej (${entity.id}) esto se hace contra un contexto, este contexto en realidad es un conjunto de contextos comunes (date, user, …) y contextos específicos de la vista (entity y view). 
En determinados casos, en una misma vista pueden existir múltiples contextos para poder evaluar expresiones contra diferentes entidades, por ejemplo cuando estamos en un datalist y queremos que la expresión (${entity.name}) tome un valor diferente para cada elemento de la lista.  Para solucionar esto, determinados widgets pueden mantener un contexto diferente para sus elementos anidados, de forma que cuando se evalúa la expresión, se evalúa localmente pero se sigue teniendo acceso a los contextos comunes.</p>
<p>Los widgets asociados a form, dataListItem y dataTableItem mantienen un contexto propio y cuando se evalúa una expresión de entidad o vista (${view.field1.value} o ${entity.name}) se hace únicamente respecto a los elementos anidados.</p>
</div>

## 5.1 Location
<div style="text-align: justify;">
<p>El contexto Location en la aplicación está diseñado para manejar información relacionada con la ubicación, proporcionando acceso a las coordenadas geográficas del usuario y funcionalidades adicionales.
</p>
</div>

<table border="1">
    <thead>
        <tr>
            <th>Propiedad/método</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td>lastLocation</td>
            <td>android.location.Location</td>
            <td>Devuelve la última ubicación válida del usuario. Este método proporciona acceso a las coordenadas geográficas más recientes y precisas del usuario.</td>
        </tr>
        <tr>
            <td>asString</td>
            <td>String</td>
            <td>Devuelve la representación en cadena de la ubicación utilizando el método Location.toString(). Esto puede incluir varios detalles sobre la ubicación.</td>
        </tr>
        <tr>
            <td>asLatLong</td>
            <td>String</td>
            <td>Devuelve los valores de latitud y longitud de la ubicación en el formato latitud, longitud.</td>
        </tr>
        <tr>
            <td>asWKT</td>
            <td>String</td>
            <td>Devuelve la representación en cadena de la ubicación en formato POINT(X, Y).</td>
        </tr>
        <tr>
            <td>asWKT3D</td>
            <td>String</td>
            <td> Devuelve la representación en cadena de la ubicación en formato POINT(X, Y, Z).</td>
        </tr>
     </tbody>
</table>

    <textarea label="Location lastLocation" placeHolder="${location.lastLocation}" value="${entity.d_prueba}"/>
    <textarea label="Location asString" placeHolder="${location.asString}" value="${entity.d_prueba}"/>
    <textarea label="Location asLatLong" placeHolder="${location.asLatLong}" value="${entity.d_prueba}"/>
    <textarea label="Location asWKT" placeHolder="${location.asWKT}" value="${entity.d_prueba}"/>
    <textarea label="Location asWKT3D" placeHolder="${location.asWKT3D}" value="${entity.d_prueba}"/>

![img.png](../img/context1.png){: width="240" .center }

## 5.2 Date
<div style="text-align: justify;">
<p>El contexto Date en la aplicación se ha diseñado para gestionar información relacionada con la fecha y la hora, proporcionando acceso a funcionalidades específicas.
</p>
</div>

<table border="1">
    <thead>
        <tr>
            <th>Propiedad/método</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td>now</td>
            <td>Date</td>
            <td>Representa la fecha y hora actuales del sistema.</td>
        </tr>
    </tbody>
</table>

     <textarea label="Date now" placeHolder="${date.now}" value="${entity.d_prueba}"/>

![img.png](../img/context2.png){: width="240" .center }

## 5.3 Params
<div style="text-align: justify;">
<p>El contexto Params en la aplicación está diseñado para acceder a los parámetros pasados a la vista actual como ${params.myparam}.</p>
</div>

    <edit id="editParam1">
        <form>
            <input id="param1" label="Parámetro 1: " value="Uno"/>
            <input id="param2" label="Parámetro 2: " value="Dos"/>
            <button label="Nav Edit Param 2" route="formParam-editParam2">
                <param name="nameParam1" value="${view.param1}"/>
                <param name="nameParam2" value="${view.param2}"/>
            </button>
         </form>
    </edit>
    <edit id="editParam2">
        <form>
            <input label="Parametro 1: " value="${params.nameParam1}"/>
            <input label="Parametro 2: " value="${params.nameParam2}"/>
        </form>
    </edit>

![Imagen 1](../img/context3.png){: width="240"} | ![Imagen 2](../img/context4.png){: width="240"}

## 5.4 Entity
<div style="text-align: justify;">
<p>El contexto Entity da acceso a la propiedad actual, no almacena los datos, directamente obtiene la información de la entidad cargada actual.</p>
</div>
    
    <input label="Description" value="${entity.d_prueba}"/>

![img.png](../img/context5.png){: width="240" .center }

## 5.5 View
<div style="text-align: justify;">
<p>El contexto View da acceso a los componentes de pantalla del formulario. No almacena datos, directamente busca el elemento indicado en la vista de Android enlazada.</p>
</div>
    
    <input id="input1" label="View 1: " value="Uno"/>
    <input id="input2" label="View 2: " value="${view.input1}"/>

![img.png](../img/context6.png){: width="240" .center }

## 5.6 This
<div style="text-align: justify;">
<p>El contexto This hace referencia al componente actual.</p>
</div>
    
    <datatable id="datatableProvincia" repo="provinciaRepo" numVisibleRows="5">
        <column id="column_c_provincia_id" headerText="Cod. Provincia" filtering="true" ordering="true" value="${entity.c_provincia_id}">
            <filter property="c_provincia_id" matching="contains" valueExpression="${this.column_c_provincia_id}"/>
            <order property="c_provincia_id"/>
        </column>
        <column id="column_d_provincia" headerText="Provincia" filtering="true" ordering="true" value="${entity.d_provincia}">
            <filter property="d_provincia" matching="contains" valueExpression="${this.column_d_provincia}"/>
            <order property="d_provincia"/>
        </column>
    </datatable>

![Imagen 1](../img/context7.png){: width="240"} | ![Imagen 2](../img/context8.png){: width="240"}

## 5.7 Application Context (“app”)
<div style="text-align: justify;">
<p>El contexto App contiene información sobre la aplicación.</p>
</div>

<table border="1">
    <thead>
        <tr>
            <th>Propiedad/método</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td>workingFolder</td>
            <td>String</td>
            <td>Ruta absoluta a la carpeta de trabajo de la aplicación.</td>
        </tr>
    </tbody>
</table>
     
    <textarea label="App" value="${app.workingFolder}"/>

![Imagen 1](../img/context9.png){: width="240" .center }

## 5.8 Project Context (“project”)
<div style="text-align: justify;">
<p>El contexto Project contiene información sobre el proyecto actual.</p>
</div>

<table border="1">
    <thead>
        <tr>
            <th>Propiedad/método</th>
            <th>Tipo</th>
            <th>Descripción</th>
         </tr>
    </thead>
    <tbody>
        <tr>
            <td>folder</td>
            <td>String</td>
            <td>Ruta absoluta a la carpeta del proyecto actual.</td>
        </tr>
        <tr>
            <td>dataFolder</td>
            <td>String</td>
            <td>Ruta absoluta a la carpeta que contiene archivos de base de datos.</td>
        </tr>
        <tr>
            <td>formsFolder</td>
            <td>String</td>
            <td>Ruta absoluta a la carpeta que contiene archivos de formulario.</td>
        </tr>
        <tr>
            <td>picturesFolder</td>
            <td>String</td>
            <td>Ruta absoluta a la carpeta que contiene archivos de imágenes.</td>
        </tr>
    </tbody>
</table>

    <textarea label="Folder: " value="${project.folder}"/>
    <textarea label="Forms folder: " value="${project.formsFolder}"/>
    <textarea label="Data folder: " value="${project.dataFolder}"/>
    <textarea label="Pictures folder: " value="${project.picturesFolder}"/>

![Imagen 1](../img/context10.png){: width="240" .center }