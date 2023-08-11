const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();

//Post Method
router.post("/signup", async (req, res) => {
  try {
    const dublicateData = await Model.findOne({
      username: req.body.username,
    });
    if (dublicateData) {
      res.status(400).json({ message: "Username already exist" });
    } else {
      const data = new Model({
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
      });
      const dataToSave = await data.save();
      const token = jwt.sign(
        {
          username: dataToSave.username,
          fullname: dataToSave.fullname,
          id: dataToSave._id.toString(),
        },
        "Bhr1kut1T0ken",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        token: token,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.post("/login", async (req, res) => {
  try {
    let user = await Model.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(user)
    if (user) {
      const token = jwt.sign(
        {
          username: user.username,
          fullname: user.fullname,
          id: user._id.toString(),
        },
        "Bhr1kut1T0ken",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(404).json({ message: "Username or Password not found" });
      // stop further execution in this callback
      return;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
