const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    // enable sourcemaps on dev
    // https: //github.com/gatsbyjs/gatsby/issues/6278
    if (stage === 'develop') {
        actions.setWebpackConfig({
            devtool: 'cheap-module-source-map'
        });
    }

    actions.setWebpackConfig({
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            alias: {
                '~components': path.resolve(__dirname, 'src/components'),
                '~context': path.resolve(__dirname, 'src/context'),
                '~utils': path.resolve(__dirname, 'src/utils')
            }
        }
    });
};
