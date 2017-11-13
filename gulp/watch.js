var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){

  broswerSync.init( {
    notify: false,
    server: {
      baseDire: "app"
    }
  });

  watch('/app/index.html', function(){
    console.log("Something cool is happening to your html");
    browserSync.reload();
  });





})
