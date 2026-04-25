import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Brands from './components/Brands'
import BookingForm from './components/BookingForm'
import Testimonials from './components/Testimonials'
import FeedbackForm from './components/FeedbackForm'
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
        
        {/* Testimonials and Booking Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
            <Testimonials />
            <BookingForm />
          </div>
        </section>

        <FeedbackForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
