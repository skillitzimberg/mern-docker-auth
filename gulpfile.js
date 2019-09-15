const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const projectTS = gulpTS.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = projectTS.src()
  .pipe(projectTS());
  return tsResult.js.pipe(gulp.dest('dist'));
})

gulp.task('watch', gulp.series(gulp.parallel('scripts'), function watchTask() {
  gulp.watch('src/**/*.ts', ['scripts']);
}));

gulp.task('assets', function assetsTask() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(gulp.parallel('watch', 'assets'), function defaultTask() {
  gulp.watch('src/**/*.ts', ['scripts']);
}));