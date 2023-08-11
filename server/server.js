// require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString ="mongodb://127.0.0.1:27017/Bhrikuti";
const userRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/contactRoutes');
const productRouter = require("./routes/productRoutes");
const productIndRouter = require("./routes/productIndRoutes");


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
app.use('/api', productRouter)
app.use('/api',productIndRouter)




app.listen(3001, () => {
    console.log(`Server Started at ${3000}`)
})