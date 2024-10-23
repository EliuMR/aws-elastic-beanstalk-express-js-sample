# Laboratorio de Integración y Entrega Continua en AWS

## Resumen

Este laboratorio está diseñado para implementar un flujo de trabajo de integración y entrega continua (CI/CD) utilizando **AWS CodePipeline**, **AWS CodeBuild** y **AWS Elastic Beanstalk**. A través de este ejercicio, se ha creado un proceso automatizado que permite la construcción, prueba y despliegue de una aplicación web, asegurando que los cambios sean revisados y aprobados antes de ser implementados en producción.

## Tecnologías Utilizadas

- **AWS CodePipeline**: Orquesta el flujo de trabajo de CI/CD, conectando cada etapa desde el repositorio de código hasta el despliegue final.
- **AWS CodeBuild**: Compila el código y ejecuta pruebas automáticas para garantizar que solo el código funcional se implemente.
- **AWS Elastic Beanstalk**: Proporciona un entorno de despliegue fácil de usar que simplifica la gestión de la infraestructura y permite la escalabilidad de la aplicación.

## Configuración del Laboratorio

Para que este laboratorio funcione correctamente, es necesario seguir estos pasos de configuración:

1. **Crear un Repositorio en GitHub**:
   - Sube el código fuente de tu aplicación a un nuevo repositorio en GitHub.

2. **Configurar AWS CodePipeline**:
   - Accede a la consola de AWS y navega a **CodePipeline**.
   - Crea un nuevo pipeline y selecciona el repositorio de GitHub como la fuente.
   - Añade una fase de construcción usando **CodeBuild** y configura los comandos necesarios para compilar tu aplicación.

3. **Configurar AWS CodeBuild**:
   - Crea un proyecto de **CodeBuild** que especifique las configuraciones de entorno y los comandos de construcción necesarios (como `npm install`).
   - Asegúrate de que el proyecto tenga los permisos adecuados para acceder al repositorio y a otros servicios de AWS.

4. **Desplegar en Elastic Beanstalk**:
   - Configura Elastic Beanstalk como el entorno de despliegue en tu pipeline.
   - Asegúrate de que el entorno de Elastic Beanstalk esté correctamente configurado para recibir despliegues.

5. **Incorporar una Fase de Aprobación Manual**:
   - Agrega una fase de aprobación manual en CodePipeline para garantizar que los cambios sean revisados por un miembro del equipo antes del despliegue en producción.

## Recursos

Este laboratorio se basó en el tutorial de AWS disponible en el siguiente enlace: [Crear un Pipeline de Entrega Continua](https://aws.amazon.com/getting-started/hands-on/create-continuous-delivery-pipeline/module-five/).

## Ejecución de la Aplicación

Para ejecutar la aplicación, simplemente inicia el servidor con Node.js:

```bash
node app.js
```
