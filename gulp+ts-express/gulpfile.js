const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpNodemon = require('gulp-nodemon');

gulp.task("build",async () => {
  const tsProject = gulpTypescript.createProject('tsconfig.json');
  tsProject.options.outDir = './out';
  return gulp.src('./src/**/*.ts')
    .pipe(gulpSourcemaps.init())
    .pipe(tsProject())
    .pipe(gulpSourcemaps.write('.', { includeContent: true, sourceRoot: '.' }))
    .pipe(gulp.dest('./out/'));
});
gulp.task('watch', function () {
  gulp.watch(`src/**/*.ts`, [`build`]);
});
gulp.task('nodemon',  (cd) =>{
  let start = false;
  return gulpNodemon({
    script: './out/index.js',
    ext: 'js ts',
    nodeArgs: [
      "--inspect=9229"
    ]
  }).on('start', function () {
    if (!start) {
      cd();
      console.log(`nodemon-finish`);
      start = true;
    }
  });
});
gulp.task('default', [`build`,"watch", "nodemon"]);
