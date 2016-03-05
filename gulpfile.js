// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'site/',
        port: 8080
    });
});

