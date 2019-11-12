const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile scss into css
function style() {
  // Scss location
  return gulp.src('styles/scss/**/*.scss')
  // Pass through compiler
  .pipe(sass())
  // CSS location
  .pipe(gulp.dest('styles/css'))
}

exports.style = style;