module.exports = function ( grunt ){

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({

        watch: { 
             options: {
                // Start a live reload server on the default port 35729
                livereload: true,
            },
            html:{
              files: '*.html'
            }
          
        },
        sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'css/style.css': 'sass/style.scss',       // 'destination': 'source'
              }
            }
          }
    });

}
