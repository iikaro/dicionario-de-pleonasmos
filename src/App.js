import React, { Component } from 'react'
import './App.css'
import DictList from './dict/dictList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  PleonasmList,
} from "./Components";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />

        <Router>
        <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pleonasm-list" element={<PleonasmList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
              <Route path="" element={<Posts />} />
              <Route path=":postSlug" element={<Post />} />
            </Route>
          </Routes>
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App;
