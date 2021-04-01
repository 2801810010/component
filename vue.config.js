const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development', // 设置当前为开发环境
    entry: { // 入口文件
        index: './js/index/index.js',
        detail: './js/detail/index.js',
        search: './js/search/index.js'
    },
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist',), // 保存文件路径
        filename: 'js/[name].js', // 保存文件名字
        publicPath: '../'  //  解决代码块中加载静态资源路径问题
    },
    // 使用loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                // user使用loader
                // 使用方式从数组尾部到数组头部 先css 再style
                // use:[
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //     },
                //     {
                //         loader: "css-loader",
                //     }
                // ],
                use: [MiniCssExtractPlugin.loader, "css-loader"
                    // options: {
                    //     publicPath: '../'  // 在css文件中所有导入相对路径的代码前添加../
                    // }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // [path]保留图片默认路径 [name]保留原名 [ext]后缀
                            name: '[path][name].[ext]', // 打包后指定图片路径
                            publicPath: '../'  // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                        }
                    },
                ],
            },
            {
                // 打包iconfont
                // 打包字体图标下面后缀的文件
                test: /\.(woff|woff2|svg|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // 打包后指定图片路径
                            publicPath: '../' 
                        }
                    }
                ]
            },
            {
                test: /\.js$/, // 使用loader时，匹配什么文件的正则
                exclude: /(node_modules|bower_components)/, // 忽略node_modules|bower_components文件夹下的依赖项，正则匹配。该文件夹下的js文件不处理
                use: {
                    loader: 'babel-loader', // 使用什么loder
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        // 打包html 
        new HtmlWebpackPlugin({
            template: './html/index.html', // 根据路径找到被打包的html
            path: path.resolve(__dirname, 'dist'), // 打包文件保存在指定目录下
            filename: 'html/index.html',  // 设置打包后文件的名字
            chunks: ['index'], // 自定义配置打包后的html自动加载某个js文件
            // 找不到对应的js则不加载js
            minify: {
                // 删除html中的注释
                removeComments: true,
                // 删除html中的空格
                collapseWhitespace: true,
                // 删除html标签属性值和双引号
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './html/search.html', // 根据路径找到被打包的html
            path: path.resolve(__dirname, 'dist'), // 打包文件保存在指定目录下
            filename: 'html/search.html',  // 设置打包后文件的名字
            chunks: ['search'], // 自定义配置打包后的html自动加载某个js文件
            // 找不到对应的js则不加载js
            minify: {
                // 删除html中的注释
                removeComments: true,
                // 删除html中的空格
                collapseWhitespace: true,
                // 删除html标签属性值和双引号
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './html/detail.html', // 根据路径找到被打包的html
            path: path.resolve(__dirname, 'dist'), // 打包文件保存在指定目录下
            filename: 'html/detail.html',  // 设置打包后文件的名字
            chunks: ['detail'], // 自定义配置打包后的html自动加载某个js文件
            // 找不到对应的js则不加载js
            minify: {
                // 删除html中的注释
                removeComments: true,
                // 删除html中的空格
                collapseWhitespace: true,
                // 删除html标签属性值和双引号
                removeAttributeQuotes: true
            }
        }),
        // 处理打包后有样式没有css文件的问题
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // 设置打包后创建css的文件名
        }),
        // 压缩js
        new TerserPlugin(),
        // 压缩css
        new CssMinimizerPlugin()
    ],
    // 起动本地服务
    devServer: {
        // 注意这里必须是打包后的根路径，服务只能调用根路径下的资源
        // 如果服务启动的是根目录下的html文件夹，那么只能调用html文件夹下的资源
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // 对打包文件进行压缩
        port: 9000, // 设置端口号
        open: true, // 启动后自动打开游览器
    },
}