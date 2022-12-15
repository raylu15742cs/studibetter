import express = require("express")
import mongoose = require("mongoose")
import cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors)

require('dotenv').config();

// Set up mongoose connection
const dev_db_url =
  `mongodb+srv://admin:${process.env.DB_Password}@cluster0.titas9x.mongodb.net/?retryWrites=true&w=majority`;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).catch(console.error);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/' , async (req: Request,res:Response) => {
  console.log("were here")
})
app.listen(3000, () => console.log("were live"))
