# **PROJECT KMPACTY BACK . API actividades extraescolares y campamentos y compañias que los organizan.**

En este proyecto se ha creado una API de actividades extraescolares y campamentos y compañias que los organizan.  

La aplicacion esta desplegada en un entorno productivo en la siguiente url: [https://kmpactyback.onrender.com/](https://kmpactyback.onrender.com/)


## INSTALACIÓN:

Para este proyecto se ha utiliza Node.js, Express, Mongoose para trabajar con la base de datos de Mongodb, firebase-admin para la autenticación con Firebase, y se han habilitado las Cors. 

Ejecutar los siguientes comandos en la raiz del proyecto:


1. Instalacion de paquetes

```
npm install
```

2. Comando para levantar el servidor 
```
npm start
```

3. Crear fichero `.env` con la siguiente configuracion:

- MONGO_URI: URI para enlazar con la base de datos proporcionada por MONGO ATLAS. 
- PORT: Puerto en el que queremos abrir el proyecto.

Las siguientes variables nos las proporciona Firebase.
- FIREBASE_TYPE
- FIREBASE_PROJECT_ID
- FIREBASE_PRIVATE_KEY_ID
- FIREBASE_PRIVATE_KEY
- FIREBASE_CLIENT_EMAIL
- FIREBASE_CLIENT_ID
- FIREBASE_AUTH_URI
- FIREBASE_TOKEN_URI
- FIREBASE_AUTH_PROVIDER_X509_CERT_URL
- FIREBASE_CLIENT_X509_CERT_URL
- FIREBASE_UNIVERSE_DOMAIN


## DESCRIPCIÓN:

**RUTAS**

Las rutas son las siguientes. 

/activities para las actividades
/company para las compañias. 

- `GET /activities`: Devuelve todas las actividades. Cada actividad tiene un enlace a su página de detalle. También permiten realizar filtros para que devuelva actividades según filtros indicados. 
- `GET /activities/by-company`: Devuelve las actividades de cada compañia.
- `GET /activities/:id`: Devuelve el detalle de una actividad.
- `POST /activities`: Crea una nueva actividad.
- `PUT /activities`: Actualiza una actividad.
- `DELETE /activities/:id`: Elimina una actividad.

- `GET /company`: Devuelve todas las compañias o empresas.
- `POST /company`: Crea una nueva compañia o empresa.
- `PUT /company`: Actualiza una compañia o empresa.


**RESPUESTAS**

Esas rutas devuelven una respuesta en formato JSON.

**DISTRIBUCIÓN DE CARPETAS DEL PROYECTO.**

- config. Es donde esta los archivos de configuración de la base de datos y de firebase. 
- controllers. Donde están los controladores de actividades y compañias.
- middlewares. Con el archivo auth.js que utilizaremos para checkear si esta logado y dar acceso si procede. 
- models. Con el archivo Activity.js y Company.js donde estan los esquemas de los modelos.
- routes. Con los archivos activityRoutes.js y companyRoutes.js donde están las rutas CRUD para las actividades y compañias. Estos llaman a los metodos de los controladores. 
-index.js. Donde se inicializa el servidor. 

