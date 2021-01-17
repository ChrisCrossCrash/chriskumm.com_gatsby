import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import SectionHeading from '../components/SectionHeading'
import PortfolioSite from '../components/PortfolioSite'

const Portfolio = () => {
  const {allPortfolioYaml: {projects}} = useStaticQuery(graphql`
    query {
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
              fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                presentationWidth
                presentationHeight
              }
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