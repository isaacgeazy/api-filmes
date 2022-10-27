const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(2000, ()=>{
   console.log("Funcionando na porta: http://localhost:2000/")
})