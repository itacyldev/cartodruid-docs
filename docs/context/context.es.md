# 5. Contextos

# 5.1 Location
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

![img.png](../img/context1.png){: .center }

# 5.2 Date
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

![img.png](../img/context2.png){: .center }