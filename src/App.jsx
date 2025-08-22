import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import HolidayCategory from './components/HolidayCategory'
import TourCardsSection from './components/TourCardsSection'
import PopularDestinations from './components/PopularDestination'

function App() {

  return (
    <>
    <Navbar />
    <Carousel/>
    <HolidayCategory/>
    <TourCardsSection/>
    <PopularDestinations/>
    </>
  )
}

export default App
