import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

/*

HOW THIS COMPONENT FETCHES DATA

first, check siteMetaData, which is used more broadly than SEO
then, check siteConfig.yaml, which is a global configuration for SEO specifically
then, check SEO props, which are specific to component being rendered.

title
  default: siteMetaData
  override: siteConfig.yaml
  override: props

description
  default: siteMetaData
  override: siteConfig.yaml
  override: props

cardImage
  default: siteConfig.yaml
  override: props

favicon
  default: siteConfig.yaml

lang
  default: 'en'
  override: siteConfig.yaml
  override: props

pathname
  default: none
  override: props
*/

function SEO(props) {
  const {
    site,
    siteConfigYaml: {
      title: yamlTitle,
      description: yamlDescription,
      lang: yamlLang,
      cardImage: {
        childImageSharp: {
          fixed: yamlCardImage,
        },
      },
      favicon: {
        childImageSharp: {
          fixed16: {favicon16},
          fixed32: {favicon32},
          fixed64: {favicon64},
        },
      },
    },
  } = useStaticQuery(graphql`{
      site {
          siteMetadata {
              title
              description
              author
              siteUrl
          }
      }
      siteConfigYaml {
          title
          description
          lang
          cardImage {
              childImageSharp {
                  gatsbyImageData(width: 1200, height: 627, placeholder: BLURRED, layout: FIXED)
              }
          }
          favicon {
              childImageSharp {
                  fixed16: fixed(base64Width: 16) {
                      favicon16: base64
                  }
                  fixed32: fixed(base64Width: 32) {
                      favicon32: base64
                  }
                  fixed64: fixed(base64Width: 64) {
                      favicon64: base64
                  }
              }
          }
      }
  }
  `)

  // Title
  let title = site.siteMetadata.title
  if (yamlTitle) {
    title = yamlTitle
  }
  if (props.title) {
    title = props.title
  }

  // Description
  let description = site.siteMetadata.description
  if (yamlDescription) {
    description = yamlDescription
  }
  if (props.description) {
    description = props.description
  }

  // cardImage
  let cardImage = {src: '', width: 0, height: 0}
  if (yamlCardImage) {
    cardImage.src = yamlCardImage.src
    cardImage.width = yamlCardImage.width
    cardImage.height = yamlCardImage.height
  }
  if (props.image) {
    cardImage.src = props.image.src
    cardImage.width = props.image.width
    cardImage.height = props.image.height
  }

  // lang
  let lang = 'en'
  if (yamlLang) {
    lang = yamlLang
  }
  if (props.lang) {
    lang = props.lang
  }

  return (
    <Helmet
      htmlAttributes={{lang}}

      title={title}

      link={[
        props.pathname && {rel: 'canonical', href: `${site.siteMetadata.siteUrl}${props.pathname}`},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}`},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}`},
        {rel: 'shortcut icon', type: 'image/png', href: `${favicon64}`},
      ].filter(Boolean).concat(props.link)}

      meta={[
        {name: `description`, content: description},
        {property: `og:title`, content: title},
        {property: `og:description`, content: description},
        {property: `og:type`, content: `website`},
        {name: `twitter:creator`, content: site.siteMetadata.author},
        {name: `twitter:title`, content: title},
        {name: `twitter:description`, content: description},
        {property: 'og:image', content: `${site.siteMetadata.siteUrl}${cardImage.src}`},
        {property: 'og:image:width', content: cardImage.width},
        {property: 'og:image:height', content: cardImage.height},
        {name: 'twitter:card', content: 'summary_large_image'},
      ].concat(props.meta)}
    />
  )
}

SEO.defaultProps = {
  link: [],
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
