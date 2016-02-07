var gulp = require('gulp');
var childProcess = require('child_process');
var electron = require('electron-prebuilt');
var run = require('gulp-run');

gulp.task('inject', function() {
    var wiredep = require ('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./MyApp/CSS/**/*.css',
                              './MyApp/JS/*.js',
                              './MyApp/JS/**/*.js'], {read: false});
    
    var injectOptions = {
        ignorePath: '/Views/MyApp/',
        relative: 'true'
    };
    
    var options = {
        bowerJson: require('./bower.json'),
        directory: './Bower Library',
        ignorePath: '../MyApp/Views/.'
    };
    
    return gulp.src('./MyApp/Views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./MyApp/Views/'));
});

gulp.task('run', function() {  
  return run('npm start').exec();
});