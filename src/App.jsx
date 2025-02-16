
import React from 'react'
import './App.css'
import Section1 from './Section1'
import Navbar from './Navbar'
import SocialSidebar from './components/Sidebar'
import MenuGrid from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Section1 />
      <SocialSidebar />
      <MenuGrid/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  )
}

export default App
