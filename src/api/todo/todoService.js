const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
//Linha necessaria para atualização em todos os Updates
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo