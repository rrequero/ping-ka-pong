var path = require('path');

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mochaTest:{
            test:{
                options:{
                    reporter:'spec',
                    mocha:require("mocha-co")
                },
                src:['src/test/**/*.js']
            }
        },
        jshint: {
            src: [
                'src/**/*.js', '!src/public/**/*', '!src/views/**/*'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true,
                esnext: true, 
                noyield: true
            },
            globals: {}
        },

        express: {
            dev: {
                options :{
                    script: './src/app.js',
                    opts: ['--harmony'],
                    output:'Server started'
                }
            }
        },

        watch: {
            gruntfile: {
                files: 'gruntfile.js',
                tasks: [ 'jshint:gruntfile' ]
            },
            jssrc: {
                files: [
                    'src/**/*.js'
                ],
                tasks: [ 'jshint:src'/*, "mochaTest:test"*/, 'express:dev'],
                options:{
                    spawn:false,
                    livereload:true
                }
            },
            test: {
                files: [
                    'src/test/**/*.js'
                ],
                tasks: [ 'mochaTest:test']
            },
            less:{
                files: [
                    'src/public/private/**/*.less'
                ],
                tasks: ["less:developmentPrivate"],
                options:{
                    spawn:false,
                    livereload:true
                }
            }

        }
    });


    grunt.registerTask('test', 'mochaTest');

    grunt.registerTask('default', [ 'express:dev', 'watch']);


};