const { db } = require('../models/mongoDB');

module.exports.getBook = async function getBook(req, res) {
    try {
        const books = await db.find();
        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
}

module.exports.getBookById = async function getBookById(req, res) {
    try {
        const book = await db.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch the book' });
    }
}

module.exports.postBook = async function postBook(req, res) {
    try {
        const newBook = await db.create(req.body);
        res.status(201).json(newBook);

    } catch (err) {
        res.status(500).json({ error: 'Failed to create the book' });
    }
}
module.exports.updateBook = async function updateBook(req, res) {
    try {
        const updatedBook = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update the book' });
    }
}
module.exports.deleteBook = async function deleteBook(req, res) {
    try {
        const deletedBook = await db.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete the book' });
    }
}


