// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
//var series = require('stream-series');


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
gulp.task('sass_dev', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/scss'));
});

// Concatenate & Minify JS
gulp.task('jslibs', function () {
    return gulp.src(['app/libs/scripts/jquery-2.1.3.js',
                     'app/libs/scripts/angular.js',
                     'app/libs/**/*.js'])
        .pipe(concat('jslibs.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('jslibs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('js', function () {
    return gulp.src(['app/scripts/app.js','app/scripts/**/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('index', function () {
    var target = gulp.src(['index.html']);
    var files = gulp.src(['dist/scripts/*.js', 'dist/css/*.css']);
  
    return target.pipe(inject(files))
        .pipe(gulp.dest('dist'));
});
gulp.task('images', function () {
    return gulp.src(['app/images/*.*'])
               .pipe(gulp.dest('dist/images'));
});
gulp.task('views', function () {
    return gulp.src(['app/views/**/*.*'])
               .pipe(gulp.dest('dist/views'));
});


// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('app/scripts/*.js', ['lint', 'js']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'csslibs', 'jslibs', 'js','views','images', 'watch']);
