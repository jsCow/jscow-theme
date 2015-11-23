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
					//relativeUrls: true,
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
	                    cwd: 'node_modules/jquery/dist',
	                    src: ['jquery.min.js'],
	                    dest: 'dist/js/jquery'
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
	                    cwd: 'node_modules/font-awesome',
	                    src: ['fonts/**'],
	                    dest: 'dist'
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
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'copy',
		'less'
	]);

};
