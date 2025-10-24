const express = require("express");
const router = express.Router();
const clientesController = require('../controllers/userController');

router.get('/', usuariosController.index);
router.get('/login', usuariosController.formulario);
router.post('/login', usuariosController.login);

module.exports = router;