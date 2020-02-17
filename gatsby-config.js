
module.exports = {
  siteMetadata: {
    title: `Outshifter`,
    description: `Create and connect your sales community to grow exponentially.`,
    siteUrl: "https://www.outshifter.com", // No trailing slash allowed!
    image: "/career-students-ba7d3a577ecc0de05b7416c5b6394633.jpg", // Path to your image you placed in the 'static' folder
    author: `@iqplus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
`gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,        
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'j0evbrthziad',
        accessToken: '9ZEJzRxFDnbySWir1JZwuENcTddnVgQzQdqsMWqF5_g',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
