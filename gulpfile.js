'use strict';
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	pug = require("gulp-pug"),
	autoprefixer = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	browserSync = require("browser-sync"),
	reload = browserSync.reload,
	spritesmith = require("gulp-spritesmith"),
	gulpif = require("gulp-if"),
	imagemin = require("gulp-imagemin");


var path = {
	src: {
		sass: "./src/sass/**/*.sass",
		pug: "./src/pug/index.pug",
		pugWatch: "./src/pug/**/*.pug",
		concat: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/owl.carousel/dist/owl.carousel.js",
			"node_modules/wow.js/dist/wow.min.js",
			"./src/lib/*.js"
		],
		fonts: "./src/fonts/**/*.*"
	},
	dest: {
		sass: "dist/css",
		pug: "./dist/",
		concat: "dist/js/",
		fonts: "dist/fonts"
	}
}

gulp.task("fonts", function(){
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.dest.fonts))
});



gulp.task("imagemin", function(){
	return gulp.src("./src/img/*")
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
				]
			})
			]))
		.pipe(gulp.dest("dist/image/"));
});

gulp.task('sprite', function () {
    return  gulp.src('./dist/image/*.png')
	    .pipe(spritesmith({
	    	imgName: 'sprite.png',
	    	styleName: 'sprite.css',
	    	imgPath: 'dist/image/sprite.png'
	    }))
	    .pipe(gulpif('*.png', gulp.dest('./dist/image/')))
	    .pipe(gulpif('*.css', gulp.dest('./dist/css/')));
});

gulp.task("watch", function(){
	gulp.watch(path.src.sass, gulp.series("sass"));
	gulp.watch(path.src.pugWatch, gulp.series("pug"));
	gulp.watch("./src/lib/*.js", gulp.series("concat"));
});

 gulp.task("Hello", function(){
 	console.log("Привет Я работаю!");
 });
 gulp.task("sass", function(){
	return gulp.src(path.src.sass)
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(path.dest.sass))
		.pipe(reload({
			stream: true
		}));
});
 gulp.task("pug", function(){
	return gulp.src(path.src.pug)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(path.dest.pug))
		.pipe(reload({
			stream: true
		}));
});
 gulp.task("concat", function(){
	return gulp.src(path.src.concat)
		.pipe(concat("all.js"))
		.pipe(gulp.dest(path.dest.concat))
		.pipe(reload({
			stream: true
		}));
});
 gulp.task('browserSync',function(){
	return browserSync({
		server: {
			baseDir: "dist/"
		},
		port: 8080,
		open: true,
		notify: false
	});
});

 gulp.task("default", gulp.series("sass","pug","concat",gulp.parallel("watch","browserSync")));
