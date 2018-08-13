var gulp = require('gulp');

var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var babel = require('gulp-babel');

var paths = {
    scripts: ['src/js/**/*.js'],
    images: 'src/images/**/*',
    css: 'src/styles/**/*',
    libs: 'src/libs/**/*',
    html: 'src/**/*.html',
    sw: ['src/sw.js','manifest.json']
  };



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
      .pipe(gulp.dest('build'));
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


  gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
  });


  gulp.task('default', ['html', 'scripts', 'sw', 'libs' , 'images','css']);