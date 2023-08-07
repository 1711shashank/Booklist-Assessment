const express = require("express");
const { getBook, getBookById, postBook, updateBook, deleteBook } = require('./controller/dataController');

const app = express();
var cors = require("cors");

app.use(cors({ origin: '*', optionsSuccessStatus: 200, credentials: true }));
app.options("*",cors({ origin: true, optionsSuccessStatus: 200, credentials: true }));

app.use(express.json());

const port = 5000;
app.listen(port, function(){
    console.log('listing in post 5000');
});

app.get('/api/books', getBook);
app.get('/api/books/:id', getBookById);
app.post('/api/books', postBook);
app.put('/api/books/:id', updateBook);
app.delete('/api/books/:id', deleteBook);
