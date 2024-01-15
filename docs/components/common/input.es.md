<tr>
    <td rowspan="9" class="vertical-text" align="center"><strong>Comunes input</strong></td>
    <td><strong>label</strong></td>
    <td>null</td>
    <td>String</td>
    <td>Etiqueta del componente.</td>
</tr>
<tr>
    <td><strong>validator</strong></td>
    <td>null</td>
    <td>String</td>
    <td>Tipo de validación del componente: required, short, long, decimal, double, float, email, iban.</td>
</tr>
<tr>
    <td><strong>hint</strong></td>
    <td>null</td>
    <td>String</td>
    <td>Texto a modo de ayuda o información. Se mostará un botón de información que al ser pulsado mostrará un panel con el texto aportado.</td>
</tr>
<tr>
    <td><strong>readonly</strong></td>
    <td>false</td>
    <td>Boolean o JEXLExpression</td>
    <td>Evaluar si el componente debe ser de sólo lectura o no.</td>
</tr>
<tr>
    <td><strong>placeHolder</strong></td>
    <td>null</td>
    <td>String o JEXLExpression</td>
    <td>Valor del componente cuando el componente no tiene valor.</td>
</tr>
<tr>
    <td><strong>inputType</strong></td>
    <td>null</td>
    <td>Integer</td>
    <td>Valor inputType de Android que soportará el componente. Ver <a href="https://developer.android.com/reference/android/text/InputType" target="_blank">documentación de Android InputType</a>. 
Por ejemplo, para PHONE_CLASS, establezca input_type = 3. En el caso de la imagen, mostrará la botonera asociada a la imagen:
<ul>
<li>1 cámara</li>
<li>2 galería</li>
<li>4 sketch</li>
<li>3 galería y cámara</li>
<li>5 sketch y cámara</li>
<li>6 sketch y galería</li>
<li>7 cámara, galería y sketch</li>
</ul>
</td>
</tr>
<tr>
    <td><strong>hasDeleteButton</strong></td>
    <td>true</td>
    <td>Boolean</td>
    <td>Indica si se mostrará el botón de borrado del componente.</td>
</tr>
<tr>
    <td><strong>converter</strong></td>
    <td>null</td>
    <td>String</td>
    <td>Instancia del conversor a aplicar a la propiedad de la entidad.</td>
</tr>