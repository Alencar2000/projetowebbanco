const User = require('../models/user')



function listarView(req, res){
    var user = req.body
   User.findOne().then((user)=>{
        res.render("usuario/cadastro.html", {user});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("usuario/usuariocadastro.html", {erro});
    })
}
function cadastrarView(req, res){
    res.render("usuario/usuariocadastro.html", {});
}

function cadastrarUsuario(req, res){
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf
    }
    
    User.create(usuario).then((result)=>{
        res.render("usuario/usuariocadastro.html", {usuario});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("usuario/usuariocadastro.html", {erro});
    })
}


function editarView(req, res){
    let id = req.params.id
    let usuario;
    Usuario.findByPk(id).then(function(usuario){
        res.render("usuario/editar.html", {usuario});
    })
}

function editarPessoa(req, res) {
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
    }
    Usuario.update(
      usuario,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("usuario/editar.html", {usuario, sucesso});
    })
    .catch(function (erro) {
        res.render("usuario/editar.html", {usuario, erro})
    });

}

module.exports =  {
    cadastrarView,
    cadastrarUsuario,
    listarView,
    editarView,
    editarPessoa,
};