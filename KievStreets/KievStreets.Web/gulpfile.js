// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inject = require('gulp-inject');

// Lint Task
gulp.task('lint', function () {
    return gulp.src('app/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('csslibs', function () {
    return gulp.src('app/libs/css/*.css')
    .pipe(concat('csslibs.css'))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('jslibs', function () {
    return gulp.src('app/libs/**/*.js')
        .pipe(concat('jslibs.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('jslibs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('scripts', function () {
    return gulp.src(['app/scripts/**/*.js', 'app/scripts/app.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('index', function () {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./dist/scripts/*.js', './dist/css/*.css'], { read: false });

    return target.pipe(inject(sources))
      .pipe(gulp.dest('./dist'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('app/scripts/*.js', ['lint', 'scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'csslibs', 'jslibs', 'scripts', 'watch']);
gulp.task('index',['default']);