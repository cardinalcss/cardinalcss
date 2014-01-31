module.exports = function(grunt) {
    'use strict'

    var path = require('path')

    // Force use of Unix newlines
    grunt.util.linefeed = '\n'

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= _.pluck(pkg.licenses, "type") %> License | <%= pkg.homepage %> */',

        // Directory variables
        lessDir : 'less/',
        cssDir  : 'css/',
        distDir : 'dist/',

        // Run LESS CSS compilation
        less: {
            compile: {
                files: {
                    "<%= distDir %><%= pkg.name.toLowerCase() %>.css": "<%= lessDir %><%= pkg.name.toLowerCase() %>.less"
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    "<%= distDir %><%= pkg.name.toLowerCase() %>.min.css": "<%= distDir %><%= pkg.name.toLowerCase() %>.css"
                }
            }
        },

        // Automatically prefix CSS based on Can I Use database for the following browsers versions
        autoprefixer: {
            development: {
                browsers: [
                    'chrome 25',
                    'firefox 19',
                    'safari 6',
                    'ie 9',
                    'opera 12.1',
                    'ios 4',
                    'android 4.2'
                ],
                files: {
                    "<%= distDir %><%= pkg.name.toLowerCase() %>.css": "<%= distDir %><%= pkg.name.toLowerCase() %>.css"
                }
            }
        },

        // Add a nice banner to the CSS files
        usebanner: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            src: '<%= distDir %>**/*.css',
            dest: '<%= distDir %>'
        },

        // Watch for changes on these files and recompile when changed
        watch: {
            less: {
                files: ['<%= lessDir %>**/*.less'],
                tasks: ['less', 'autoprefixer', 'usebanner']
            }
        }
    })

    // Grunt plugins
    grunt.loadNpmTasks('grunt-autoprefixer')
    grunt.loadNpmTasks('grunt-banner')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Registered Grunt tasks
    grunt.registerTask('default', [
        'less:compile',
        'autoprefixer',
        'less:minify',
        'usebanner',
        'watch'
    ])
}
