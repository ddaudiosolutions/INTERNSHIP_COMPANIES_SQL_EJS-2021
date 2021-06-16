import {Empresa} from '../models/Empresas.js';

const guardarNuevaEmpresa = async (req, res)=>{
    const {EMAIL, TELEFONO, PRACTICAS,OBSERVACIONES,CONTACTO, EMPRESA} = req.body

    try{
        await Empresa.create({
            EMAIL,
            TELEFONO,
            PRACTICAS,
            OBSERVACIONES,
            CONTACTO,
            EMPRESA

        })
    }
    catch(error)
    {console.log(error)}
    console.log(req.body)
    res.redirect('/') //AL TERMINAR REDIRECCIONAMOS A LA PAGINA PRINCIPAL
}
export {
    guardarNuevaEmpresa
}




   

    

        

    