const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routers/auth');
const itemRouter = require('./routers/items');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let corsOpts = {
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true
};

app.use(cors(corsOpts));

app.use('/auth', authRouter);
app.use('/items', itemRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on localhost:${process.env.PORT}`);
});