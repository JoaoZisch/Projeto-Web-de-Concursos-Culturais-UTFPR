const usuario = require('./usuario');
//usuario.sync({force:true});   //Deixa comentado isso, se não via resetar a tabela no banco.

usuario.create({username:"Neymar",
senha: "ousadia"})