exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': '62.0',

  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};