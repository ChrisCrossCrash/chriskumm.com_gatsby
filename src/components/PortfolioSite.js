import React, {useEffect, useRef} from 'react'
import KatoButton from './KatoButton'
import Img from 'gatsby-image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PortfolioSite = ({project}) => {

  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {

    // This triggers a false-positive warning that can't be silenced
    // noinspection JSUnresolvedFunction
    const textIsOnRightHalf = textRef.current.getBoundingClientRect().left > (window.innerWidth / 2)

    // Text fades in from outer side
    gsap.from(textRef.current, {
      opacity: 0,
      x: textIsOnRightHalf ? 200 : -200,
      scrollTrigger: textRef.current,
      duration: 1,
    })

    // Image fades in from top
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 200,
      scrollTrigger: imageRef.current,
      duration: 1,
    })
  }, [])

  return (
    <div className='flex flex-col md:flex-row md:odd:flex-row-reverse items-center mb-32'>

      {/* Mockup */}
      <div ref={imageRef} className='h-full w-full' style={{flex: '1 1 0px'}}>
        <Img
          className='w-full h-full object-contain rounded-2xl'
          fluid={project.screenshot.childImageSharp.fluid}
          alt={`${project.title} screenshot`}
          width={project.screenshot.childImageSharp.fluid.presentationWidth}
          height={project.screenshot.childImageSharp.fluid.presentationHeight}
        />
      </div>

      {/* Spacer element */}
      <div className='w-14 h-5'/>

      {/* Info Text */}
      <div ref={textRef} style={{flex: '1 1 0px'}}>
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
}

export default PortfolioSite