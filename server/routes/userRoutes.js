const jwt = require('jsonwebtoken');
const express = require('express');
const Model = require('../models/userModel');
const router = express.Router();

//Post Method
router.post('/signup', async (req, res) => {
    const data = new Model({
        fullname:req.body.fullname,
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
        res.status(200).json({
          fullname:dataToSave.fullname,
          username:dataToSave.username,
          token:token})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.post('/login', async (req, res) => {
    try {
        let user =  await  Model.findOne({

            username:req.body.username,
            password:req.body.password
          
            }); 
            if(user){
                const token = jwt.sign(
                    { username: user.username },
                    "Bhr1kut1T0ken",
                    {
                      expiresIn: "2h",
                    }
                  );
                    res.status(200).json({
                      fullname:user.fullname,
                      username:user.username,
                      token:token})
            }
          else{
                res.status(404).json({ error:"Username or Password not found" });
                // stop further execution in this callback
                return;
              }  

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;