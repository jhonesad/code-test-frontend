Las características  principales de este bloque son: 
- Construido con Typescript
- Soporte para enrutamiento con [reac-router](https://reacttraining.com/react-router/web/guides/quick-start). 
- Soporte de [redux](https://react-redux.js.org/introduction/quick-start), para almacenar el estado de la aplicación 
- Soporte para peticiones Http con [axios](https://github.com/axios/axios). Existe una instancia de axios que esta configurada con información que es transversal a todas las peticiones. Cada que se necesite acceder a una Api se recomienda usar esta instancia que se encuentra en **src/config/axios.config.ts**
- Uso de  [variables por ambiente](https://create-react-app.dev/docs/adding-custom-environment-variables/); existén dos archivos .env.development (variables en ambiente desarrollo) y .env.production (variables para producción, reemplazadas cuando se ejecuta la tarea **npm run build**). Adicionalmente puede crear más archivos de variables como está descrito en el link. 
- Soporte de pruebas unitarias con [enzyme](https://enzymejs.github.io/enzyme/)


## Estructura del proyecto

Se identifican 4 carpetas en **src** 

- **test**: carpeta que contiene las pruebas unitarias para los componentes y para los reductores 
- **api**: carpeta que contiene  los clientes http de las api para cada uno de los feature
- **componentes**: en esta carpeta están todos los componentes, cada uno de ellos agrupados dentro de un feature o agregado
- **config**: en esta carpeta están configuraciones generales de la app, actualmente se encuentra la configuración del cliente http
- **redux**: esta carpeta contiene todo lo necesario para administrar el estado a través de redux.


La base de este proyecto fue creada con [create-a-new-react-app](https://es.reactjs.org/docs/create-a-new-react-app.html)

## Para instalar este bloque se deben ejecutar los siguientes comandos

- `npm install` para descargar las dependencias
- `npm start` inicia la aplicación en modo desarrollo, puede abrir el navegador en la siguiente url http://localhost:3000](http://localhost:3000)
- `npm test` para ejecutar las pruebas
- `npm run build` para generar el artefacto distribuible para producción 
