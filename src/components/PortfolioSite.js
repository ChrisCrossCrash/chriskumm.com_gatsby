import React from 'react'
import KatoButton from './KatoButton'
import Img from 'gatsby-image'

const PortfolioSite = ({project}) => (
  <div className='flex flex-col md:flex-row md:odd:flex-row-reverse items-center mb-32'>

    {/* Mockup */}
    <div className='h-full w-full' style={{flex: '1 1 0px'}}>
      <Img
        className='w-full h-full object-contain rounded-2xl'
        fluid={project.screenshot.childImageSharp.fluid}
        alt={`${project.title} screenshot`}
      />
    </div>

    {/* Spacer element */}
    <div className='w-14 h-5'/>

    {/* Info Text */}
    <div className='' style={{flex: '1 1 0px'}}>
      <h1>
        <a
          className='text-4xl font-bold no-underline'
          href={project.url}
          target='_blank'
          rel='noreferrer'
        >
          {project.title}
        </a>
      </h1>
      <p className='font-bold mb-5'>{project.subtitle}</p>
      <p className='mb-5'>{project.description}</p>
      <p className='mb-2'><strong>Features:</strong> {project.features}</p>
      <p className='mb-5'><strong>Key technologies:</strong> {project.technologies}</p>
      <KatoButton
        text='visit site'
        url={project.url}
      />
    </div>
  </div>
)

export default PortfolioSite