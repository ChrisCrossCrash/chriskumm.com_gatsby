import React from 'react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div id='contact' className='mb-10'>
    <SectionHeading>Contact</SectionHeading>
    <div className='container max-w-screen-sm mx-auto px-5 mb-24'>
      <ContactForm/>
    </div>
  </div>
)

export default Contact