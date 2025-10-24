const usuariosModel = require('../models/usuariosModel');
const { index } = require('./siteController');

module.exports =

index: (req, res) => {
    res.sendFile('usuarios.html', { root: './views' });
    },
    formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
    },
    login: (req, res) => {
    const { login, senha } = req.body;
    const mensagemLogin= usuariosModel.vgerarMensagem(login, senha);
    res.send(`<h1>${mensagemLogin}</h1>`);
     };