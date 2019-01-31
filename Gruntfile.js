module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jshint: {
            sample: {
                files: 'src/*.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 3001,
                    base: 'www',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:3001/index.html',
                        appName: 'firefox',
                        callback: function () {
                            console.log("pagina de server grunt");
                        }
                    }
                }
            }
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', []);
};
