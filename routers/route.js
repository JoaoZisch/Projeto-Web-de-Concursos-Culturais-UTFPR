const express = require('express');
const controllerUsuario = require('../controllers/controllerUsuario');
const controllerConcurso = require('../controllers/controllerConcurso');
const controllerParticipacao = require('../controllers/controllerParticipacao');
const controllerDivulgacao = require('../controllers/controllerDivulgacao');
const route = express.Router();

module.exports = route;

route.get("/home",function(req,res){
        if(req.session.isadm == 1)
        res.render('home', {layout: 'main.handlebars'});
        else
        res.render('home', {layout: 'mainUserNormal.handlebars'});
    

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
    //concurso - CRUD
    route.get("/concursoCreate",controllerConcurso.getCreate);
    route.post("/concursoCreate",controllerConcurso.postCreate);
    route.get("/concursoList",controllerConcurso.getList);

//Controller Usuario Padrão (UP)
    route.get("/concursoListUP",controllerConcurso.getListUP);
    
//Controller participacao
    //participacao - CRUD
    route.get("/participacaoCreate",controllerParticipacao.getCreate);
    route.post("/participacaoCreate",controllerParticipacao.postCreate);
    route.get("/participacaoList",controllerParticipacao.getList);

//InfoConcurso
    route.get("/infoConcurso/:nome",controllerConcurso.getInfoPage);
    route.post("/infoConcurso",controllerConcurso.postCreate);

//Divulgação dos Concursos
    route.get("/divulgaPage",controllerDivulgacao.getCreate);