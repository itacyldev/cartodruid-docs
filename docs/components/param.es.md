# 4.26 Param
<div style="text-align: justify;">
<p>Los parámetros pueden ser fundamentales para la interacción entre formularios y acciones, permitiendo la transferencia de datos y la personalización dinámica del comportamiento de la aplicación.</p>
</div>
<div style="text-align: justify;">
<p><u>Parámetro que pasaremos a otro formulario</u>:</p>
<p>En el ejemplo se utiliza en un formulario de edición (editParam1) donde se definen dos campos de entrada (param1 y param2). Al hacer clic en el botón "Ir a Editar Param 2", se navega al formulario editParam2, y los valores de param1 y param2 se pasan como parámetros. El formulario editParam2 muestra y utiliza estos parámetros para configurar sus campos de entrada.</p>
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
<div style="text-align: justify;">
<p><u>Parámetro usado en una acción</u>:</p>
<p>En el ejemplo dado, hay un botón con una acción asociada (Acción botón formulario). Al hacer clic en el botón, se ejecuta una función JavaScript (accionBotonFormulario) que toma un mensaje como parámetro. El valor de este parámetro se obtiene de un campo de entrada (inputAccionFormulario). Este escenario muestra cómo un parámetro puede ser utilizado dinámicamente en una acción para realizar ciertas operaciones o mostrar información específica.</p>
</div>

    <script>
        function accionBotonFormulario(msg) {
            vh.setWidgetValue('inputAccionFormulario',msg);
        }
    </script>

    <input label="Input acción formulario: " id="inputAccionFormulario" />
    <button label="Acción botón formulario">
        <action type="js">
            <param name="method" value="accionBotonFormulario" />
            <param name="message" value="Acción botón formulario" />
        </action>
    </button>
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
        <tr>
            <td colspan="2"><strong>name</strong></td>
            <td>null</td>
            <td>String</td>
            <td>Nombre del parámetro</td>
        </tr>
       <tr>
            <td colspan="2"><strong>value</strong></td>
            <td>null</td>
            <td>String o JEXLExpression</td>
            <td>Expresión EL para calcular el valor del componente.</td>
        </tr>
    </tbody>
</table>

    <main id="formParam" name="Param" repo="pruebaRepo">
        <list id="listParam" name="Param">
            <buttonbar type="fab">
                <button id="btnFab">
                    <action id="accionFAB" type="nav" route="formParam-editParam1">
                        <param name="repo" value="pruebaRepo"/>
                    </action>
                </button>
            </buttonbar>
        </list>
        <edit id="editParam1">
            <script>
                function accionBotonFormulario(msg) {
                    vh.setWidgetValue('inputAccionFormulario',msg);
                }
            </script>
            <form>
                <input label="Input acción formulario: " id="inputAccionFormulario" />
                <button label="Acción botón formulario">
                    <action type="js">
                        <param name="method" value="accionBotonFormulario" />
                        <param name="message" value="Acción botón formulario" />
                    </action>
                </button>
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
    </main>

![Imagen 1](../img/param1.png){: width="180"} | ![Imagen 2](../img/param2.png){: width="180"} | ![Imagen 2](../img/param3.png){: width="180"} |
