import React from 'react'
import Waves from '../components/Waves'

// noinspection HtmlUnknownAnchorTarget
const Hero = () => (
  <div className='min-h-screen flex flex-col justify-center relative hero'>
    <div className='container mx-auto max-w-screen-lg px-10 text-white'>
      <div className='text-2xl sm:text-4xl mb-2'>I make websites that</div>
      <div
        className='text-6xl sm:text-8xl font-black uppercase'
        style={{fontFamily: 'metropolisextra_bold, sans-serif'}}
      >get<br/>noticed<br/>online.
      </div>

      <a
        className='text-2xl font-bold rounded-lg p-4 mt-5 inline-block shadow-lg bg-gradient-to-br
      from-red-400 hover:from-red-600 to-yellow-400 hover: to-yellow-600
      focus:outline-none focus:ring ring-yellow-300 transition text-white'
        href='#portfolio'
      >
        Portfolio
      </a>

    </div>
    <Waves/>
  </div>
)

export default Hero