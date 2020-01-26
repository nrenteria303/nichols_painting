var gulp = require('gulp'),
browserSync = require('browser-sync').create(), 
        sass = require('gulp-sass');

gulp.task('compile-sass', function() {
    return gulp.src('styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});

gulp.task('watch-css', ['compile-sass'], function() {
    return gulp.src('styles/*.css')
        .pipe(browserSync.stream());
});

gulp.task('watch-html', function() {
    return gulp.src('*.html')
        .pipe(browserSync.stream());
});

gulp.task('watch-js', function() {
    return gulp.src('scripts/*.js')
        .pipe(browserSync.stream());
});

gulp.task('watch-img', function() {
    return gulp.src('images/**')
        .pipe(browserSync.stream());
});

gulp.task('watch-fonts', function() {
    return gulp.src('fonts/**')
        .pipe(browserSync.stream());
});

gulp.task('build', ['compile-sass'], function() {});

gulp.task('default', ['compile-sass'], function() {
    browserSync.init({
        server: {
                baseDir: "./"
        },
        notify: false
    });
    gulp.watch("styles/sass/*.scss", ["watch-css"]);
    gulp.watch("*.html", ["watch-html"]);
    gulp.watch("scripts/*.js", ["watch-js"]);
    gulp.watch("images/**", ["watch-img"]);
    gulp.watch("fonts/**", ["watch-fonts"]);
});
