const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('default',['clean','less'], function () {
    console.log('done')
        
})

gulp.task('less', () => {
    gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 5 version', 'Firefox > 20'],
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build'))
});

gulp.task('clean', () => {
    del.sync('build');
})

gulp.task('watch', () => {
   const watcher =  gulp.watch('src/**/*', ['default']);
   watcher.on('change', event =>{
       console.log('File' + event.path + 'was' + event.type);
   })
})