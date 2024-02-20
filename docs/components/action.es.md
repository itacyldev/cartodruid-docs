# 4.27 Action(Create, Save, Cancel, Delete, Nav, Js, Job)

## 4.27.1 Atributos 

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
        {% include "./common/id.es.md" %}
        <tr>
            <td colspan="2"><strong>route</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Si la acción implica una navegación, identificador del formulario de destino.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>type</strong></td>
            <td></td>
            <td>String</td>
            <td style="text-align: justify;">Tipo de acción: Create, Save, Cancel, Delete, Nav, Js, Job</td>
        </tr>
        <tr>
            <td colspan="2"><strong>controller</strong></td>
            <td>null</td>
            <td>String</td>
            <td style="text-align: justify;">Una lista separada por comas de ids de los widgetControllers que se utilizarán para ejecutar la acción. Si no se establece, por defecto se utiliza el mainForm para ejecutar la acción.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>registerInHistory</strong></td>
            <td>true</td>
            <td>Boolean</td>
            <td style="text-align: justify;">Si la acción tiene una ruta para realizar una navegación, este atributo define si la ruta debe registrarse en el historial del enrutador.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>refresh</strong></td>
            <td>all</td>
            <td>String</td>
            <td style="text-align: justify;">Indica qué parte de la vista actual debe volver a renderizarse tras la ejecución de la acción:
<ul><li>this: sólo el ViewContextHolder actual</li>
<li>all: toda la vista</li>
<li>componentId: widget seleccionado por su id.</li></ul>
Este atributo es incompatible con "route", si se establece refresh.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>restoreView</strong></td>
            <td>false</td>
            <td>Boolean</td>
            <td style="text-align: justify;">Indica si, tras navegar a la vista referenciada por "ruta", debe restaurarse el último estado de la vista.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>popHistory</strong></td>
            <td>0</td>
            <td>Integer</td>
            <td style="text-align: justify;">Determina si después de completar la acción se debe saltar un registro del historial para evitar volver a la vista actual utilizando la navegación "atrás".</td>
        </tr>
   </tbody>
</table>

    <action type="save" route="back" registerInHistory="false" restoreView="true">
        <param name="entityId" value="${params.entity_id}" />
    </action>

## 4.27.2 Puntos de invocación de acciones
La invocación de acciones se puede realizar desde distintos puntos:

<ul>
    <li><strong><u>Botones del formulario:</u></strong></li>
</ul>
    ...
    function accionBotonFormulario(msg) {
        vh.setWidgetValue('inputAccionFormulario',msg);
    }
    ...
    <input label="Input acción formulario: " id="inputAccionFormulario" />
    <button label="Acción botón formulario">
        <action type="js">
            <param name="method" value="accionBotonFormulario" />
            <param name="message" value="Acción botón formulario" />
        </action>
    </button>

![Imagen 1](../img/actions1.png){: width="180"} ![Imagen 2](../img/actions2.png){: width="180"}

<ul>
    <li><strong><u>Desde un componente:</u></strong></li>
</ul>
    ...
    function accionComponente(msg) {
        vh.setWidgetValue('inputAccionComponente',msg);
    }
    ...
    <input label="Accion del componente 1: " id="inputAccionComponente" />
    <input label="Accion del componente 2: ">
        <action type="js">
            <param name="method" value="accionComponente" />
            <param name="message" value="Acción componente" />
        </action>
    </input>

![Imagen 1](../img/actions3.png){: width="180"} ![Imagen 2](../img/actions4.png){: width="180"}

<ul>
    <li><strong><u>Desde la botonera principal del formulario:</u></strong></li>
</ul>
    ...
    function accionBotoneraFormulario(msg) {
        vh.setWidgetValue('inputAccionBotoneraFormulario',msg);
    }
    ...
    <input label="Input acción botonera: " id="inputAccionBotoneraFormulario" />
    ...
    <buttonbar type="bottom">
        <button label="Save">
            <action type="js">
                <param name="method" value="accionBotoneraFormulario" />
                <param name="message" value="Acción botonera formulario" />
            </action>
        </button>
        <button label="Cancel" route="back"/>
    </buttonbar>

![Imagen 1](../img/actions5.png){: width="180"} ![Imagen 2](../img/actions6.png){: width="180"}

    <buttonbar type="fab">
        <button id="btnFab">
            <action id="accionFAB" type="nav" route="formAction-editAction">
                <param name="repo" value="pruebaRepo"/>
            </action>
        </button>
    </buttonbar>

![Imagen 1](../img/actions7.png){: width="180"} ![Imagen 2](../img/actions1.png){: width="180"}

