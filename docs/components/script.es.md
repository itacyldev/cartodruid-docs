# 4.25 Script

## 4.25.1 Definición código javascript
Fomulio permite ejecutar código js en dos lugares:
<ul>
<li>En las acciones js, indicándose con un parámetro con valor “method”.</li>
<li>En los atributos onBeforeRender/onAfterRender.</li>
</ul>

En ambos casos el campo puede referenciar el js de dos formas:
<ul>
<li>Indicando un nombre de función, que deberá estar definida en una etiqueta "script" en la propia página o en un fichero anexo, referenciado con el atributo src del tag script. La ruta en este caso pude ser absoluta o relativa al directorio “forms” del proyecto.</li>
<li>Indicando un script js que se ejecutará en el contexto de la página.</li>
</ul>

<u>Con etiqueta script en la própia página:</u>

    <edit>
        <script>
            function metodo1() {
                ...
            }
            function metodo2() {
                ...
            }
            function metodo3() {
                ...
            }
        </script>
        <form>
            <input id="myInput" onBeforeRender="metodo2" onAfterRender="metodo3"/>
            ...
            <action type="js method="metodo1"/>
            ...
            <action method="vh.setWidgetValue('myInput',123.5);console.log(vh.widget('myInput'))"
            type="js" />
            ...
        </form>
    </edit>
    
    ...
    <edit>
        <script src="scripts/prueba.js"/>
        <form>
            <input id="myInput" onBeforeRender="metodo2" onAfterRender="metodo3"/>
            ...
            <action type="js method="metodo1"/>
            ...
            <action method="vh.setWidgetValue('myInput',123.5);console.log(vh.widget('myInput'))"
            type="js" />
            ...
        </form>
    </edit>
    
<u>En fichero prueba.js</u>

    function metodo1() {
        ...

    function metodo2() {
        ...
    }
    function metodo3() {
        ...
    }

## 4.25.2 Objetos disponibles en el contexto javascript
Cuando se entra en una pantalla, se crea un contexto para esa página. Todas las llamadas a funciones y scripts comparten este contexto y no se elimina hasta que no se hace una nueva navegación.

Objetos disponibles en el contexto javascript:
<ul>
<li><strong>console</strong>: acceso al DevConsole.</li>
<li><strong>ctx</strong>: instancia del GlobalContext.</li>
<li><strong>renderEnv</strong>: instancia del RenderinEnvironment.</li>
<li><strong>vh</strong>: instancia del ScriptViewHelper.</li>
<li><strong>eh</strong>: instancia del ScriptEntityHelper, utilidades de manejo de datos de la entidad.</li>
<li><strong>session</strong>: instancia de HashMap que permite intercambiar valores entre pantallas.</li>
</ul>
Por ejemplo esta función lista los elementos de la tabla prueba y modifica la descripción con el texto d_prueba concatenado con el id de la entidad.

    function listPruebas(){
        console.log("listPruebas");

        var pruebaRepo = ctx.get("repos").get("pruebaRepo");
        var lstPrueba = pruebaRepo.listAll();
        var i = 0;
        while(i != lstPrueba.size()){
            var entityPrueba = lstPrueba.get(i);
            entityPrueba.set("d_prueba","d_prueba_"+entityPrueba.get("prueba_id"));
            pruebaRepo.save(entityPrueba);
            i++
        }
    }

## 4.25.2.1 ScriptViewHelper (vh)
Proporciona métodos de acceso rápido para los objetos del rendering environment.
Los objetos devueltos como colecciones, son objetos ScriptableList que permiten aplicar funciones a todos los elementos con apply() y filter().

Por ejemplo en esta función accedemos a los elementos de un datalistitem buscándolos en el listado de viewHolders, obtenemos los ViewContext de cada uno y hacemos un “set” para modificar el valor de la vista.

    function printValues() { 
        // obtener todos los context Holders de la vista
        var viewContexts = vh.viewHolders();
        
        // filtramos para quedarnos con lo datalistitems
        lst = viewContexts.filter(obj => obj.holderId.startsWith('datalistitemUnidadMuestral'));
        
        // obtenemos los contextos de vista ('view')
        lst = lst.apply(obj => obj.widgetContext.viewContext);
        
        // hacemos un set en los todos los contextos
        lst.apply(obj => obj.set('num_unidad_muestral','33'));
    }

El scriptViewHelper implementa atajos para obtener diferentes objetos de la interfaz:
<ul>
<li><strong>viewHolders()</strong>: listado de WidetContextHolders de la vista actual.</li>
<li>viewContexts()</strong>: listado de ViewContext de la vista actual.</li>
<li>viewContext(componentId)</strong>: devuelve el ViewContext asociado al componente indicado.</li>
<li>widgets()</strong>: lista completa de statefulWidgets que se pueden encontrar en la interfaz.</li>
<li>widget(componentId)</strong>: devuelve el primero widget encontrado con el componentId</li>
<li>entities()</strong>: listado de entidades accesibles desde los ContextHolders.</li>
</ul>
Todos estos métodos devuelven listados de tipo ScriptableList, que incluye métodos para implementar el patrón filter-map-reduce: filter, filterFirst, map, flatMap, reduce, reduceSum, reduceCount, apply

    widgets().filter(o => o.componentId.startsWith(‘muestra_transecto’) && o.getValue() != null ).map( w => w.getValue()).reduceSum()

## 4.25.3 Actualización de datos de los widgets

Desde js se pueden modificar los datos de la vista directamente accediendo al widget e invocando el método setValue():

    var widget= vh.widget(idcomponent); widget.setValue(123.0);

O en una línea con el atajo:

    vh.setWidgetValue(123.0);

Pero al acceder al widget tenemos la opción de modificar desde js las propiedades de la vista de Android.

    widget.setBackGroundColor(color.red)

Estas operaciones no requieren refresco de la pantalla porque estamos modificando directamente el componente.
Pero si hay un caso en el que modificamos el objeto del que dependen los datos del componente, por ejemplo modificamos el datos en sesión o el dato en la entidad, y queremos que se vuelva a renderizar el valor de la vista para actualizar el valor del componente, podemos utilizar el método updateWidget(‘componentId’);

Por ejemplo en este caso, tenemos un botón que va a sumar 1 a una propiedad almacenada en sesión, queremos que al actualizar el valor se actualice también el valor mostrardo en el campo:

    <button label="button2">
       <action type="js" method="session.set('miProp',(session.get('miProp') == null)?1:session.get('miProp')+1);vh.updateWidget('myInput')" />
    </button>
    <input id="myInput" value="${session.miProp}" />

La llamada al método updateWidget fuerza el renderizado de la vista y de todos los componentes dependientes de ‘myInput’.
