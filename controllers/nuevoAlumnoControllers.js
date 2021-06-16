import {Alumno} from '../models/Alumnos.js' //IMPORTAMOS EL MODELO
const guardarNuevoAlumno = async (req, res)=>{

    const {cursoAl, nombreAl, localidadAl, emailAl, empresaAl, contactoEmp, practicas, OBSERVACIONES, movilAl} = req.body;
    //console.log(req.body)

    try{
        await Alumno.create({ //CREAMOS EL ALUMNO
            
            cursoAl, 
            nombreAl,
            movilAl, 
            localidadAl, 
            emailAl, 
            empresaAl, 
            contactoEmp, 
            practicas,
            OBSERVACIONES
        });

        res.redirect('/') //AL TERMINAR REDIRECCIONAMOS A LA PAGINA PRINCIPAL

    }
    catch (error)
    {console.log(error)}

}
export {
    guardarNuevoAlumno
}