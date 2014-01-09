module.exports = function(grunt) {
    'use strict'

    var path = require('path')

    // Force use of Unix newlines
    grunt.util.linefeed = '\n'

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        banner: '/*!\n' +
                ' * Name: Cardinal v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Info: <%= pkg.description %>\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
                ' */\n',

        // Directory variables
        lessDir : 'less/',
        cssDir  : 'css/',
        jsDir  : 'js/',

        // Run LESS CSS compilation
        less: {
            compile: {
                files: {
                    "<%= cssDir %><%= pkg.name %>.css": "<%= lessDir %><%= pkg.name %>.less"
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'css/<%= pkg.name %>.min.css': 'css/<%= pkg.name %>.css',
                }
            }
        },

        // Automatically prefix CSS based on Can I Use database
        autoprefixer: {
            options: {
                browsers: [
                    'chrome 25',
                    'firefox 19',
                    'safari 6',
                    'ie 9',
                    'opera 12.1',
                    'ios 4',
                    'android 4.2'
                ]
            },
            files: {
                src: [
                    'css/<%= pkg.name %>.css',
                    'css/<%= pkg.name %>.min.css',
                ]
            }
        },

        // Remove comments final CSS
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            single_file: {
                src: 'css/<%= pkg.name %>.min.css',
                dest: 'css/<%= pkg.name %>.min.css'
            }
        },

        // Add a nice banner to the compiled CSS
        usebanner: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            files: {
                src: [
                    'css/<%= pkg.name %>.css',
                    'css/<%= pkg.name %>.min.css',
                ]
            }
        },

        // Watch for changes on these files and recompile when changed
        watch: {
            options: {
                nospawn: true
            },
            less: {
                files: ['<%= lessDir %>**/*.less'],
                tasks: ['less', 'usebanner']
            }
        }
    })


    // Grunt plugins
    grunt.loadNpmTasks('grunt-autoprefixer')
    grunt.loadNpmTasks('grunt-banner')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Registered Grunt tasks
    grunt.registerTask('default', [
        'less',
        'autoprefixer',
        'cssmin',
        'usebanner',
        'watch'
    ])
}