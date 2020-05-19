
const path = require('path'); //引入path模块（node）
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * publicPath: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部,
    // 例如 https://www.my-app.com/
    // 如果你的应用部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如将你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 '/my-app/'
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.jcat.club/typeScript/vue-ts-sticky/demo/' : './',
    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    // assetsDir: 'static',
    lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: true, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
        /* string or regex */
    ], // 是否为生产环境构建生成sourceMap?
    // 关闭生产环境下的资源映射（生产环境下不在创建 xxx.js.map 文件）
    productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => { // 链式配置
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
        // 支持md文件
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    },
    configureWebpack: config => {
        // 简单/基础配置，比如引入一个新插件
    },
    // css: {
    //     // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
    //     // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    //     extract: true, // 允许生成 CSS source maps?
    //     sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
    //     loaderOptions: {
    //     }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    //     requireModuleExtension: false
    // }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

    parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {}, // configure webpack-dev-server behavior
    devServer: {
        proxy: {
            // 请求地址  https://www.foobar.com/my-app/user/add
            "/my-app": {
                changeOrigin: true,
                target: "https://www.foobar.com/my-app"
            }
        },
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8088,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        // before: app => {}
    }, // 第三方插件配置

    // pluginOptions: {
    //     // ...
    // }
};