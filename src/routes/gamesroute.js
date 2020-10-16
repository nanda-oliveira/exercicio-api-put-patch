const express = require('express')
const router = express.Router()
const games = require('../controller/gamescontroller')
const cors = require('cors')


/**
@router PUT 
@desc altera o qualquer chave do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id
**/
router.put('/games/:id', cors(), games.update)


/** 
@router PATCH
@desc altera o item do game a partir do id
@access Public 
@endpoint http:/localhost:porta/games/:id **/

router.patch('/games/:id', cors(), games.atualizar)



module.exports = router