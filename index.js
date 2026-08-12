const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors')
require('dotenv').config();
const APIRouter = require('./Routers/API.router');
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors())

xapp.listen(PORT, async () => {
    try {
        await connectToMongo();
        console.log(`Server @ port ${PORT}`)
    } catch (error) {
        console.log({ msg: 'Error while listening the server', error })
    }
})


app.listen(PORT, async () => {
    try {
        await connectToMongo();
        console.log(`Server @ port ${PORT}`)
    } catch (error) {
        console.log({ msg: 'Error while listening the server', error })
    }
})
