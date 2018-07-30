const webpack = require('webpack');
const path = require('path');

// module.exports = {
//     "entry": ['./src/app.js'],
//     "output": {
//         path: path.join(__dirname, 'dist'),
//         publicPath: "/dist/",
//         "filename": "bundle.js"
//     },

//
//
//
//
module.exports = {
    entry: './src/app.js',

    devtool: 'inline-source-map',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        modules: [
            "node_modules"
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            'window.jQuery': 'jquery',
        })
    ],

    devServer: {
        inline: true,
        // lazy: true,
        filename: 'bundle.js',
        contentBase: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
};

