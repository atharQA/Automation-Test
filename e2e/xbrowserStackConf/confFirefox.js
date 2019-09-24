exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  //'specs': 'Specs/spec1.js',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Firefox',
    'browser_version': '66.0 beta',
    'resolution': '1024x768'
  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};