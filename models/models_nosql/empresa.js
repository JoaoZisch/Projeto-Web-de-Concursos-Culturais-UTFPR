const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Empresa = Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    qtdfuncionario: { type: Number, required: true },
    proprietario: { type: String, required: true },
    endereco: { type: String, required: true }
});

module.exports = mongoose.model("Empresa", Empresa)