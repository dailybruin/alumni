module.exports = {
  siteMetadata: {
    title: 'Daily Bruin Alumni Network',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
