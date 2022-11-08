
const express = require('express')
const body = require('body-parser')
const cors = require('cors')

const app = express();

const dotenv = require('dotenv').config()

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));

const db = require('./app/modle')