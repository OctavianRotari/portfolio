var gulp = require('gulp');
var serverLiveReload = require('gulp-server-livereload');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var googleWebFonts = require('gulp-google-webfonts');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var imageResize = require('gulp-image-resize');
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

var imgPath = {
  projects: 'src/resources/img/projects/*.{jpeg,jpg,png}',
  certificates: 'src/resources/img/certificates/*.{jpeg,jpg,png}'
};

var projectsImageSize = [ 530, 1060 ];
var certificateImageSize = [ 210, 420 ];

function cleanDist() {
  return gulp.src([ 'dist/css/fonts/', 'dist/css/fonts/*.css', 'dist/js/', 'dist/img/' ])
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

function resizeImages(done) {
  projectsImageSize.forEach(function (imageSize) {
    images(imageSize, imgPath.projects);
  });
  certificateImageSize.forEach(function (imageSize) {
    images(imageSize, imgPath.certificates);
  });
  done();
}

function images(imageSize, imagesPath) {
  gulp.src(imagesPath)
    .pipe(imageResize({
      width: imageSize,
      height: imageSize
    }))
    .pipe(rename( function (path) {
      path.basename += '-' + imageSize;
    }))
    .pipe(gulp.dest('dist/img/'));
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

var build = gulp.series(cleanDist, fonts, style, javaScriptUglify, resizeImages, gulp.parallel(watch, server));

gulp.task('default', build);
