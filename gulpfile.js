const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const purgecss = require('gulp-purgecss');

// Minify CSS and remove unused CSS
function styles() {
  return gulp.src('style.css')
    .pipe(purgecss({
      content: ['*.html', 'script.js']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

// Minify JS
function scripts() {
  return gulp.src('script.js')
    .pipe(terser())
    .pipe(gulp.dest('dist'));
}

// Optimize Images and Convert to WebP
function images() {
  return gulp.src(['Images/*', 'image/*'], { allowEmpty: true })
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest('dist/Images'));
}

// Watch files for changes
function watch() {
  gulp.watch('style.css', styles);
  gulp.watch('script.js', scripts);
  gulp.watch(['Images/*', 'image/*'], images);
  gulp.watch('*.html', styles); // rerun styles if html changes (for purgecss)
}

const build = gulp.series(gulp.parallel(styles, scripts, images));

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
