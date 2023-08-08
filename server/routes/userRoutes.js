const jwt = require('jsonwebtoken');
const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();

//Post Method
router.post('/login', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
           // Create token
    const token = jwt.sign(
        { username: dataToSave.username },
        "Bhr1kut1T0ken",
        {
          expiresIn: "2h",
        }
      );
        res.status(200).json({token:token})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/login', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;