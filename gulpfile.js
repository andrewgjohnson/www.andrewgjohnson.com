var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');

function minifyCss() {
  return gulp.src(['css/stylesheet.css'])
    .pipe(cleanCss())
    .pipe(concat('stylesheet.min.css'))
    .pipe(gulp.dest('css'));
}

gulp.task('default', gulp.series(
  minifyCss
));
