import express from 'express';

import {
        paginaInicio, 
        paginaEmpresas, 
        paginaAlumnos, 
        paginaNuevoAlumno,
        paginaNuevaEmpresa,
        paginaEditarAlumno,
        paginaDetallesAlumno,
        paginaEditarEmpresa,
        paginadetallesEmpresa
    } from '../controllers/paginasControllers.js'

import {
        guardarNuevoAlumno
    } from '../controllers/nuevoAlumnoControllers.js'

import {
        guardarEdicionAlumno
} from '../controllers/editarAlumnocontrollers.js'

import { 
        guardarNuevaEmpresa 
    } from '../controllers/nuevaEmpresaControllers.js';

import { guardarEdicionEmpresa} from '../controllers/editarempresaController.js'

const router = express.Router();

router.get('/', paginaInicio );

router.get('/alumnos/nuevoalumno', paginaNuevoAlumno);

router.post('/alumnos/nuevoalumno', guardarNuevoAlumno);

router.get('/empresas/nuevaempresa', paginaNuevaEmpresa);

router.post('/empresas/nuevaempresa', guardarNuevaEmpresa)

router.get('/empresas/listadoempresas', paginaEmpresas);

router.get('/alumnos/listadoalumnos', paginaAlumnos);

router.get('/alumnos/mostraralumno/:id', paginaDetallesAlumno)

router.get('/alumnos/editaralumno/:id', paginaEditarAlumno)

router.post('/alumnos/editaralumno/:id', guardarEdicionAlumno)

router.get('/empresas/mostrarempresa/:id', paginadetallesEmpresa)

router.get('/empresas/editarempresa/:id', paginaEditarEmpresa)

router.post('/empresas/editarempresa/:id', guardarEdicionEmpresa)



export default router