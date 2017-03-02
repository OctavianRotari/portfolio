var gulp = require('gulp');
var serverLiveReload = require('gulp-server-livereload');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var googleWebFonts = require('gulp-google-webfonts');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
//var debug = require('gulp-debug');

var options = {
  fontsDir: 'dist/css/fonts',
  fontsPath: 'fonts/',
  cssDir: 'src/vendors/css',
  cssFilename: 'googleWebFonts.css'
};

var cssFiles = [
  'src/vendors/css/googleWebFonts.css',
  'src/vendors/css/*.css',
  'src/resources/scss/*.{scss,css}'
];

var jsFiles = [
  'src/vendors/js/*.js',
  'src/resources/js/*.js'
];

function cleanDist() {
  return gulp.src([ 'dist/css/fonts/', 'dist/css/fonts/*.css', 'dist/js/' ])
    .pipe(clean());
}

function fonts() {
  return gulp.src('src/resources/fonts/fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('./'));
}

function style() {
  return gulp.src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
}

function javaScriptUglify() {
  return gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('dist/js'));
}

function watch() {
  gulp.watch(cssFiles, style);
  gulp.watch(jsFiles, javaScriptUglify);
  gulp.watch('src/resources/fonts/fonts.list', fonts);
}

function server() {
  return gulp.src('./')
    .pipe(serverLiveReload({
      directoryListing: true,
      liverReload: true,
      open: true
    }));
}

var build = gulp.series(cleanDist, fonts, style, javaScriptUglify, gulp.parallel(watch, server));

gulp.task('default', build);
