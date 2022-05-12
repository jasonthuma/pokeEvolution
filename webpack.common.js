
module.exports = {
    entry: "./src/index.js", 
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: "img"
                    }
                }
                
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                              "@babel/preset-env",
                              {
                                targets: {
                                  esmodules : true
                                }
                              }
                            ]
                          ]
                    }
                }
            }
        ]
    }

};