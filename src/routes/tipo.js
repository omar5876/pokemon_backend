const {Router} = require('express')
const { getTypes } = require('../controllers/tipoControllers')
const router = Router()

router.get('/', getTypes)

module.exports = router
