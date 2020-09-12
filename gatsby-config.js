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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}
