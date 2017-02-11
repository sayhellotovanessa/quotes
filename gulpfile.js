
var gulp         = require('gulp');
    postcss      = require('gulp-postcss');
    shortColor   = require('postcss-short-color');
    shortcss     = require('postcss-short');
    autoprefixer = require('autoprefixer');
    lost         = require('lost');
    watcher      = require('gulp-watch');
    concat       = require('gulp-concat');
    minmax       = require('postcss-media-minmax');
    precss       = require('precss');


gulp.task('css', function () {
  return gulp.src('app/initial/*.css')
  .pipe(postcss([shortColor, shortcss, autoprefixer, lost, minmax, precss]))
  .pipe(gulp.dest('app/css'));
});


gulp.task('watch', function() {
  gulp.watch("app/initial/*.css", ['css']);
});
