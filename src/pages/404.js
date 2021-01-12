import React from 'react'
import {Link} from 'gatsby'

const NotFound = () => (
  <div className='min-h-screen flex flex-col justify-center items-center'>
    <h1 className='text-4xl'>
      404 Not Found <span role='img' aria-label='crying face emoji'>😢</span>
    </h1>
    <Link className='link mt-3' to='/'>go to homepage</Link>
  </div>
)

export default NotFound