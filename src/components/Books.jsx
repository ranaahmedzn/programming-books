import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const books = useLoaderData()
    console.log(books.books[0])

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 px-3 lg:px-8'>
                {
                    books.books.map(book => <Book
                    key={book.isbn13}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;