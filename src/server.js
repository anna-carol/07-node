const express = require('express');
const tarefaController = require('./controllers.js/tarefa-controllers');
const usuarioController = require('./controllers.js/usuario-controllers');
const app = express()
const port = 3000

tarefaController(app);
usuarioController(app);

app.get('/', (req, res) => {
  res.send(
      '<h1>bem vindo a TO DO LIST</h1>'
    )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
