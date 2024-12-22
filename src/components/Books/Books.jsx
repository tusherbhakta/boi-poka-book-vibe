import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='my-14'>
            <h2 className='text-5xl font-bold text-center mb-10'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book key={books.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;