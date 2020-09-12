module.exports = {
  siteMetadata: {
    title: 'Fernando dos Santos',
    description: `Blog about Front-End`,
    author: `@fernando`,
    twitterUsername: `@codder404`,
    image: '/fcoder.jpg',
    url: 'https://fernandodossantos.netlify.app',
    siteUrl: 'https://fernandodossantos.netlify.app',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-ao'
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `source sans-serif\:400,700`
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fernando`,
        lang: `pt-ao`,
        description: `Desenvolvedor FrontEnd`,
        short_name: `Fernando`,
        start_url: `/`,
        background_color: `#2E3440`,
        dispaly: `standalone`,
        icon: `${__dirname}/static/images/iduck.png`,
      },
    },
  ],
}
