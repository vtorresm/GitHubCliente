const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //Modificamos el puerto por defecto
    devServer: {
        port: 3000
    },
    //Obtenemos una instancia
    //Creamos un array
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
