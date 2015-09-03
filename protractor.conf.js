// sudo webdriver-manager update

// This next command need to be runned on another terminal tab before testing
// sudo webdriver-manager start

// run tests by `protractor protractor.conf.js`

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/e2e/test.js'],
  capabilities: {
    'browserName': 'firefox' // chrome is not working :(
  },
};
