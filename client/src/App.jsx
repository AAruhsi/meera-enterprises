import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Brands from './components/Brands'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) return <SplashScreen onDone={() => setShowSplash(false)} />

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Brands />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
