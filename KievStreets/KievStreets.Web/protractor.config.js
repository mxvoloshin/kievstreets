exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'tests/e2eTests/**/*.js'
    ],
    multiCapabilities: [{
       // browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    rootElement: '  app',
    jasmineNodeOpts: {
        showColors: true
    },
    suites: {
        editprofile: 'tests/e2eTests/editProfile.js'
    }
    
}