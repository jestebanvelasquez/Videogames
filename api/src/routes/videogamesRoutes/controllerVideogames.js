const { Videogame, Genre, Platform } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const axios = require('axios');


//------------------------------------metodo post: New-Game ---------------------------------
const postGame = async(name, description, released, rating, image, platforms, genres) => {
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

const getApi = async() => {
    let allpages = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    let nextUrl = allpages.data.next
    let dataApi = [...allpages.data.results];
    let i = 1;
    while (i <= 5) {
        let api = await axios.get(nextUrl)
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

const getBb = async() => {
    try {
        const byDb = await Videogame.findAll({

            include: [{
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Platform,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })

        const gamesDb = byDb.map(el => {
            return {
                id: el.id,
                name: el.name,
                image: el.image,
                rating: el.rating,
                platforms: el.Platforms.map(el => el.name),
                genres: el.Genres.map(el => el.name),
                createDB: el.createDB


            }
        })

        return gamesDb

    } catch (error) {
        return error
    }
}

//------------------------------------metodo get: Name ---------------------------------

const byNameDb = async(name) => {
    try {
        let dbName = await Videogame.findAll({
            where: {
                name: {
                    // [Op.substring]:name,
                    [Op.iLike]: `%${name}%`
                },
            },
            include: [{
                    model: Genre,
                    through: { attributes: [] },

                },
                {
                    model: Platform,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ],
        })

        const gamesDb = dbName.map(el => {
            return {
                id: el.id,
                name: el.name,
                image: el.image,
                rating: el.rating,
                platforms: el.Platforms.map(el => el.name),
                genres: el.Genres.map(el => el.name),
                createDB: el.createDB

            }
        })


        return gamesDb;
    } catch (error) {
        return error
    }
}

const byNameApi = async(name) => {
    // const element = name.toLowerCase;
    try {
        const apiAll = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)

        const apiName = apiAll.data.results.map((game) => {
            return {
                id: game.id,
                name: game.name,
                slug: game.slug,
                image: game.background_image,
                rating: game.rating,
                genres: game.genres.map(el => el.name)

            }
        })

        return apiName;

    } catch (error) {
        return 'no hay datos con ese nombre'
    }

}

const getByName = async(name) => {
    try {
        let api = await byNameApi(name);
        let dataBase = await byNameDb(name);
        if (api) return dataBase.concat(api)

    } catch (error) {
        return error
    }
}

//------------------------------------metodo get: ID ---------------------------------

const getId = async(id) => {
    // console.log(id.length)
    try {
        if (id.length === 36) {

            let idBd = await Videogame.findByPk(id, {
                include: [{
                        model: Genre,
                        through: { attributes: [] },

                    },
                    {
                        model: Platform,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }
                ]
            })
            idBd = {
                id: idBd.id,
                name: idBd.name,
                image: idBd.image,
                rating: idBd.rating,
                description: idBd.description,
                platforms: idBd.Platforms.map(el => el.name),
                genres: idBd.Genres.map(el => el.name),
                createDB: idBd.createDB


            }

            // console.log(idBd)
            return idBd;

        } else {
            let idApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                // console.log(idApi)
            idApi = {
                id: idApi.data.id,
                name: idApi.data.name,
                image: idApi.data.background_image,
                description: idApi.data.description_raw,
                rating: idApi.data.rating,
                released: idApi.data.released,
                genres: idApi.data.genres.map(el => el.name),
                platforms: idApi.data.platforms.map(el => el.platform.name)

            }

            return idApi;

        }

    } catch (error) {
        return error
    }

}


const deleteGameBD = async(id) => {
    try {

        await Videogame.destroy({
            where: { id }
        })
    } catch (error) {
        return error
    }
}


module.exports = {
    getApi,
    getBb,
    getByName,
    getId,
    postGame,
    byNameApi,
    deleteGameBD

}

// //-------------------------------- Put/:id = http://localhost:3002/dogs/9 --------------------------------//

// router.put('/:idDog', async (req, res, next) => {
//     const idDog = req.params.idDog;

//     const { name, life_span, weight, height, image } = req.body
//     try {
//         let UpdDog = await Dog.update({
//             name,
//             life_span,
//             height,
//             weight,
//             image
//         }, {
//             where: {
//                 id: idDog
//             }
//         })

//         res.status(200).json({ data: UpdDog })

//     } catch (error) {
//         next(error);
//     }
// })

// //-------------------------------- Delete/:id = http://localhost:3002/dogs/idDb --------------------------------//

// router.delete('/:id', async (req, res, next) => {
//     const id = req.params.id
//     try {
//         await Dog.destroy({
//             where: { id }
//         })
//         res.status(204).json({ data: 'ok' })

//     } catch (error) {
//         next(error)
//     }
// })