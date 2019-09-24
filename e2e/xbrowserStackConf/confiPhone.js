exports.config = {

  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  // 'specs': 'Specs/spec1.js',

  'capabilities': {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',
    'device': 'iPhone XS',
    'realMobile': 'true',
    'os_version': '12',
    'browserName': 'Safari',

  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
        regression: ['tests/regression/sampleTestCase.spec.js']
  }


};