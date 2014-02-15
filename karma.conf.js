'use strict';

module.exports = function (config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',


    // frameworks to use
    frameworks: ['jasmine'],


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // list of files / patterns to load in the browser
    files: [
      // include dependencies
      'bower_components/jquery/jquery.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

      // include our JavaScript files
      'scripts/example.js',

      // simple patterns to load the needed testfiles
      // equals to {pattern: 'test/*-test.js', watched: true, served: true, included: true}
      'test/*-test.js',

      // fixtures should be served by the webserver but not included on
      // the page with <script> tags
      {
        pattern: 'test/fixtures/example.html',
        included: false,
        served: true
      }
    ],


    // list of files to exclude
    exclude: [

    ],

    preprocessors: {
      // disable html2js preprocessor so we can use
      // jasmine-jquery fixture loader instead
      // https://github.com/karma-runner/karma/issues/788
      '**/*.html': [],
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'scripts/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // configure the html reporter.
    // this will output reports in the test/report dir which can be opened
    // and viewed in your browser
    htmlReporter: {
      outputDir: 'test/report',
      templatePath: './node_modules/karma-html-reporter/jasmine_template.html'
    },

    // configure the code coverage reporter.
    // this will output coverage reports in the test/coverage dir using Istanbul
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
