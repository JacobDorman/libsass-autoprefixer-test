module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'css/pre.css': 'scss/app.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')().postcss
                ]
            },
            dist: {
                src: 'css/pre.css',
                dest: 'css/app.css'
            }
        }
    });

    grunt.registerTask('default', ['sass', 'postcss']);

};
