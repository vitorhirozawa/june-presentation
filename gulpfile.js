var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');


gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('uglify', function() {
  return gulp.src(['./assets/js/jquery.min.js', './assets/js/jquery-ui.min.js', './assets/js/presentation.js'])
    .pipe(concat('presentation.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js:watch', function(){
	gulp.watch('./assets/js/*.js', ['uglify']);
});

gulp.task('default', ['sass:watch', 'sass', 'js:watch', 'uglify']);