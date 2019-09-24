exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'os': 'OS X',
    'os_version': 'Mojave',
    'browserName': 'Safari',
    'browser_version': '12.0',
    'resolution': '1024x768'

  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};