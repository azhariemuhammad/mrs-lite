module.exports = {
    siteMetadata: {
        title: `Gatsby Starter Paperbase Dashboard`,
        author: `Marc Arbesman`,
        description: `A starter dashboard demonstrating Material UI's Paperbase theme in Gatsby`,
        siteUrl: `https://gatsby-starter-paperbase-demo.netlify.com/`,
        social: {
            twitter: `willcode4food`
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-material-ui`
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                analyzerPort: 3000,
                production: false
            }
        }
    ],
    pathPrefix: '/mrs-lite'
};
