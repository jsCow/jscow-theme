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
					paths: ["src/less"],
					cleancss: true,
					modifyVars: {
						//imgPath: '"http://"'
					}
				},
				files: {
					"dist/css/theme-min.css": "src/less/theme.less"
				}
			}
		},
		
		copy: {
			main: {
				files: [
					{
	                    expand: true,
	                    //dot: true,
	                    cwd: 'src/less',
	                    src: ['**'],
	                    dest: 'dist/less'
					}
				]
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'less',
		'copy'
	]);

};
