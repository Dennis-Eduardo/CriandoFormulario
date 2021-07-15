const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const pagamento = require("./models/Pagamento")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas

app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

//Receber valor
app.post('/add-pagamento', function(req, res){
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.send("Pagamento registrado com sucesso")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi registrado" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>")
})

app.listen(8080);