// An example configuration file.
exports.config = {
  directConnect: true,

  mochaOpts: {reporter: 'spec', timeout: 50000},

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites: {
    //test1 : 'test/egSpec.js',
    //test2 : 'test/upwork.spec.js',
    //test4: 'test/googleSearch.spec.js',
    test3: 'orange.spec.js'
  },

  // Options to be passed to Jasmine.
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // }
};
