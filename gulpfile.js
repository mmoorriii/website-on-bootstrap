const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglifyJS = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('clone-files', async () => {
   return gulp.src('app/*.html')
      .pipe(gulp.dest('public/'))
})

gulp.task('clone-image', async () => {
   return gulp.src('app/img/*')
      .pipe(gulp.dest('public/img/'))
})

gulp.task('sassToCSS', async () => {
   return gulp.src('app/scss/*.scss')
      .pipe(sass({
         errorLogToConsole: true,
         //outputStyle: 'compressed'
      }))
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('public/css/'))
      .pipe(autoprefixer({
         ovverideBrowserlist: ['last 20 versions'],
         cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('public/css/'))
})

gulp.task('minify-js', async () => {
   return gulp.src('app/**/*.js')
      .pipe(gulp.dest('public/'))
      .pipe(uglifyJS())
      .pipe(rename('script.min.js'))
      .pipe(gulp.dest('public/js/'))
})

gulp.task('local-server', async () => {
   browserSync.init({
      server: 'public'
   })
   browserSync.watch('public/**/*').on('change', browserSync.reload)
})

gulp.task('watch-files', async () => {
   gulp.watch('app/*.html', gulp.series('clone-files'))
   gulp.watch('app/img/*', gulp.series('clone-image'))
   gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'))
   gulp.watch('app/**/*.js', gulp.series('minify-js'))
})

gulp.task('default', gulp.parallel('watch-files', 'local-server'))