<strong><u>Se pueden concatenar acciones:</u></strong>

    ...
    function accionConcatenada1(msg) {
        vh.setWidgetValue('inputAccionConcatenada1',msg);
    }
    function accionConcatenada2(msg) {
        vh.setWidgetValue('inputAccionConcatenada2',msg);
    }
    ...
    <input label="Input acción concatenada 1: " id="inputAccionConcatenada1" />
    <input label="Input acción concatenada 2: " id="inputAccionConcatenada2" />
    <button label="Acción concatenada">
        <action id="compositeAction">
            <action type="js">
                <param name="method" value="accionConcatenada1" />
                <param name="message" value="Acción concatenada 1" />
            </action>
            <action type="js">
                <param name="method" value="accionConcatenada2" />
                <param name="message" value="Acción concatenada 2" />
            </action>
        </action>
    </button>

![Imagen 1](../img/actions8.png){: width="180"} ![Imagen 2](../img/actions9.png){: width="180"}

## 4.27.3 Tipos de acciones

### 4.27.3.1 Create 
    <button label="CRT">
        <create route="formActions-listActions">
            <param name="repo" value="pruebaRepo"/>
        </create>
    </button>
    <button action="create" label="CRT 2" route="formActions-listActions">
        <param name="repo" value="pruebaRepo"/>
    </button>
     <button label="CRT 3">
        <action id="createPlaga" type="create" route="formActions-listActions" >
            <param name="repo" value="pruebaRepo"/>
          </action>
    </button>
### 4.27.3.2 Save
    <button label="SAV">
        <save route="formActions-listActions"/>
    </button>
    <button action="save" label="SAV 2" route="formActions-listActions"/>
    <button label ="SAV 3">
        <action type="save" route="formActions-listActions">
        </action>
    </button>
### 4.27.3.3 Cancel 
    <button label="CNL">
        <cancel route="formActions-listActions"/>
    </button>
    <button action="cancel" label="CNL 2" route="formActions-listActions"/>
    <button label ="CNL 3">
        <action type="cancel" route="formActions-listActions">
        </action>
    </button>
### 4.27.3.4 Delete 
    <button label="DEL">
        <delete route="formActions-listActions"/>
    </button>
    <button action="delete" label="DEL 2" route="formActions-listActions"/>
    <button label ="DEL 3">
        <action type="delete" route="formActions-listActions">
        </action>
    </button>
### 4.27.3.5 Nav 
    <button label="NAV">
        <nav route="formActions-listActions"/>
    </button>
    <button action="nav" label="NAV 2" route="formActions-listActions"/>
    <button label ="NAV 3">
        <action type="nav" route="formActions-listActions">
        </action>
    </button>
### 4.27.3.6 Js 
    ...
    <script>
        function accionBotonFormulario(msg) {
            vh.setWidgetValue('inputAccionFormulario',msg);
        }
    </script>
    ...
    <input label="Input acción formulario: " id="inputAccionFormulario" />
    ...
     <button label="JS">
        <js method="accionBotonFormulario">
            <param name="message" value="Acción botón formulario" />
        </js>
    </button>
    <button action="js" label="JS 2" method="accionBotonFormulario">
        <param name="message" value="Acción botón formulario" />
    </button>
    <button label ="JS 3">
        <action type="js" method="accionBotonFormulario">
            <param name="message" value="Acción botón formulario" />
        </action>
    </button>

### 4.27.3.6 Job 
    <button action="job" label="JOB">
        <param name="jobId" value="job_prueba" />
        <param name="prueba_id" value="${entity.prueba_id}" />
    </button>
    <button label ="JOB 2">
        <action type="job">
            <param name="jobId" value="job_prueba" />
            <param name="prueba_id" value="${entity.prueba_id}" />
        </action>
    </button>

Fichero /jobs/job_prueba.json:

    {
        "description": "Job prueba",
        "requiredContexts": [
            "user",
            "job"
        ],
        "executionMode": "FG",
        "tasks": [
        {
            "name": "t1",
            "reader": {
                "type": "sqlreader",
                "dbFile": "data/docproject.sqlite",
                "sqlQuery": "select d_prueba from prueba where prueba_id='${params.expediente_id}'"
            },
            "writer": {
                "type": "csvWriter",
                "outputFile": "prueba.csv"
            }
        }
        ]
}

![Imagen 1](../img/actions10.png){: width="180"} ![Imagen 2](../img/actions11.png){: width="180"} ![Imagen 2](../img/actions12.png){: width="180"}