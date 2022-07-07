const { Router } = require('express');
const router = Router();
const {Platforms} = require('../../db')

const {
    getAllPlatforms,

} = require('./controllerPlatforms');

router.get('/', async (req, res) => {
    
    try {
        const allPlatforms = await Platforms.findAll()
        res.status(200).json({data:allPlatforms})
    } catch (error) {
        res.status(500).json({message: error})
    }
    
})

module.exports = router;

