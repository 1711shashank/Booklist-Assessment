import React, { useEffect, useState } from 'react';
import { bookArray } from '../utility/utility';
import SearchBar from './SearchBar';
import BookTable from './BookTable';
import axios from 'axios';
import './Body.css';

const Body = () => {

    const [bookList, setBookList] = ([bookArray]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books');
            const data = response.data;
            setBookList(data);

        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const filterBook = bookList.filter((book) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        return (
            book.title.toLowerCase().includes(lowerCaseSearchText) ||
            book.author.toLowerCase().includes(lowerCaseSearchText)
        );
    });

    return (
        <>
            <div className='body'>
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
                <BookTable books={filterBook} />
            </div>
        </>
    );
};

export default Body;
