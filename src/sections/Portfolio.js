import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import SectionHeading from '../components/SectionHeading'
import PortfolioSite from '../components/PortfolioSite'

const Portfolio = () => {
  const {allPortfolioYaml: {projects}} = useStaticQuery(graphql`{
      allPortfolioYaml {
          projects: nodes {
              title
              subtitle
              description
              features
              technologies
              url
              id
              screenshot {
                  childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                  }
              }
          }
      }
  }
  `)

  return (
    <div id='portfolio'>
      <SectionHeading>Portfolio</SectionHeading>
      <div className='container max-w-screen-xl mx-auto px-5'>
        {projects.map(project => <PortfolioSite key={project.id} project={project}/>)}
      </div>
    </div>
  )
}

export default Portfolio