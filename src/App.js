import React from 'react'
import './App.css'
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
