import React, { Component } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  PleonasmList,
  Entry,
} from "./Components";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <NavigationBar />

        <Router basename="/react-app">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/pleonasm-list" element={<PleonasmList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pleonasm-of-the-day" element={<Entry />} />
          </Routes>
          </Router>

        <Footer />
      </div>
    )
  }
}

export default App;
