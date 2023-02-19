//configuracao inicial
const express = require('express');
const app = express();

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//endpoint inicial/rota inicial
app.get('/',(req, res)=>{
    //mostrar requisicao

    res.json({message: 'Oi Express'})
})

//entregar uma porta
app.listen(3000)