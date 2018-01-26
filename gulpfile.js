// Requis
var gulp = require('gulp')

// Include Plugins
//var nodemon = require('gulp-nodemon')

// Variable de chemin
var source = './src',
		app = './src/App',
		main = './src/App/main.js', 
		destination = './dist/App';

// Taches //

// gulp.task('swaggy', (done) => {
// 	console.log("Trop de Swagg !")
//   done()
// })

// gulp.task('nodemon', (done) =>{
// 	nodemon({
// 		script: main,
// 		ext: 'js',
// 		env: { 'NODE_ENV': 'development' }
// 	})
// 	done()
// })

// //////////////////////////////////////////////////

// gulp.task('watch', (done) => {
// 	gulp.watch(app, gulp.series('nodemon'))
// 	done()
// });