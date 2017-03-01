var gulp = require('gulp');
var server = require('gulp-server-livereload');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var googleWebFonts = require('gulp-google-webfonts');
var concat = require('gulp-concat');
//var debug = require('gulp-debug');

var options = {
  fontsDir: 'fonts',
  cssFilename: 'googleWebFonts.css'
};

gulp.task('style', function () {
  gulp.src([ 'src/vendors/css/*.css', 'src/resources/scss/*.{scss,css}' ])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
  gulp.src('src/resources/fonts/fonts.list')
    .pipe(googleWebFonts(options))
  //.pipe(debug({ title: 'fonts' }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function () {
  gulp.watch('src/resources/css/style.scss', [ 'style' ]);
  gulp.watch('src/resources/fonts/fonts.list', [ 'fonts' ]);
});

gulp.task('server', function () {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default',[ 'style', 'fonts', 'watch', 'server' ]);
