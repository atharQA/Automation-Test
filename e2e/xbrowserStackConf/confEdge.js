exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Edge',
    'browser_version': '18.0',
    'resolution': '1024x768'

  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};