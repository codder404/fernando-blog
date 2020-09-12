module.exports = {
  siteMetadata: {
    title: 'Fernando dos Santos',
    description: `My Personal Site`,
    author: `@fernando`,
    twitterUsername: `@codder404`,
    image: '/static/images',
    url: 'https://fernandodossantos.netlify.app',
    siteUrl: 'https://fernandodossantos.netlify.app',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000,
    //     contentTypes: [`blogs`],
    //     singleTypes: [`about`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fernando`,
        lang: `pt-ao`,
        description: `My Personal Site`,
        short_name: `Fernando`,
        start_url: `/`,
        background_color: `#161616`,
        theme_color: `#161616`,
        dispaly: `standalone`,
        icon: `${__dirname}/static/images/iduck.png`,
      },
    },
  ],
}
