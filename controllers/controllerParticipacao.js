const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Participacao = require('../models/models_postgres/participacao');
const Concurso = require('../models/models_postgres/concurso');
const Usuario = require('../models/models_postgres/Usuario');
const controllerConcurso = require('../controllers/controllerConcurso');
const path = require('path');


module.exports = {
    
    async getCreate(req, res) {
        const dados = {
            nome:req.body.nome
        }
        console.log(dados.nome)
        res.render('participacao/participacaoCreate',{layout: 'infoConcursosMenu.handlebars', dados});
    },
    async postCreate(req, res) {
        const login = req.session.login
        console.log(login);
        const concurso = req.body.id
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        const concursoSelecionado = await db.Concurso.findOne( {raw: true, where:{id: concurso}})

        try {
            db.Participacao.create({
                usuarioId: userLogado.id,
                concursoId: concursoSelecionado.id,
                descricao: req.body.descricao,
                qtdVotos: 0,
                imagem: req.imageName,
                nomeParticipante: req.body.nomeParticipante,
                celular: req.body.celular
                
                });
            res.redirect('/home')
        } catch (error) {
            console.log(error)
        }
       
    },
    async getList(req, res) {
        db.Participacao.findAll().then (participacaos => {
            res.render('participacao/participacaoList', {participacaos: participacaos.map(participacaos => participacaos.toJSON())});
        });
    },
    async postVotos(req, res) {

        const participacaoSelecionada = await db.Participacao.findOne( {raw: true,  where: { id: req.body.id}})

        db.Participacao.update(
            { qtdVotos: participacaoSelecionada.qtdVotos + 1 },
            { where: { id: participacaoSelecionada.id} }
          )
          res.redirect('/home')
    },

    async publicarCampeao(req,res){
        db.Divulgacao.create({
            titulo:'Campeão do concurso '+req.body.nomeConcurso,
            texto:req.body.nomeParticipante+' sangrou-se vencedor(a) do concurso '+ req.body.nomeConcurso +'. A Madeireira Clóvis Basilio aprecia a dura dedicação do participante! Parabéns! :D',
            imagem: req.body.imagemCapa
            });
        res.redirect('/home')

    }


}   