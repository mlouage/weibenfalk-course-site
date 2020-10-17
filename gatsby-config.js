module.exports = {
  siteMetadata: {
    title: `Weibenfalk Course Web Page`,
    description: `Project oriented Front End Courses.`,
    author: `@weibenfalk`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us20.list-manage.com/subscribe/post?u=e74a7f59475ffae23b1fcc699&amp;id=f2386f2950'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-styled-components'
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Maven Pro`,
    //         subsets: [`latin`],
    //         variants: [`400`, `500`, `700`, `900`]
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`]
    //       },
    //     ],
    //   },
    // }
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Maven+Pro:400,500,700,900'],
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
