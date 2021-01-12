// Adapted from 'Button Hover' by Katherine Kato on Codepen
// https://codepen.io/kathykato/pen/rZRaNe?editors=1100

import React from 'react'

const KatoButton = ({text, url}) => (
  <a href={url} target='_blank' rel='noreferrer' className='btn-kato'>
    <span className='circle' aria-hidden='true'>
      <span className='icon arrow'/>
    </span>
    <span className='button-text'>{text}</span>
  </a>
)

export default KatoButton