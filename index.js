//configuracao inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD); //Tratar caracteres especiais se houver

//endpoint inicial/rota inicial
app.use(express.json())

//rotas api
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.get('/',(req, res)=>{
    res.status(200).json({message: 'Oi Express'})
})

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

mongoose.set('strictQuery', false);

//conectar no db
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dtrhmhy.mongodb.net/apiCluster?retryWrites=true&w=majority`)
.then( ()=>{
    console.log("mongoose ok");    
    app.listen(3000); //entregar uma porta e se conectou banco inicia o serviço
    console.log("app listen 3000 ok");    
})
.catch((err) => console.log(err))

console.log('console ok')



