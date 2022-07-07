const {Videogame, Platforms} = require('../../db');

const  {
    getApi,
}  = require("../videogamesRoutes/controllerVideogames");

const getAllPlatforms = async () =>{
    try {
        const allPlatforms = await Platforms.findAll()
        if(!allPlatforms.length) {
            let platforms = await getApi()
            platforms = platforms.map(el => el.platforms).flat()
            platforms = [...new Set(platforms.sort())]
            platforms = platforms.map(el => {return {name : el}})

            await Platforms.bulkCreate(platforms)
        }
    } catch (error) {
        return error
    }
}



module.exports = {
    getAllPlatforms,
}