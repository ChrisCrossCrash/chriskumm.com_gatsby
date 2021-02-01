import React from 'react'

const SectionHeading: React.FC = (props) => (
  <div className='container mx-auto max-w-screen-lg my-24'>
    <h1 className='text-6xl font-bold text-center'>{props.children}</h1>
  </div>
)

export default SectionHeading