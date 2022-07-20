const { Router } = require('express');
const router = Router();
const {
    getApi,
    getBb,
    postGame,
    getByName,
    byNameApi,
    getId,
    deleteGameBD

} = require("./controllerVideogames");




//Routes:

//-----------------------------http://localhost:3002/videogames----------------------------
// {
//     "name":"grand",
//     "description":"para jugar cada dia jeje ",
//     "released":"07/02/1900",
//     "rating":"5.2",
//     "image": "",
//     "platforms": ["pc","play"],
//     "genres": [1,3,5]
// }
router.post('/', async(req, res, next) => {
    try {
        const { name, description, released, rating, image, platforms, genres } = req.body;
        const newGame = await postGame(name.trim().replace(/\s\s+/g, ' '), description, released, rating, image, platforms, genres)
        res.status(200).json({ data: newGame });

    } catch (error) {
        next(error)
    }
})

//-----------------------------http://localhost:3001/videogames----------------------------

router.get('/', async(req, res, next) => {
    try {

        const apiGames = await getApi();
        const dbGames = await getBb();
        // const allGames = [...dbGames, ...apiGames]

        res.status(200).json({ dataBd:dbGames,dataApi: apiGames })

    } catch (error) {
        next(error)
    }
})

//-----------------------------http://localhost:3001/videogames/database----------------------------

router.get('/database', async(req, res, next) => {
    try {
        const allDb = await getBb()
        res.status(200).json({ data: allDb })
    } catch (error) {
        next(error)
    }
})

//---------------------------------http://localhost:3001/videogames/name?name=grand-theft-auto-v---------------

router.get('/name', async(req, res, next) => {
    try {
        const { name } = req.query;

        console.log(name)
        const byName = await getByName(name);
        res.status(200).json({ data: byName })

    } catch (error) {
        next(error)
    }
})

//-----------------------------http://localhost:3001/videogames/3498----------------------------

router.get('/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const byId = await getId(id)
        console.log(byId)
        res.status(200).json({ data: byId })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async ( req, res, next) => {
    const {id} = req.params
    try {
        const results = await deleteGameBD(id)
        res.status(200).json({data:results})
    } catch (error) {
        next(error)
    }
})

module.exports = router;