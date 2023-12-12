import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const local = import.meta.env.VITE_LOCAL;


// class BestBooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }


// componentDidMount(){
//   this.fetchBooks();
// }

// async fetchBooks();
//   try {
//     const response = await axios.get(`${local}`)
//   }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

function BestBooks(){

const [books, setBooks] = useState('');

async function fetchBooks() {
  try {
    let responseBook = await axios.get(`${local}/books`);
    setBooks(responseBook.data);
  } catch {
    console.error('Books server call not working.');
  }

  

}

useEffect(() => {
  fetchBooks();

}, [])
console.log(books);
  // render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {/* {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )} */}
      </>
    )
  // }

}

export default BestBooks;
