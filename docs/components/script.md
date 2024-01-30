# 4.25 Script

## 4.25.1 Definition of JavaScript Code
<div style="text-align: justify;">
<p>The Formulario allows executing JavaScript code in two places:
<ul>
<li>In JavaScript actions, indicated by a parameter with the value "method."</li>
<li>In the onBeforeRender/onAfterRender attributes.</li>
</ul></p>

<p>In both cases, the field can reference JavaScript in two ways:
<ul>
<li>Indicating a function name, which should be defined in a "script" tag on the same page or in an attached file, referenced with the src attribute of the script tag. The path in this case can be absolute or relative to the "forms" directory of the project.</li>
<li>Indicating a JavaScript script that will run in the context of the page.</li>
</ul></p>

<p><u>With script tag on the same page:</u></p>
</div>

    <edit>
        <script>
            function method1() {
                ...
            }
            function method2() {
                ...
            }
            function method3() {
                ...
            }
        </script>
        <form>
            <input id="myInput" onBeforeRender="method2" onAfterRender="method3"/>
            ...
            <action type="js method="method1"/>
            ...
            <action method="vh.setWidgetValue('myInput',123.5);console.log(vh.widget('myInput'))"
            type="js" />
            ...
        </form>
    </edit>
    
    ...
    <edit>
        <script src="scripts/test.js"/>
        <form>
            <input id="myInput" onBeforeRender="method2" onAfterRender="method3"/>
            ...
            <action type="js method="method1"/>
            ...
            <action method="vh.setWidgetValue('myInput',123.5);console.log(vh.widget('myInput'))"
            type="js" />
            ...
        </form>
    </edit>
<div style="text-align: justify;">    
<p><u>In the file test.js:</u></p>
</div>

    function method1() {
        ...

    function method2() {
        ...
    }
    function method3() {
        ...
    }

## 4.25.2 Objects Available in the JavaScript Context
<div style="text-align: justify;">
<p>When entering a screen, a context is created for that page. All calls to functions and scripts share this context and are not eliminated until a new navigation is made.</p>

<p>Objects available in the JavaScript context:
<ul>
<li><strong>console</strong>: access to the DevConsole.</li>
<li><strong>ctx</strong>: instance of GlobalContext.</li>
<li><strong>renderEnv</strong>: instance of RenderinEnvironment.</li>
<li><strong>vh</strong>: instance of ScriptViewHelper.</li>
<li><strong>eh</strong>: instance of ScriptEntityHelper, utility for handling entity data.</li>
<li><strong>session</strong>: instance of HashMap that allows exchanging values between screens.</li>
</ul></p>
<p>For example, this function lists the elements of the prueba table and modifies the description with the text "d_prueba" concatenated with the entity id.</p>
</div>

    function listTests(){
        console.log("listTests");

        var testRepo = ctx.get("repos").get("testRepo");
        var lstTest = testRepo.listAll();
        var i = 0;
        while(i != lstTest.size()){
            var entityTest = lstTest.get(i);
            entityTest.set("d_test","d_test_"+entityTest.get("test_id"));
            testRepo.save(entityTest);
            i++
        }
    }

## 4.25.2.1 ScriptViewHelper (vh)
<div style="text-align: justify;">
<p>Provides quick access methods for objects in the rendering environment.
Objects returned as collections are ScriptableList objects that allow applying functions to all elements with apply() and filter().</p>

<p>For example, in this function, we access the elements of a datalistitem by searching for them in the list of viewHolders, obtaining the ViewContext of each one, and making a "set" to modify the view value.</p>
</div>

    function printValues() { 
        // obtain all context holders from the view
        var viewContexts = vh.viewHolders();
        
        // filter to keep only datalistitems
        lst = viewContexts.filter(obj => obj.holderId.startsWith('datalistitemSampleUnit'));
        
        // obtain the view contexts ('view')
        lst = lst.apply(obj => obj.widgetContext.viewContext);
        
        // set in all contexts
        lst.apply(obj => obj.set('num_sample_unit','33'));
    }

<div style="text-align: justify;">
<p>The ScriptViewHelper implements shortcuts to obtain different objects from the interface:
<ul>
<li><strong>viewHolders()</strong>: list of WidgetContextHolders of the current view.</li>
<li><strong>viewContexts()</strong>: list of ViewContexts of the current view.</li>
<li><strong>viewContext(componentId)</strong>: returns the ViewContext associated with the indicated component.</li>
<li><strong>widgets()</strong>: complete list of statefulWidgets that can be found in the interface.</li>
<li><strong>widget(componentId)</strong>: returns the first widget found with the componentId</li>
<li><strong>entities()</strong>: list of entities accessible from ContextHolders.</li>
</ul></p>
<p>All these methods return lists of type ScriptableList, which include methods to implement the filter-map-reduce pattern: filter, filterFirst, map, flatMap, reduce, reduceSum, reduceCount, apply</p>
</div>

    widgets().filter(o => o.componentId.startsWith(‘sample_transect’) && o.getValue() != null ).map( w => w.getValue()).reduceSum()

## 4.25.3 Updating Widget Data
<div style="text-align: justify;">
<p>From JavaScript, you can modify view data directly by accessing the widget and invoking the setValue() method:</p>
</div>

    var widget= vh.widget(idcomponent); widget.setValue(123.0);

<div style="text-align: justify;">
<p>Or in one line with the shortcut:</p>
</div>

    vh.setWidgetValue(123.0);

<div style="text-align: justify;">
<p>But when accessing the widget, we have the option to modify the Android view properties from JavaScript.</p>
</div>

    widget.setBackgroundColor(color.red)

<div style="text-align: justify;">
<p>These operations do not require a screen refresh because we are modifying the component directly.
However, if there is a case where we modify the object on which the component's data depends, for example, we modify the data in session or the data in the entity, and we want the view value to be re-rendered to update the component value, we can use the updateWidget('componentId') method;</p>

<p>For example, in this case, we have a button that will add 1 to a property stored in the session, and we want that updating the value will also update the displayed value in the field:</p>
</div>



