const { response, request } = require('express');


const usuariosGet =  (req = request , res = response ) => {

    const { q, nombre } = req.query;
     
    res.json({
        msg: "get API - Controller ",
        q,
        nombre
    })

}

const usuariosPost =  (req, res = response ) => {
    
    const { nombre, edad } = req.body;
     
    res.json({
        msg: "post API - Controller ",
        nombre,
        edad
    })

}
const usuariosPut =  (req, res = response ) => {
     
    const {id} = req.params;

    res.json({
        msg: "put API - Controller ",
        id
    })

}

const usuariosDelete =  (req, res = response ) => {
     
    res.json({
        msg: "delete API - Controller "
    })

}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}