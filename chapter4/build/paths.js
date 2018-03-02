/**
 * Created by ben on 8/25/15.
 */
var appRoot = 'src/';
var outRoot = 'www/';

module.exports = {
    root: appRoot,
    lib: appRoot + 'scripts/**/*.js',
    scripts: appRoot + 'app/*.js',
    vvm: appRoot + 'app/**/*.js',
    html: appRoot + 'app/**/*.html',
    index: appRoot + 'index.html',
    css: appRoot + 'app/**/*.css',
    font: appRoot + 'app/styles/font/**/*',
    sass: appRoot + 'styles/**/*.scss',
    jspm: appRoot + 'jspm_packages/**/*',
    config: appRoot + 'config.js',
    test: 'test/**/*.js',
    output: outRoot,
    doc: '/.doc',
    img: appRoot + 'app/styles/**/*.*',
    fontOut: outRoot + 'app/styles/font/',
    imgOut: outRoot + 'app/styles',
    jspmOut: outRoot + 'jspm_packages',
    vvmOut: outRoot + 'app',
    styleOut: outRoot + 'app/',
    scriptsOut: outRoot + 'app',
    libOut: outRoot + 'app/scripts'
};