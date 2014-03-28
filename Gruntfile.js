module.exports = function (grunt) {
	'use strict';
    // Project configuration
    grunt.initConfig({
        // Task configuration
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {
                  "angular"    : false,
                  "describe"   : false,
                  "it"         : false,
                  "before"     : false,
                  "beforeEach" : false,
                  "after"      : false,
                  "afterEach"  : false,
                  "inject"  : false,
                  "expect"  : false
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        karma: {
          unit: {
            configFile: 'karma.conf.js'
          }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'karma']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // Default task
    grunt.registerTask('default', ['jshint', 'karma']);
};