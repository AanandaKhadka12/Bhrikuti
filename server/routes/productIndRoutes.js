const express = require('express');
const Model = require('../models/productModel');
const router = express.Router();

router.get('/productind/:id', async (req, res) => {
    try {
        const data = await Model.find({id:req.params.id});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;