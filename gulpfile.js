const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const babel = require('gulp-babel');
const exec = require('gulp-exec');
const connect = require('gulp-connect');

const runSequence = require('run-sequence');
 




var paths = {
    scripts: ['src/js/**/*.js'],
    images: 'src/images/**/*',
    css: 'src/styles/**/*',
    libs: 'src/libs/**/*',
    html: 'src/**/*.html',
    sw: ['src/sw.js','manifest.json']
  };


  gulp.task('webserver', function() {
    connect.server({
      name: 'Webcomponets Demo',
      root: 'build',
      port: 8101,
      livereload: true
    });
  });

  gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build/js/**/*','build/images/**/*','build/*.html']);
  });

  gulp.task('buildES5', function() {

    return gulp.src(paths.scripts)
    .pipe(babel({
        presets: ['env']
    }))
      .pipe(gulp.dest('build/js/es5'));
  });

  gulp.task('copyES6', function() {
    return gulp.src(paths.scripts)
      .pipe(gulp.dest('build/js'));
  });
  gulp.task('libs', function() {
    return gulp.src(paths.libs)
      .pipe(gulp.dest('build/libs'));
  });


  gulp.task('sw', function() {
    return gulp.src(paths.sw)
      .pipe(gulp.dest('build'));
  });

  gulp.task('scripts', ['clean','buildES5','copyES6']);

  gulp.task('css', function() {
    return gulp.src(paths.css)
      .pipe(gulp.dest('build'))
      .pipe(connect.reload());
  });

  gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
      // Pass in options to the task
      .pipe(imagemin({optimizationLevel: 5}))
      .pipe(gulp.dest('build/images'));
  });

  
  gulp.task('html', ['clean'], function() {
    return gulp.src(paths.html)
      .pipe(gulp.dest('build'));
  });


  gulp.task('test', function() {
    runSequence('test:unit');
  });

  gulp.task('test:unit', function () {
    var options = {
      continueOnError: false, // default = false, true means don't emit error event
      pipeStdout: false, // default = false, true means stdout is written to file.contents
      customTemplatingThing: "test" // content passed to lodash.template()
    };
    var reportOptions = {
      err: true, // default = true, false means don't write err
      stderr: true, // default = true, false means don't write stderr
      stdout: true // default = true, false means don't write stdout
    };

    return gulp.src('./**/**')
    .pipe(exec('wct', options))
    .pipe(exec.reporter(reportOptions));

  });

  gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
  });

  gulp.task('server', ['webserver']);
  gulp.task('default', ['html', 'scripts', 'sw', 'libs' , 'images','css']);