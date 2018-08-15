'use strict'

module.exports = function() {
  $.gulp.task("js", function() {
    return $.gulp.src("./src/js/**/*.js")
    .pipe($.gp.plumber())
    .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('all.js'))
      .pipe($.gp.uglify())
      .pipe($.gp.rename("main.min.js"))
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest("./build/js"))
    .pipe($.browserSync.stream())
  });
}