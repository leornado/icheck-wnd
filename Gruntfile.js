'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  var config = {};

  grunt.initConfig({

    config: config,

    uglify: {
      dist: {
        src : 'icheck.js',
        dest: 'icheck.min.js'
      }
    }

  });

  grunt.registerTask('build', [
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
