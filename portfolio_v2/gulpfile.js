"use strict";

// dependencies

var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");

//////////////
// - SCCS/CSS
//////////////

var SCSS_SRC = "./src/Assets/scss/**/*.scss";
var SCSS_DEST = "./src/Assets/css";

// Compile SCSS
gulp.task(
  "compile_scss",
  gulp.series(function() {
    gulp
      .src(SCSS_SRC)
      .pipe(sass().on("errror", sass.logError))
      .pipe(minifyCSS())
      .pipe(rename({ suffix: ".min" }))
      .pipe(changed(SCSS_DEST))
      .pipe(gulp.dest(SCSS_DEST));
  })
);

// detect changes in SCSS
gulp.task(
  "watch_scss",
  gulp.series(function() {
    gulp.watch(SCSS_SRC, gulp.series("compile_scss"));
  })
);

// run tasks
gulp.task("default", gulp.series("watch_scss"));
