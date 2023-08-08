
const express = require('express');
const Model = require('../models/productModel');
const router = express.Router();



//Get all Method
router.get('/product', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;