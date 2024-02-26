# Project Structure
<div style="text-align: justify;">
<p>Based on the principle of <strong>Convention over Configuration</strong> to obtain a solution for rapid and simple prototyping.</p>

<p>Contents of the project folder:</p>
</div>
<table border="1">
    <tbody>
        <tr>
            <td rowspan="3"><strong>/data/</strong></td>
            <td colspan="2">Contains XML configuration files for repositories and database files and project data or properties files (repositories).</td>
        </tr>
        <tr>
            <td><strong>/data/repos.xml</strong></td>
            <td>Project repositories configuration.</td>
        </tr>
        <tr>
            <td><strong>/data/*.sqlite</strong></td>
            <td>Database files.</td>
        </tr>
        <tr>
            <td rowspan="2"><strong>/forms/</strong></td>
            <td><strong>/forms/*.xml</strong></td>
            <td>XML configuration files for forms.</td>
        </tr>
        <tr>
            <td><strong>/forms/scripts/*.js</strong></td>
            <td>*.js files with JavaScript functions.</td>
        </tr>
        <tr>
            <td rowspan="2"><strong>/jobs/</strong></td>
            <td><strong>/jobs/*.json</strong></td>
            <td>JSON files for tasks invoked from forms, such as documentation generation.</td>
        </tr>
    </tbody>
</table>

