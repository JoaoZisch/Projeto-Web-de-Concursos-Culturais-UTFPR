const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerEmpresa = require('../controllers/controllerEmpresa');
const route = express.Router();

module.exports = route;

//Home
    route.get("/home",function(req,res){res.render('home')});
    
//Controller Usuario
    //Usuario - Login e Recuperação de Senha
    route.get("/",controllerUsuario.getLogin);
    route.post("/login",controllerUsuario.postLogin);
    route.get("/recuperarSenha/:login",controllerUsuario.getRecuperarSenha);
    route.post("/recuperarSenha",controllerUsuario.postRecuperarSenha);
    //Usuario - CRUD
    route.get("/usuarioCreate",controllerUsuario.getCreate);
    route.post("/usuarioCreate",controllerUsuario.postCreate);
    route.get("/usuarioList",controllerUsuario.getList);

//Controller empresa
    //empresa-CRUD
    route.get("/empresaCreate",controllerEmpresa.getCreate);
    route.post("/empresaCreate",controllerEmpresa.postCreate);
    route.get("/empresaList",controllerEmpresa.getList);