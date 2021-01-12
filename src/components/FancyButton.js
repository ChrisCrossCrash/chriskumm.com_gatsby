import React from 'react'

// noinspection HtmlUnknownAnchorTarget
const FancyButton = (props) => (
  <a
    className='text-2xl font-bold rounded-lg p-4 mt-5 inline-block shadow-lg bg-gradient-to-br
      from-red-400 hover:from-red-600 to-yellow-400 hover: to-yellow-600
      focus:outline-none focus:ring ring-yellow-300 transition text-white'
    href='#portfolio'
    {...props}
  >
    {props.children}
  </a>
)

export default FancyButton