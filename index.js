const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('./'),function (req,res){
    res.send('Rota principal')
}


app.listen(3000, function(){
    console.log('Server UP port 3000')
})