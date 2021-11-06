const routes = require('./routers/route');
const handlebars = require('express-handlebars');
const express = require('express');
const concurso = require('./models/models_postgres/concurso');

const app = express();
const unirest = require("unirest");
const session = require('express-session');
const cookieParser = require('cookie-parser'); 
app.use(cookieParser()); 
app.use(session({secret:'textosecreto',saveUninitialized: true,cookie:{maxAge:30*60*1000}}))

app.engine('handlebars', handlebars ({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);


app.use(
    express.urlencoded({
      extended: true
    })
)

app.listen(8081, function(){
        console.log("Servidor no http://localhost:8081")
});