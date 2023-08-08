// require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString ="mongodb://localhost:27017/Bhrikuti";
const userRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/contactRoutes');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());


app.use('/api', userRouter)
app.use('/api', contactRouter)



app.listen(3001, () => {
    console.log(`Server Started at ${3000}`)
})