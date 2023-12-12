import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const server = import.meta.env.VITE_SERVER;

// const local = import.meta.env.VITE_LOCAL;

function BestBooks(){

const [books, setBooks] = useState('');

async function fetchBooks() {
  try {
    let responseBook = await axios.get(`${server}/books`);
    setBooks(responseBook.data);
  } catch {
    console.error('Books server call not working.');
  }

}

useEffect(() => {
  fetchBooks();

}, [])
// console.log(books);
  // render() {

    if (books){

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Carousel>
      <Carousel.Item>
        <img src='./code-jam-zoom-background-bw.png' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./code-jam-zoom-background-bw.png' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./code-jam-zoom-background-bw.png' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    )
    }
  // }

}

export default BestBooks;
