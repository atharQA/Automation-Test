exports.config = {

  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  capabilities: {
    'browserstack.user': 'testing1715',
    'browserstack.key': 'iaxsUZNY-valid-key',

    'device': 'Samsung Galaxy Tab S4',
    'realMobile': 'true',
    'os_version': '8.1',
    'browserName': 'Chrome',

  },
  suites: {
    smoke:['tests/smoke/sampleTestCase.spec.js'],
      
    regression: ['tests/regression/sampleTestCase.spec.js']
  }
};