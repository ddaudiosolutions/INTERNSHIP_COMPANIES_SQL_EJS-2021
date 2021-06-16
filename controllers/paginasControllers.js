import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import tiposPracticas from '../public/tiposPracticas.js'


const paginaInicio = (req, res)=> {
    //res.send('aqui estamos')
    res.render('inicio' )
}

const paginaEmpresas = async (req, res)=> {
    const empresas = await Empresa.findAll()
   // console.log(empresas)
    //empresas.forEach(empresa => console.log(empresa.EMPRESA))
    
    res.render('empresas/listadoempresas', {empresas});
}


const paginaAlumnos = async(req, res)=>{
    const alumnos = await Alumno.findAll()
    //console.log(alumnos)
    //alumnos.forEach(alumno => console.log(alumno.nombreAl))
    res.render('alumnos/listadoalumnos', {
        alumnos
    })
}

const paginaNuevoAlumno = async(req, res)=>{
    
    res.render('alumnos/nuevoAlumno')
}

const paginaNuevaEmpresa = async(req, res)=>{
    
    res.render('empresas/nuevaEmpresa')
}

const paginaDetallesAlumno = async (req, res)=> {
    const {id} = req.params   
    const detallesAlumno = await Alumno.findAll({attributes: ['cursoAl','nombreAl','localidadAl', 'emailAl', 'empresaAl', 'contactoEmp', 'practicas', 'movilAl', 'OBSERVACIONES'], 
        where:{id : id}})
        detallesAlumno.forEach(alumno => console.log(alumno))
    
    res.render('alumnos/mostraralumno',{detallesAlumno})
    
}

const paginaEditarAlumno = async(req, res)=>{
    
        const {id} = (req.params)
        console.log(id)
        let idValueAl = id;
        try
        {const editarDetallesAlumno = await Alumno.findAll({attributes: ['cursoAl','nombreAl','localidadAl', 'emailAl', 
                'empresaAl', 'contactoEmp', 'practicas', 'OBSERVACIONES', 'id'], 
            where:{id: id}})
            editarDetallesAlumno.forEach(alumno=>(console.log(alumno.id)))        
            res.render('alumnos/editaralumno', {editarDetallesAlumno,})}
        catch (error){
            console.log(error)
        }
}

const paginaEditarEmpresa = async(req, res)=> {
    const {id} = req.params
    let idEmp = id;
    try{
        const editardetallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA', 'CONTACTO', 'EMAIL', 'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], where:{id: id}})
        editardetallesEmpresa.forEach(empresa => (console.log(empresa)))
        res.render('empresas/editarempresa', {editardetallesEmpresa})
    }
    catch (error){
        console.log(error)
    }
}

const paginadetallesEmpresa = async (req, res)=> {
    const {id} = req.params
   
        const detallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], where:{id : id}})
        detallesEmpresa.forEach(empresa=>console.log(empresa))
    
    res.render('empresas/mostrarempresa',{detallesEmpresa})
}

export {
    paginaInicio,
    paginaEmpresas,
    paginaAlumnos,
    paginaNuevoAlumno,
    paginaNuevaEmpresa,
    paginaEditarAlumno,
    paginaDetallesAlumno,
    paginaEditarEmpresa,
    paginadetallesEmpresa


}