const Sequelize = require('sequelize')
const sequelize = new Sequelize ('formulario_projeto','root','',{
    host:"localhost",
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("conexao realizada")
}).catch(()=>{
    console.log("Não realizada")
});
module.exports = sequelize;