module.exports = function (grunt) {
    grunt.initConfig({
        requirejs:{
            compile: {
               options: {
                 paths: {
            
                     jquery:"http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
                             underscore:'http://underscorejs.org/underscore-min.js',
                                     backbone:'http://backbonejs.org/backbone-min.js'
                                         },
optimize:'none',
                    baseUrl: "src",
                    mainConfigFile:"src/alerts/main.js",
                    name:"alerts/main",
                    out:'build/alerts.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
