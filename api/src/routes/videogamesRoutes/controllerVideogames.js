const {Videogame, Genre, Platform} = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const {Op} = require('sequelize');
const axios = require('axios');


//------------------------------------metodo post: New-Game ---------------------------------
const postGame = async (name, description, released, rating, image, platforms, genres) =>{
    const newGame = await Videogame.create({
        name,
        description,
        released,
        rating,
        image,
        // platforms
    })
    // console.log(platforms)
    // await newGame.addPlatforms(platforms)
    await newGame.addPlatforms(platforms)
    await newGame.addGenres(genres)
    return newGame //'created!'
}

//------------------------------------metodo get: All-Api ---------------------------------

const getApi = async () => {
        let allpages = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        let nextUrl = allpages.data.next
        let dataApi = [ ...allpages.data.results];
        let i = 1;
            while (i <= 5) {
                let api =await axios.get(nextUrl)
                dataApi.push(api.data.results)
                nextUrl = api.data.next
                i++
            }
            dataApi = dataApi.flat()

            dataApi = dataApi.map((game) => {

                return {
                    id: game.id,
                    name: game.name.toLowerCase(),
                    slug: game.slug,
                    image: game.background_image,
                    rating: game.rating,
                    platforms: game.platforms.map((el) => el.platform.name),
                    genres: game.genres.map((el) => el.name),
                };
            });


    return dataApi;
}

//------------------------------------metodo get: DataBase ---------------------------------

const getBb = async () =>{
    try {
        const byDb = await Videogame.findAll({
            
            include: [
                {
                    model: Genre,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    } 
                },
                {
                    model: Platform,
                    attributes:['name'],
                    through:{
                        attributes:[]
                    }
                }
            ]
        })
    
        const gamesDb = byDb.map(el => {
            return {
                id:el.id,
                name: el.name,
                image: el.image,
                rating:el.rating,
                platforms: el.Platforms.map(el => el.name),
                genres: el.Genres.map(el => el.name)
    
            }
        }) 
    
        return gamesDb
        
    } catch (error) {
        return error
    }
}

//------------------------------------metodo get: Name ---------------------------------

const byNameDb = async (name) => {
    try {
        let dbName = await Videogame.findAll({
            where: {
                name: {
                    // [Op.substring]:name,
                    [Op.iLike]: `%${name}%` 
                },
            },
            include: [
                {
                    model: Genre,
                    through: { attributes: [] },
                    
                }
            ],
        })
        return dbName;
    } catch (error) {
        return error
    }
}

const byNameApi = async (name) => {
    // const element = name.toLowerCase;
    try {
        const apiAll = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)

        const apiName = apiAll.data.results.map((game) => {
            return{
                id: game.id,
                name: game.name,
                slug:game.slug,
                image: game.background_image,
                rating: game.rating,
                Genres:  game.genres.map(el => el.name) 
                
            }
        } )
        
        return apiName;
        
    } catch (error) {
        return 'no hay datos con ese nombre'
    }

}

const getByName = async (name) =>{
    try {
        let api = await byNameApi(name);
        let dataBase = await byNameDb(name);
        if (api) return dataBase.concat(api)
    
    } catch (error) {
        return error
    }
}

//------------------------------------metodo get: ID ---------------------------------

const getId = async (id) => {
    try {
        if(id.length > 16) {
            
            let idBd = await Videogame.findByPk(id,{
                include: [
                    {
                        model: Genre,
                        through: { attributes: [] },
                        
                    }
                ]
            })
            console.log(idBd)
            return idBd;

        }else{
            let idApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            return idApi.data;

        }
        
    } catch (error) {
        return error
    }

}


module.exports={
    getApi,
    getBb,
    getByName,
    getId,
    postGame,
    byNameApi

}


//endPoints: 
// forName
// https://api.rawg.io/api/games/grand-theft-auto-v?key=c2ab33558d7c4e03924b023c552bdd90

// getAll
// https://api.rawg.io/api/games?key=c2ab33558d7c4e03924b023c552bdd90

// forId
// https://api.rawg.io/api/games/5?key=c2ab33558d7c4e03924b023c552bdd90

