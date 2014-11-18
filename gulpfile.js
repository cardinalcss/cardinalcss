var gulp = require('gulp');
var stylus = require('gulp-stylus');
var less2stylus = require('less-to-stylus');
var map = require('vinyl-map');
var rename = require('gulp-rename');

gulp.task('less-to-stylus', function() {
  var toStylus = map(function(code, filename) {
    code = code.toString();
    return less2stylus(code);
  });

  return gulp.src(['./less/*.less'])
    .pipe(toStylus)
    .pipe(rename(function(path) {
      path.extname = ".styl";
    }))
    .pipe(gulp.dest('./styl'));
});
