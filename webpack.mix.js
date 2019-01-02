const mix = require('laravel-mix');

mix.version()
    .disableNotifications()
    .setPublicPath('web')
    .js('assets/js/main.js', 'web/js')
    .sass('assets/scss/main.scss', 'web/css')
    .copyDirectory('assets/web', 'web')
    .sourceMaps()
    .webpackConfig({
        output: {
            publicPath: '/',
            chunkFilename: 'js/chunks/[name].js?q=[chunkhash]',
        },
    })
    .browserSync({
        proxy: 'localhost:8000',
        files: ['templates/**/*', 'web/css/*.css', 'web/js/*.js']
    });
