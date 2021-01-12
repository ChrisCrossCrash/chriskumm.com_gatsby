import React from 'react'

const Footer = () => (
  <footer className='bg-gray-100 text-gray-600 text-center text-sm py-3'>
    <p className='mb-0.5'>&#169; Copyright {new Date().getFullYear()} Chris Kumm</p>

    {/* "Digital World" icons */}
    <p className='mb-0.5'>
      <a className='link' href='https://www.iconfinder.com/iconsets/computer-world' target='_blank' rel='noreferrer'>
        "Digital World"
      </a>

      {' '}icons by user{' '}

      <a className='link' href='https://www.iconfinder.com/svgfy' target='_blank' rel='noreferrer'>
        Kamanashish Roy
      </a>

      {' '}on{' '}

      <a className='link' href='https://www.iconfinder.com/' target='_blank' rel='noreferrer'>
        iconfinder.com
      </a>

      {' '}are licensed under{' '}

      <a className='link' href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank' rel='noreferrer'>
        CC BY-SA 3.0
      </a>
    </p>

    {/* SVG Backgrounds */}
    <p>
      SVG Backgrounds from {' '}

      <a className='link' href='https://www.svgbackgrounds.com' target='_blank' rel='noreferrer'>
        SVGBackgrounds.com
      </a>

      {' '}are licensed under{' '}

      <a className='link' href='https://creativecommons.org/licenses/by/4.0/' target='_blank' rel='noreferrer'>
        CC BY 4.0
      </a>
    </p>
  </footer>
)

export default Footer