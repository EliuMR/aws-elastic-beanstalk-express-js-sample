const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send(`
        <h1>Prueba para el curso de AWS</h1>
        <p>
            Este archivo forma parte de la práctica de integración y entrega continua 
            utilizando AWS. En este ejercicio, se configuró un flujo de trabajo que 
            automatiza el proceso de construcción, prueba y despliegue de la aplicación.
        </p>
        <h2>Tecnologías Utilizadas:</h2>
        <ul>
            <li><strong>AWS CodePipeline</strong>: Se utilizó para orquestar el flujo de trabajo de CI/CD, 
                conectando cada etapa del proceso desde el repositorio de código hasta el despliegue final.</li>
            <li><strong>AWS CodeBuild</strong>: Se configuró para compilar el código y ejecutar pruebas automáticas 
                antes de proceder al despliegue, asegurando que solo el código funcional se implemente.</li>
            <li><strong>Elastic Beanstalk</strong>: Se eligió como el entorno de despliegue, lo que simplifica la gestión 
                de la infraestructura y permite una rápida escalabilidad de la aplicación.</li>
            <li><strong>GitHub</strong>: Sirvió como el repositorio de control de versiones, donde se almacenó y gestionó 
                el código fuente de la aplicación.</li>
        </ul>
        <h2>Fase de Aprobación Manual:</h2>
        <p>
            Se incorporó una fase de aprobación manual en el flujo de trabajo para garantizar que los cambios
            importantes sean revisados y aprobados por un miembro del equipo antes de ser desplegados 
            en producción. Esta medida adicional mejora la calidad del código y minimiza el riesgo de 
            introducir errores en el entorno en vivo.
        </p>
        <p>
            A través de esta práctica, se ha creado un proceso de despliegue más robusto y confiable, 
            que permite iterar rápidamente mientras se mantiene un alto estándar de calidad.
        </p>
    `);
});
app.listen(port);
console.log(`App running on http://localhost:${port}`);
