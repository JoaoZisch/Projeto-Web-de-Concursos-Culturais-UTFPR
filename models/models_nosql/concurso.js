const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Concurso = Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
});

module.exports = mongoose.model("Concurso", Concurso)