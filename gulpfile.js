const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');
const path = require('path');
const watchLess = require('gulp-watch-less');
 
const cssMin = require('gulp-css');
 
gulp.task('css', function(){
  return gulp.src('src/**/*.css')
    .pipe(cssMin())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('build/'));
});

 
gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(watchLess('./less/style.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch-less', function() {
    gulp.watch('./less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});