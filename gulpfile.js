const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-jsmin');
const tinify = require('gulp-tinify');

gulp.task('move-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('bild/css/'))
})

gulp.task('htmlmin', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('bild/'))
});

gulp.task('move-js', () => {
  return gulp.src('src/js/*.min.js')
    .pipe(gulp.dest('bild/js'))
})

gulp.task('jsmin', () => {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('bild/js'))
})

gulp.task('move-fonts', () => {
  return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('bild/fonts/'))
})

gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*.*')
    .pipe(tinify('XPkRb5vNFDXQc12s1H6NCVBY65r71nnV'))
    .pipe(gulp.dest('bild/img/'))
})
