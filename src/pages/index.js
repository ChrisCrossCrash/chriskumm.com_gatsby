import React from 'react'
import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

import {gsap} from 'gsap'
import {GSDevTools} from 'gsap/GSDevTools'

gsap.registerPlugin(GSDevTools)


const Home = () => {

  // GreenSock Dev Tools
  // https://greensock.com/docs/v2/Utilities/GSDevTools
  // GSDevTools.create()

  return (
    <>
      <SEO pathname='/'/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home