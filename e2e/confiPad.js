exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  //'specs': 'Specs/spec1.js',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'device': 'iPad Mini 4',
    'realMobile': 'true',
    'os_version': '11',
    'browserName': 'Safari',

  },
  suites: {
    smoke: ['tests/smoke/sampleTestCase.spec.js'],

    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};