import React from 'react';
import BookCard from '../components/BookCard';

const GetBooks = async () => {
    const res = await fetch('http://localhost:5000/books' , { cache: 'no-store' });

    if(!res.ok){
        throw new Error('Failed to fetch books');
    }
    return res.json();

};

const BooksPage = async () => {
    const books = await GetBooks();
    console.log(books);
    return (
        <div>
        <h2>Book : {books.length}</h2>
        <div className="grid grid-cols-3 gap-4">
            {
                books.map(book => <BookCard key={book.id} book={book} />

                )
            }
        </div>
        </div>
    );
};

export default BooksPage;