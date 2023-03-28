const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'public'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', ["@babel/preset-typescript", {
                            "allowNamespaces": true
                        }]]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".scss", ".css"],
    },
}
