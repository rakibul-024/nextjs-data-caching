import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {

  const{id, title, author, price, category, image, description} = book;
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{book.id}</h2>
    <p> Name: {book.title}</p>
    <p> Author: {book.author}</p>
    <p> Category: {book.category}</p>
    <p>Price: {book.price} tk</p>
    <p> Description: {book.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Link href={`/books/${book.id}`}>
         <button className="btn ">Show Detail</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;