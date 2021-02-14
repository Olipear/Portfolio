module.exports = {
  siteMetadata: {
    title: 'Oliver Pearson\'s portfolio',
    description:
      'Oliver Pearson, UX engineer, front end developer, UI designer. Available for work both contract and full-time, based in Royal Leamington Spa.',
  },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms-paths',
      options: {
        cmsConfig: 'static/admin/config.yml'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-netlify-cms-paths',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms', 
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
        whitelist: ['a']
      }, // must be after other CSS plugins
    }, 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-111425076-1",
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/**"],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
