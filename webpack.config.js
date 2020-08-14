var path = require("path")

module.exports = {
    mode: 'development',
    devtool: 'eval',


    entry:{
        app : [path.resolve(__dirname, 'src') + '/index.jsx']
    } ,
    output : {
        path: path.join(__dirname, '/dist/assets'),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    module : {
        rules : [
            {
                test:/\.jsx?/,
                loader : 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test:/\.css$/,
                use : ["style-loader", "css-loader"],
                
            }
        ]
        
    }
}