const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
    _id: String,
    codEditora: Number,
    titulo: String,
    resumo: String,
    autores: [String]
});

const Livro = mongoose.model("livros", LivroSchema);

module.exports = Livro;