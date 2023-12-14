/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import BookModal from './BestBooksModal.jsx';
import UpdateBook from './UpdateBook.jsx';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// const server = import.meta.env.VITE_SERVER;

const local = import.meta.env.VITE_LOCAL;

function BestBooks() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   if( name === 'title'){ setTitle(value)}
  //   if( name === 'description'){setDescription(value)}

  //   console.log(e.target.value);
  //   console.log(e.target.name);

  // }

  const selectBook = (book) => {
    setSelectedBook(book);
  }

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
    let response = await axios.post(`${local}/books`, book);
    console.log('server response', response.data);

    setBooks([...books, response.data])
  }

  const handleDelete = async (e) => {
    try{
    console.log(e.target)
    let response = await axios.delete(`${local}/books/${e.target.id}`)
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
        let responseBook = await axios.get(`${local}/books`);
        setBooks(responseBook.data);
      } catch {
        console.error('Books server call not working.');
      }

    }

  useEffect(() => {
    fetchBooks();
  }, [])


  const handleUpdateBook = async (book) => {
    console.log("Sending updated book details to server", book);
    
    if (book._id){
      let response = await axios.put(`${local}/books/${book._id}`, book);
      let updatedBook = response.data;
      console.log("Back from the server - book is:", updatedBook);
  
  
      let newBooksList = books.map( book => {
      if (book._id === updatedBook._id) { return updatedBook;}
      else { return book;}});
      
      setBooks(newBooksList);

    } else {
      alert("Please click on the book title or description to update the book.")
    }

  };


  if (books) {
    return (
      <>
        <h2>My Book Nook</h2>
            <BookModal handleSubmit={handleSubmit} handleChange={handleChange}/>
            <Carousel>
              {
              books.map( book =>
                
              <Carousel.Item key= {book._id}>
                <img 
                  src="./src/img/joao-unsplash-shelf.jpg"
                  alt={book.title}
                  style={{width:"900px", height:"400px"}}
                />
                <div className="caption-container">
                  <Carousel.Caption>  
                    <h3 style={{cursor:"pointer"}} onClick={ () => selectBook(book)}>{book.title} </h3>
                    <p style={{cursor:"pointer", color: "#A2B266"}} onClick={ () => selectBook(book)}>{book.description}</p>
                    <span id={book._id} onClick={handleDelete} style={{marginLeft:".5em", color:"red", cursor:"pointer"}}>Delete Book</span>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              )} 
            </Carousel>
        <UpdateBook handleSubmit={handleUpdateBook} book={selectedBook} />
      </>
    )
  } else {
    return(
      <>
      <p>No books just yet!</p>
      </>
    )
  }
  


}

export default BestBooks;
