import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import ejs from 'ejs';
import ejsMate from 'ejs-mate';

import dotenv from 'dotenv'
dotenv.config({path: 'variables.env'})

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));




const app = express()

db.authenticate()
    .then (()=> console.log('Base de datos Conectada'))
    .catch (error => console.log(error))

// AGREGAR BODYPARSER PARA LEER LOS DATOS DEL FORMULARIO
app.engine('ejs', ejsMate)


app.set('view engine', 'ejs');

app.use(express.static('public'))
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));//DEBE IR SIEMPRE ANTES DEL ROUTER

app.use('/', router);

//PUERTO Y HOST PARA LA APP EN DEPLOYMENT
const host = process.env.HOST || '0.0.0.0';

const port = process.env.PORT || 4000;
app.listen(port, host, ()=> {
    console.log(`Console Running on ${port}`)
})