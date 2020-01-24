module.exports = {
  siteMetadata: {
    title: `Health Impact Fund`,
    description: `Delink the price of drugs from the cost of research.`,
    author: `@HealthImpact`,
    siteUrl: `https://healthimpactfund.org`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-5555193-17",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://healthimpactfund.org`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Health Impact Fund`,
        short_name: `HIF`,
        start_url: `/`,
        background_color: `#80cf0f`,
        theme_color: `#80cf0f`,
        display: `minimal-ui`,
        icon: `src/images/hif-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [
          // this order dictates the dropdown order
          `en`, // English
          `de`, // German
          `zh`, // Cheneze (Simplified)
          `hi`, // Hindi
          `es`, // Spanish
          `it`, // Italian
          `id`, // ID -- identify the felds
        ],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
