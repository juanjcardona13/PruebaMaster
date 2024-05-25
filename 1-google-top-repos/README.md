# Google Top Repositories

## Descripción
Esta aplicación Node.js extrae y muestra los 10 repositorios con más estrellas de Google en GitHub utilizando tanto la API REST como la API GraphQL de GitHub.

## Requisitos
Para ejecutar esta aplicación, necesitarás Node.js y npm instalados en tu máquina. Esta aplicación también requiere un token de acceso personal de GitHub para autenticar las solicitudes a la API de GitHub.

## Configuración
1. Clona el repositorio a tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias necesarias.
3. Reemplaza `'tu_token_de_github_aquí'` con tu token de acceso personal de GitHub.

## Uso
Para ejecutar la aplicación, utiliza el siguiente comando en la terminal:

```
npm start
```

Este comando compilará el código TypeScript y luego ejecutará el script resultante. La salida mostrará los 10 repositorios de Google con más estrellas en GitHub.

## Desarrollo
- **Node.js**: Runtime de JavaScript para el servidor.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **Axios**: Cliente HTTP basado en promesas para hacer solicitudes a las APIs.
- **GitHub API**: API REST y GraphQL de GitHub para obtener información sobre los repositorios.