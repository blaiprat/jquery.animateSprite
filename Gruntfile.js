'use strict';

module.exports = function (grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time at the end
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed MIT */\n',
        // Task configuration.
        clean: {
            files: ['dist', 'test/coverage', 'test/report']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['scripts/**/jquery.animateSprite.js'],
                dest: 'dist/jquery.<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            scripts: {
                src: ['scripts/**/*.js', '!scripts/**/*.min.js']
            },
            test: {
                src: ['test/**/*-test.js']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    livereload: true
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                background: true
            },
            report: {
                singleRun: true,
                browsers: ['Chrome'],
                reporters: ['progress', 'html', 'coverage']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html']
            },
            styles: {
                files: ['styles/**/*.css']
            },
            karma: {
                files: ['scripts/**/*.js', 'test/**/*-test.js'],
                tasks: ['karma:unit:run']
            }
        }
    });

    // Making grunt default to force so it won't die on jshint warnings
    grunt.option('force', true);

    // Default task.
    grunt.registerTask('default', ['clean', 'jshint', 'karma:unit', 'server']);
    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('report', ['clean', 'jshint', 'karma:report']);
    grunt.registerTask('release', ['clean', 'jshint', 'concat', 'uglify']);
};
