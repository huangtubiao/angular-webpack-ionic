var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');

var paths = {
  	sass: ['./scss/**/*.scss']
};

var APP = __dirname + '/www';

var webpackConfig = {
	context: APP,
	entry: [
		"./js/app.js"
	],
	output: {
		path: APP,
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: "html-loader" },
			{ test: /\.css$/, loader: "style!css"},
			{
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: /node_modules|bower_components/
            }
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin()
		// new webpack.optimize.UglifyJsPlugin({
		// 	mangle: false
		// }) 
	]
};

gulp.task('sass', function(done) {
	gulp.src('./scss/**/*.scss')
	    .pipe(sass())
	    .on('error', sass.logError)
	    .pipe(gulp.dest('./www/css/'))
	    .pipe(minifyCss({
	      	keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('./www/css/'))
	    .on('end', done);
});

gulp.task("webpack", function() {
	gulp.src('./www/js/app.js')
		.pipe(gulpWebpack(webpackConfig, webpack))
		.pipe(gulp.dest('./www/'))
});

gulp.task('watch', function() {
  	gulp.watch(paths.sass, ['sass', 'webpack']);
  	gulp.watch('./www/js/**/*.*', ['webpack']);
});

