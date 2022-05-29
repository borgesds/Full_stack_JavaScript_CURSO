const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/, //Pega todos os arquivos que tem .JS
            use: ['babel-loader']
        }]
    },

    watch: true,

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        }
    }
}