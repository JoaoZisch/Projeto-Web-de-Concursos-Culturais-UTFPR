const Concurso = require('../models/models_nosql/concurso');

module.exports = {
    async getCreate(req, res) {
        res.render('concurso/concursoCreate');
    },
        async postCreate(req, res) {
            const {nome, descricao} = req.body;
            const concurso = new Concurso({nome, descricao});
            await concurso.save();
            res.redirect('/home');

    },
    async getList(req, res) {
        Concurso.find().then((concursos) => {
            res.render('concurso/concursoList', { concursos: concursos.map(concursos => concursos.toJSON())});
        });
    }
}
