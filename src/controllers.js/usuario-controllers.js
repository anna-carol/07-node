function usuario(app){
app.get('/usuario', (req, res) => {
    res.send(
        'Rota ativada com GET e recursos usuarios: valores de tarefas devem ser retornados'
      )
  })

  app.post('/usuario', (req, res) => {
    res.send(
        'Rota POST de usuario ativada: usuario adicionado ao banco de dados'
      )
})
};

module.exports = usuario;