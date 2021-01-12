// https://www.gatsbyjs.com/docs/gatsby-config/

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fs = require('fs')
const yaml = require('js-yaml')

// Load siteConfig.yaml
let siteConfig
try {
  siteConfigFile = fs.readFileSync('./src/data/siteConfig.yaml', 'utf8')
  siteConfig = yaml.load(siteConfigFile)[0]
} catch (e) {
  console.error('Error while loading `siteConfig.yaml` in `gatsby-config.js`:\n', e)
}

// Check siteConfig.yaml for required properties
const required = ['title', 'description', 'author', 'cardImage', 'favicon', 'lang', 'maskableIcon']
for (property of required) {
  if (!(property in siteConfig)) {
    console.error(`${property} is a required property in siteConfig.yaml.`)
  }
}


module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    siteUrl: process.env.SITE_URL,
    description: siteConfig.description,
    author: siteConfig.author,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sitemap',
    {
      //  this plugin should be listed before the offline plugin
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: `/`,
        background_color: `#f7f3eb`,
        theme_color: `#e0a551`,
        display: `standalone`,
        include_favicon: false, // The SEO component already does this, but better.
        icon: `src/data/${siteConfig.maskableIcon}`,
        icon_options: {
          purpose: 'any maskable'
        }
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
