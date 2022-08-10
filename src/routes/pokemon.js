
const {Router} = require('express')
const { getPokemons, getPokemonByName, getPokemonById, postPokemon, deletePokemon, updatePokemon } = require('../controllers/pokemonControllers')

const router = Router()



router.get('/', getPokemons)
router.get('/nombre', getPokemonByName)
router.get('/:id', getPokemonById)
router.post('/', postPokemon)
router.delete('/:id', deletePokemon)
router.put('/update/:id', updatePokemon)


module.exports = router