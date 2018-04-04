const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
gulp.task("build", () => {
  const tsProject = gulpTypescript.createProject('tsconfig.json');
  tsProject.options.outDir = './out';
  gulp.src('./src/**/*.ts')
    .pipe(gulpSourcemaps.init())
    .pipe(tsProject())
    .pipe(gulpSourcemaps.write('.', {includeContent: true, sourceRoot: '.'}))
    .pipe(gulp.dest('./out/'));
});
gulp.task('default', [`build`]);

