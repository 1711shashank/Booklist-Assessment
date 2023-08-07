const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const db_link = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
mongoose.connect(db_link)
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    })

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
});

const db = mongoose.model('bookSchema', bookSchema);
module.exports = { db };