const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerConcurso = require('../controllers/controllerConcurso');
const route = express.Router();

module.exports = route;

route.get("/home",function(req,res){
    if(req.session.login){
        console.log(req.session.login);
        res.render('home');
    }
    else
        res.redirect('/');
});
//Controller Usuario
    //Usuario - Login e Recuperação de Senha
    route.get("/",controllerUsuario.getLogin);
    route.get("/logout",controllerUsuario.getLogout);
    route.post("/login",controllerUsuario.postLogin);
    route.get("/recuperarSenha/:login",controllerUsuario.getRecuperarSenha);
    route.post("/recuperarSenha",controllerUsuario.postRecuperarSenha);
    //Usuario - CRUD
    route.get("/usuarioCreate",controllerUsuario.getCreate);
    route.post("/usuarioCreate",controllerUsuario.postCreate);
    route.get("/usuarioList",controllerUsuario.getList);

//Controller concurso
    //concurso-CRUD
    route.get("/concursoCreate",controllerConcurso.getCreate);
    route.post("/concursoCreate",controllerConcurso.postCreate);
    route.get("/concursoList",controllerConcurso.getList);