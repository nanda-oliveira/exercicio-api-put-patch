const { response, request } = require('express')
const games = require('../model/gamesmodel')


/*Recurso	Descrição
/jogos	A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo PUT
Recurso	Descrição
/jogos	A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo PATCH
Recurso	Descrição
/jogos	A partir do parâmetro ID para escolher um determinado jogo, vamos alterar o dado de company desse jogo usando o PUT
Recurso	Descrição
/jogos	A partir de um parâmetro para escolher um determinado jogo, usando o PATCH vamos alterar o dado de company desse jogo
*/

const update = (request, response)=>{
    const updateGames = request.body
    const id = parseInt(request.params.id)

    const gamesId = games.map(game => game.id)

    const atualizaId = gamesId.indexOf(id)

    const gameAtualizadocomID = {id, ...updateGames}
    games.splice(atualizaId, 1, gameAtualizadocomID)

    response.status(200).send(games.find(game => game.id === id))
    console.log (games)
}

const atualizar = (request, response) =>{
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)
    const gameParaAtualizar = games.find(game=>game.id == id)


    Object.keys(gameAtualizado).forEach((chave)=>{
        gameParaAtualizar[chave] = gameAtualizado [chave]
    })

    response.status(200).send(gameAtualizado)
}


module.exports = {
    update,
    atualizar
}