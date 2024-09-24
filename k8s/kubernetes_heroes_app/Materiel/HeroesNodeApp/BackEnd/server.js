import Express from 'express'
import Cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import Router from "./config/routes.js"
import Swagger from "./config/swagger.js"
import Config from "./config/config.js"
import errorHandler from "./middleWare/error-handler.js"
import promBundle  from "express-prom-bundle";
import mongoose from 'mongoose';
import db from './helpers/Db.js';
//MEtrics

const metricsMiddleware = promBundle({includeMethod: true,includePath:true,includeStatusCode:true, customLabels:{project_name: 'marvelWarApi'}});
// environment variables
const configuration =  Config("local");
const AppName = configuration.app;
const PORT = configuration.port;
 
 /*On créé notre constante pour express*/
const app = Express(); 

/*ajout du middleware pour les metrics*/

app.use(metricsMiddleware);

//permet les requêtes Cors de n'importe qu'elle origine avec des credentials
app.use(Cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
 //Gestion des fichiers static (img, css, ...)
app.use(Express.static('public')); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());




//Utilisation d'un routeur pour configurer les routes
app.use('/',Router);
//Swagger
app.use('/api-docs', Swagger);
//Middlewares
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`${AppName} listening on port ${PORT} : http://localhost:${PORT}`);
    console.log("Enjoy Marvel App!"); 
    console.log("Etat mongo:" + mongoose.connection.readyState); 
});