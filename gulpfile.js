var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
var browserSync = require('browser-sync').create();

gulp.task('sass', function(done) {
    gulp.src("scss/*.scss")
        .pipe(sass({outputStyle: ''}).on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
        'node_modules/bodymovin/build/player/bodymovin.min.js',
        'node_modules/js-cookie/src/js.cookie.js',
        'node_modules/swiper/dist/js/swiper.min.js',
    ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('js')); // Выгружаем в папку js
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("scss/**/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });
    gulp.watch("js/**/*.js").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});



gulp.task('default', gulp.series('sass', 'serve'));
