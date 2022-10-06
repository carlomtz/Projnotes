//notas importnates
//el archivo de confguracion debe usar es5
//importar un administrado de rutas de archivos
const path =require('path');

//Importando el extractor de css 
const MiniCssExtractPlugin =
require('mini-css-extract-plugin');
//exportamos un objeto de configuracion 
//que sera usado por webpack
module.exports={
    //0. Estableciendo el modo prouccion
    mode:'production',
    //1. El arcivo de entrada o indexador (contiene las referencias principales)
    entry: "./client/index.js",
    //2. Especificar el archivo de salida
    output: {
        //2.1 nos especifica la ruta de salida
        path: path.resolve(__dirname, "public"),
        //2.2 nombre del archivo de salida
    filename: "bundle.js"
    },
    
    /*
    devServer:{
        //3.1Folder de archivos estaticos
        static:path.join(__dirname,"public"),
        //puerto del servidor de desarrollo
        port:8080,
        //3.3 definiendo el host
        host:"localhost"
    },*/
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                    loader:'babel-loader',
                    options:{
                        presets:[
                
                            [
                                '@babel/preset-env',
                                {
                                    'modules':false,
                                    'useBuiltIns': 'usage',
                                    //'targets': '>0.25%, not dead',
                                    'targets':{"opera":80},
                                    'corejs': 3
                                }
                            ]
                        ]
                    }
                    }
                ]
            },
            {
                test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    //Seccion de plugins
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'stylesheets/app.css'
        })
      ]
        
}
