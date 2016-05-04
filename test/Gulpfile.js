var gulp 			= require('gulp');
//var bower 			= require('gulp-bower');
var less 			= require('gulp-less');
var minify 			= require('gulp-minify-css');
//var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer 	= require('gulp-autoprefixer');
var watch 			= require('gulp-watch');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var notify 			= require('gulp-notify');

gulp.task('less-build',function(){
    gulp.src('style.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest('./'))
        .pipe(notify({ message: 'Compiling LESS (Build) complete' }));
});

gulp.task('build', ['less-build']);

gulp.task('default', ['less-dev']);