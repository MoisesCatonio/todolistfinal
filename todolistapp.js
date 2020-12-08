const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

var fs = require('fs');
var dados = fs.readFileSync('tarefas.json',)
var tarefas = JSON.parse(dados);

//Configurações
  //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    function finished(error){
      console.log("Tudo feito")
    }
//Rotas
  app.get('/cadastro', function(req, res){
    res.render("form")
  })

  app.get('/home', function(req, res){
    arrayChaves = [];
    arrayValores = [];
    for(var i in tarefas)
      arrayChaves.push([i]), arrayValores.push(tarefas[i])
    res.render("home", {chaves: arrayChaves, valores: arrayValores})
  })

  app.post('/add', function(req, res){
    var atividade = req.body.tarefa
    var prioridade = req.body.prioridade
    tarefas[atividade] = prioridade
    fs.writeFile('tarefas.json', JSON.stringify(tarefas), finished)
    res.render("cadastrada")
  })

//Página principal da aplicação
app.get("/", function(req, res){
  arrayChaves = [];
  arrayValores = [];
  for(var i in tarefas)
    arrayChaves.push([i]), arrayValores.push(tarefas[i])
  res.render("home", {chaves: arrayChaves, valores: arrayValores})
})

//Inclua para usar o css da pasta
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.post("/deletada", function(req, res){
  var chave = req.body.chave_cartao
  delete tarefas[chave];
  fs.writeFile('tarefas.json', JSON.stringify(tarefas), finished)
  res.render("deletada")
})

app.post("/graficos", function(req, res){
  var total_afazer = req.body.afazer_total
  var total_fazendo = req.body.fazendo_total
  var total_realizado = req.body.realizado_total
  res.render("graficos",{afazer: total_afazer, fazendo: total_fazendo, realizado: total_realizado})
})

//Essa linha sempre tem de estar no fim do arquivo
app.listen(8080, function(){console.log("Servidor rodando na URL: http://localhost:8080")})
