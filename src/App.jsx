
import React from 'react'
import './App.css'
import Section1 from './Section1'
import Navbar from './Navbar'
import SocialSidebar from './components/Sidebar'
import MenuGrid from './Section2'

function App() {

  return (
    <>
      <Navbar/>
      <Section1 />
      <SocialSidebar />
      <MenuGrid/>
    </>
  )
}

export default App
