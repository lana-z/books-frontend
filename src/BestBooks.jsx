/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import BookModal from './BestBooksModal.jsx';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const server = import.meta.env.VITE_SERVER;

// const local = import.meta.env.VITE_LOCAL;

function BestBooks() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   if( name === 'title'){ setTitle(value)}
  //   if( name === 'description'){setDescription(value)}

  //   console.log(e.target.value);
  //   console.log(e.target.name);

  // }
  const handleChange = ((field, value) =>{
    if( field === 'title'){ setTitle(value)}
    if( field === 'description'){setDescription(value)}
    console.log(field,value)
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let book = { 
      title,
      description
    };
    console.log('this is what is sent',book)
    let response = await axios.post(`${server}/books`, book);
    console.log('server response', response.data);

    setBooks([...books, response.data])
  }

  const handleDelete = async (e) => {
    try{
    console.log(e.target)
    let response = await axios.delete(`${server}/books/${e.target.id}`)
    console.log(response)
    let book = response.data;

    console.log(book)
    // let newBooks = books.filter( (book) => {
    //   return book.id !== e.target.id;
    // });
    // console.log(newBooks);
    alert('Book Deleted');
    // setBooks(books.filter((book) => {
    //   return book.id !== e.target.id;
    // }));
    setBooks(books => books.filter(book => book._id !== e.target.id));
    } catch(e){
      alert('Something went wrong, book not deleted.')
    }
  }

    async function fetchBooks() {
      try {
        let responseBook = await axios.get(`${server}/books`);
        setBooks(responseBook.data);
      } catch {
        console.error('Books server call not working.');
      }

    }
  // useEffect runs our function once or 
  useEffect(() => {
    fetchBooks();
  }, [])
// }, [books])-----------------------------------------------------------------------------
  // useEffect(() => {
  // if(books > 0){ fetchBooks();}
  // }, [books])

  if (books) {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        
        <BookModal handleSubmit={handleSubmit} handleChange={handleChange}/>
        <Carousel>
          {
          books.map( book =>
            
          <Carousel.Item key= {book._id}>
            <img src={`https://placehold.co/600x400?text=${book.title}`}/>
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <span id={book._id} onClick={handleDelete} style={{marginLeft:".5em", color:"red", cursor:"pointer"}}>Delete Book</span>
            </Carousel.Caption>
          </Carousel.Item>
          )} 
        </Carousel>
          
      </>
    )
  } else {
    return(
      <>
      <p>No books just yet!</p>
      </>
    )
  }
  // }

}

export default BestBooks;
