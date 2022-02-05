module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            }
        ],

    },
    rules: [
        {
            test: /\.css$/,
            include: '/src/app',
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[local]_[hash:base64:5]'
                    }
                }
            ],
        },
        {
            test: /\.css$/,
            include: '/src/styles',
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
        }]
};