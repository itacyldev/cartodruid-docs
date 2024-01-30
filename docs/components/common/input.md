<tr>
    <td rowspan="9" class="vertical-text" align="center"><strong>Common Input Attributes</strong></td>
    <td><strong>label</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Label of the component.</td>
</tr>
<tr>
    <td><strong>validator</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Type of validation for the component: required, short, long, decimal, double, float, email, iban.</td>
</tr>
<tr>
    <td><strong>hint</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Text serving as help or information. A button with information icon will be displayed, and when clicked, it will show a panel with the provided text.</td>
</tr>
<tr>
    <td><strong>readonly</strong></td>
    <td>false</td>
    <td>Boolean or JEXLExpression</td>
    <td style="text-align: justify;">Evaluate whether the component should be read-only or not.</td>
</tr>
<tr>
    <td><strong>placeHolder</strong></td>
    <td>null</td>
    <td>String or JEXLExpression</td>
    <td style="text-align: justify;">Value of the component when the component has no value.</td>
</tr>
<tr>
    <td><strong>inputType</strong></td>
    <td>null</td>
    <td>Integer</td>
    <td style="text-align: justify;">Android inputType value supported by the component. See <a href="https://developer.android.com/reference/android/text/InputType" target="_blank">Android InputType documentation</a>. 
For example, for PHONE_CLASS, set input_type = 3. In the case of the image, it will display the associated image toolbar:
<ul>
<li>1 camera</li>
<li>2 gallery</li>
<li>4 sketch</li>
<li>3 gallery and camera</li>
<li>5 sketch and camera</li>
<li>6 sketch and gallery</li>
<li>7 camera, gallery, and sketch</li>
</ul>
</td>
</tr>
<tr>
    <td><strong>hasDeleteButton</strong></td>
    <td>true</td>
    <td>Boolean</td>
    <td style="text-align: justify;">Indicates whether the delete button for the component will be displayed.</td>
</tr>
<tr>
    <td><strong>converter</strong></td>
    <td>null</td>
    <td>String</td>
    <td style="text-align: justify;">Instance of the converter to apply to the entity's property.</td>
</tr>
