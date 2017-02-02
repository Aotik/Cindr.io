module.exports = function(grunt) {

	grunt.initConfig({
		pug: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'index.html': ['pug/index.pug'],
					'terms.html': ['pug/terms.pug']
				}
			}
		},
		watch: {
			scripts: {
				files: 'pug/*.pug',
				tasks: ['default'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['pug']);

};
