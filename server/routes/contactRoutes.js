const express = require('express');
const Model = require('../models/contactModel');
const router = express.Router();

//Post Method
router.post('/contact', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/contact', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;