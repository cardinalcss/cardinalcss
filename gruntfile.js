module.exports = function(grunt) {
    'use strict';

    var path = require('path');

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pkgName: '<%= pkg.name.toLowerCase() %>',
        banner: '/*! <%= pkgName %> v<%= pkg.version %> | <%= _.pluck(pkg.licenses, "type") %> License | <%= pkg.homepage %> */',

        // Directory variables
        cssDir: 'css/',
        distDir: 'dist/',
        jsDir: 'js/',
        lessDir: 'less/',

        // Run LESS CSS compilation
        less: {
            compile: {
                files: {
                    '<%= distDir %><%= cssDir %><%= pkgName %>.css': '<%= lessDir %><%= pkgName %>.less'
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    '<%= distDir %><%= cssDir %><%= pkgName %>.min.css': '<%= distDir %><%= cssDir %><%= pkgName %>.css'
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
                    '<%= distDir %><%= cssDir %><%= pkgName %>.css': '<%= distDir %><%= cssDir %><%= pkgName %>.css'
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['<%= jsDir %>**/*.js'],
                        dest: '<%= distDir %>'
                    }
                ]
            }
        },

        // Add a nice banner to the CSS files
        usebanner: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            src: '<%= distDir %><%= cssDir %>**/*.css',
            dest: '<%= distDir %>'
        },

        // Watch for changes on these files and recompile when changed
        watch: {
            less: {
                files: ['<%= lessDir %>**/*.less'],
                tasks: ['default']
            }
        }
    });

    // Grunt plugins
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registered Grunt tasks
    grunt.registerTask('default', [
        'less:compile',
        'autoprefixer',
        'less:minify',
        'usebanner',
        'watch'
    ]);

    grunt.registerTask('dist', [
        'less:compile',
        'autoprefixer',
        'less:minify',
        'usebanner',
        'copy:dist'
    ]);
};
