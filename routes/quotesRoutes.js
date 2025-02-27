const express = require('express')
const quoteController = require('../controller/quoteController')

const router = express.Router()

router.get('/create', quoteController.quote_create_get)
router.get('/', quoteController.quote_index)
router.post('/', quoteController.quote_create_post)
router.get('/:id', quoteController.quote_details)
router.delete('/:id', quoteController.quote_delete)
router.get('/api/:value', quoteController.api_selected_quote)
module.exports = router