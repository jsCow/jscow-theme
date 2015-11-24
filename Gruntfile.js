module.exports = function(grunt) {
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			clean: [
				"dist"
			]
		},
		
		less: {
			production: {
				options: {
					cleancss: true,
					compress: true,
					sourceMap: true,
                    sourceMapFilename: "theme-min.css.map",
                    sourceMapBasepath: "dist/css"
				},
				files: {
					"dist/css/theme-min.css": ["dist/css/less/theme.less"]
				}
			}
		},
		
		copy: {
			main: {
				files: [
					{
	                    expand: true,
	                    cwd: 'src/',
	                    src: ['index.html'],
	                    dest: 'dist'
					},
					{
	                    expand: true,
	                    cwd: 'node_modules/jquery/dist',
	                    src: ['jquery.min.js'],
	                    dest: 'dist/js/jquery'
					},
					{
	                    expand: true,
	                    cwd: 'node_modules/font-awesome',
	                    src: ['fonts/**'],
	                    dest: 'dist'
					},
					{
	                    expand: true,
	                    cwd: 'node_modules/bootstrap/less',
	                    src: ['**'],
	                    dest: 'dist/css/less/bootstrap'
					},
					{
	                    expand: true,
	                    cwd: 'node_modules/font-awesome/less',
	                    src: ['**'],
	                    dest: 'dist/css/less/font-awesome'
					},
					{
	                    expand: true,
	                    cwd: 'src/less',
	                    src: ['**'],
	                    dest: 'dist/css/less'
					},
					grunt.file.expand(['node_modules/jscow-*/src/less']).map(function(cwd) {
			            return [
			            	{
			                	expand: true,
			                	cwd: cwd,
			                	src: ["**"],
			                	dest: "dist/css/less"
			            	}
			            ];
			        })
				]
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'node_modules/jscow/dist/jscow/jscow.min.js',
					'node_modules/jscow-*/dist/jscow/components/*.min.js'
				],
				dest: 'dist/js/jscow/jscow.min.js'
			}
		},

		uglify: {
			options: {
				mangle: {
					except:	['jQuery']
				}
			},
			my_target: {
				options: {
					mangle: false
				},
				files: [
					{
						'dist/js/app/theme-app.min.js': ['src/app/theme-app.js']
					}
				]
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: [
					'src/**/*.less',
					'src/**/*.js'
				],
				tasks: [
					'copy',
					'less'
				],
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'copy',
		'less',
		'concat',
		'uglify'
	]);
	
};
