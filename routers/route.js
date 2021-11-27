const db = require('../config/db_sequelize');
const express = require('express');
const multer = require('multer');
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


const storageB = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "public/uploads/")
    },
    filename: async (req, file, cb) =>  {
  
        idConcurso = req.body.id
        if(req.body.tipoMidia !== 'texto'){
            var qtdPart = await db.Participacao.count()
            console.log(qtdPart)
            if(qtdPart >= 1){
                console.log("prima")
                qtdPart = qtdPart + 1;
            }else if(qtdPart < 1){
                console.log("sec")
                qtdPart = 1
            }else{
                console.log("tri")
                qtdPart = 1
            }
            console.log(qtdPart)
            console.log(req.body.tipoMidia)
            if(req.body.tipoMidia === 'imagem'){
                req.imageName = idConcurso+'0690'+qtdPart+'.jpg'
            }else{
                req.imageName = idConcurso+'0690'+qtdPart+'.mp4'
            }
            cb(null, req.imageName)
        }else{
            cb(null, null)
        }   
    },
        
})

const storageA = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "public/uploads/")
    console.log("destination")
    },
    filename: async (req, file, cb) => {
        console.log("filename")
    var qtdConq = await db.Concurso.count()
    console.log(qtdConq)
    if(qtdConq >= 1){
        console.log("prima")
        qtdConq = qtdConq + 1;
    }else if(qtdConq < 1){
        console.log("sec")
        qtdConq = 1
    }else{
        console.log("tri")
        qtdConq = 1
    }

    req.imageName = qtdConq+'0690.jpg'
    cb(null, req.imageName)
    },
    })

const uploadB = multer({storage: storageB})
const uploadA = multer({storage: storageA})


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
    route.post("/concursoCreate",uploadA.single('imagemCapa'),controllerConcurso.postCreate);
    route.get("/concursoList",controllerConcurso.getList);

//Controller Usuario Padrão (UP)
    route.get("/concursoListUP",controllerConcurso.getListUP);
    
//Controller participacao
    //participacao - CRUD
    route.get("/participacaoCreate",controllerParticipacao.getCreate);
    route.post("/participacaoCreate",uploadB.single('imagem'),controllerParticipacao.postCreate);
    //route.post("/paritcipacaoEdit",upload.single('imagem'),controllerParticipacao.postEdit);
    route.get("/participacaoList",controllerParticipacao.getList);
    route.post("/participacaoList/votar",controllerParticipacao.postVotos);
    route.post("/participacaoList/publicarCampeao",controllerParticipacao.publicarCampeao);

    //InfoConcurso :D
    route.get("/infoConcurso/:nome",controllerConcurso.getInfoPage);
    //route.post("/infoConcurso/:nome",controllerConcurso.postCreate);

    //Divulgação dos Concursos
    route.get("/divulgaPage",controllerDivulgacao.getCreate);
    route.get("/divulgaCreate",controllerDivulgacao.getDivulgaCreate);
    route.post("/divulgaCreate",controllerDivulgacao.postDivulgaCreate);
