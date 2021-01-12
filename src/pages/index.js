import React from 'react'
import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => (
  <>
    <SEO pathname='/'/>
    <Hero/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
  </>
)

export default Home