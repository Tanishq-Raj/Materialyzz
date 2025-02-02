import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuctionLanding from './components/auctionSystem/AuctionLanding'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NavigationBar from './components/auctionSystem/components/NavigationBar'
import Footer from './components/auctionSystem/About Us/Footer'
import SignUpPage from './pages/SignUp'
import { SignupForm } from './pages/SignupForm'


function App() {
  

  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<AuctionLanding/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      {/* <Route path="/sign-up-bankofficer" element={<SignupForm/>}/> */}
    </Routes>
      <Footer/>
    </>
  )
}

export default App
