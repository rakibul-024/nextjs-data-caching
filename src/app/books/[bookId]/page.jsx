// 'use client'
import React from 'react';


export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();
    return books.map(book => ({ bookId: book.id }));
}

const BookId = async ({ params }) => {
    
    const {bookId} = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    
    const book = await res.json();
    console.log(book);

    return (
        <div>
            <h2>Book Detail:</h2>
            <p>Book Id: {book.id}</p>
            <p>Book Title: {book.title}</p>
            <p>Book Author: {book.author}</p>
            <p>Book Price: {book.price}</p>
            <p>Book Category: {book.category}</p>
        </div>
    );
};

export default BookId;