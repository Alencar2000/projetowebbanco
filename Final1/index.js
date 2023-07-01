const express = require('express')
const mustacheExpress = require('mustache-express')
const bcrypt = require('bcrypt');


const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended: true}))
const User = require('./models/user');
const Conta = require('./models/conta');

app.use(express.json());

app.get('/', async (req, res) => {
    res.render('index.html')
   

});

app.post('/cadastro', async (req, res) => {
    
    await User.create(req.body);
    res.render('cadastro.html')

});

app.post('/login',async(req,res)=>{
    res.render('login.html')
    
})

app.post('/home', async (req, res) => {
    try {
        const pk = req.body.id;
        const user = await User.findByPk(pk);
        
        if (user) {
          const novaConta = await Conta.create({
            numeroConta: req.body.conta,
            senha: req.body.senha,
            cpfid: user.id
          });
          
          console.log('Conta criada:', novaConta);
          res.status(200).send('Conta criada com sucesso!');
        } else {
          console.log('Usuário não encontrado');
          res.status(404).send('Usuário não encontrado');
        }
      } catch (error) {
        console.error('Erro ao criar conta:', error);
        res.status(500).send('Erro ao criar conta');
      }
      res.render('usuario/listar.html')

});


app.post('usuario/usuariocadastro', async (req, res) => {
    
    const usuario = req.body.id
    const user = await User.findByPk(usuario);

    const objeto = await listarView(user);
    res.render("usuario/usuariocadastro.html", {objeto});

});


app.listen(8000, function () {
    console.log('app rodando na porta 8000')
})

  
  
