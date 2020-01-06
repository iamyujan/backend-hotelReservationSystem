const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'server.js',
    },
    target: "node",
    //  the environment in which the bundle should run
    //  changes chunk loading behavior and available modules
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.js?$/,
                exclude: path.resolve(__dirname, "node_modules"),
                //  these are matching conditions, each accepting a regular expression or string
                //  exclude (takes preferrence over test and include)
                //  Best pratices:
                //  - Use RegExp only in test and for filename matching
                //  - User arrays of absolute paths in include and exclude
                //  - Try to avoid exclude and prefer include
                use: [
                    //  apply multiple loaders and options
                    "babel-loader",
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    devtool: "cheap-module-source-map",
    //  enhance debugging by adding meta info for the browser devtools
}