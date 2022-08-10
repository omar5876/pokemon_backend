const axios = require("axios")
const {Tipo} = require("../db")

const getTypesapi = async () => {
    const types = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
    //console.log(types)
    return types
    
}

let typesApi = getTypesapi()
const getTypes = async (req, res) => {
    try {
        const types = await typesApi
        //console.log(types)
        const typesFilter = types.map((e) =>({nombre: e.name})) //obteniendo solo el nombre del tipo
        //console.log(typesFilter)
        //await Tipo.bulkCreate(typesFilter) //gurdandolos en la DB
        let createTypes = typesFilter.map(async(e, key) => {
            key++
            return await Tipo.findOrCreate({where: {id: key, nombre: e.nombre}})//finOrCreate, para que no se repitan
        })
        await Promise.all(createTypes)
        const typesDB = await Tipo.findAll()  //trayendolos de la DB
        res.send(typesDB)
        
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = {
    getTypes,
}