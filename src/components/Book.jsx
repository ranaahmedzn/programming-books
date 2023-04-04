import React from "react";

const Book = ({ book }) => {
  const { title, subtitle, price, isbn13 } = book;
  return (
    <div className="cursor-pointer transform hover:-translate-y-2 duration-200 hover:t shadow-lg hover:shadow-xl rounded-md relative">
      <img src={book.image} alt="book cover" />

      <div className="absolute inset-0 bg-black text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col p-4 rounded-md transition-opacity duration-300">
        <h3 className="text-xl text-white font-semibold">{title}</h3>
        <p className="mt-10">{subtitle.substring(0, 45)}...</p>
        <p className="mt-auto">Price: {price}</p>
      </div>
    </div>
  );
};

export default Book;
