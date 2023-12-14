import React from 'react';
import axios from 'axios';
import Home from './Home.jsx'
import About from './About.jsx'
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes className="routes">
            <Route exact path="/books" element={<BestBooks />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<Home />}/>
            </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
