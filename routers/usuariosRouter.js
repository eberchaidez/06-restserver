

const { Router } = require('express');
const userController = require('../controllers/usuariosController');

const router = Router();

router.get('/', userController.usuariosGet );

router.put('/:id', userController.usuariosPut );

router.post('/', userController.usuariosPost );

router.delete('/', userController.usuariosDelete );













module.exports= router;