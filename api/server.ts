const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors)

require('dotenv').config();

// Set up mongoose connection
const dev_db_url =
  `mongodb+srv://admin:${process.env.DB_Password}@cluster0.titas9x.mongodb.net/?retryWrites=true&w=majority`;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(3000, () => console.log("were live"))
