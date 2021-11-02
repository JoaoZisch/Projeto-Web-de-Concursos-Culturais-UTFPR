const Empresa = require('../models/models_nosql/empresa');

module.exports = {
    async getCreate(req, res) {
        res.render('empresa/empresaCreate');
    },
        async postCreate(req, res) {
            const {nome, tipo, qtdfuncionario, proprietario, endereco} = req.body;
            const empresa = new Empresa({nome, tipo, qtdfuncionario, proprietario, endereco});
            await empresa.save();
            res.redirect('/home');
        res.redirect('/home');
    },
    async getList(req, res) {
        Empresa.find().then((empresas) => {
            res.render('empresa/empresaList', { empresas: empresas.map(empresas => empresas.toJSON())});
        });
    }
}
