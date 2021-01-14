import React, {useEffect, useRef, useState} from 'react'
import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Loading from '../sections/Loading'

import {gsap} from 'gsap'
import {GSDevTools} from 'gsap/GSDevTools'

gsap.registerPlugin(GSDevTools)


const Home = () => {

  // GreenSock Dev Tools
  // https://greensock.com/docs/v2/Utilities/GSDevTools
  // GSDevTools.create()

  const [pageLoaded, setPageLoaded] = useState(false)
  const pageRef = useRef()

  useEffect(() => {
    document.fonts.ready.then(() => setPageLoaded(true))
  }, [])

  useEffect(() => {
    gsap.from(pageRef.current, {opacity: 0})
  }, [pageLoaded])

  if (pageLoaded) {
    return (
      <div ref={pageRef}>
        <SEO pathname='/'/>
        <Hero/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    )
  } else {
    return <Loading/>
  }
}

export default Home