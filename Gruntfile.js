'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		clean:{
			doc:{
				src:['doc']
			}	
		},

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    mocha: require('mocha-co')
                },
                src: ['src/test/**/*.js']
            }
        },
        jshint: {
            src: [
                'src/**/*.js', '!src/public/**/*', '!src/views/**/*'
            ],

            options: {
                jshintrc: true
            },
            globals: {}
        },

        express: {
            dev: {
                options: {
                    script: './src/app.js',
                    node_env: 'dev',
                    harmony: true,
                    output: 'Server started'
                }
            }
        },
        apidoc: {
            myapp: {
                src: "src/",
                dest: "doc/"
            }
        },
        watch: {
            gruntfile: {
                files: 'gruntfile.js',
                tasks: ['jshint:gruntfile']
            },
            jssrc: {
                files: [
                    'src/**/*.js'
                ],
                tasks: ['jshint:src' /*, 'mochaTest:test'*/ , 'express:dev'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            test: {
                files: [
                    'src/test/**/*.js'
                ],
                tasks: ['mochaTest:test']
            },
            less: {
                files: [
                    'src/public/private/**/*.less'
                ],
                tasks: ['less:developmentPrivate'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }

        }
    });


    grunt.registerTask('test', 'mochaTest');
	
	grunt.registerTask('doc', ['clean:doc', 'apidoc']);

    grunt.registerTask('default', ['express:dev', 'watch']);


};