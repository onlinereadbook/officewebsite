var os = require('os');
var url = require('./env/url.js');

var config = {
    "src_folders": [
        "test" // Where you are storing your Nightwatch e2e tests
    ],
    'page_objects_path': ['test/pages'],
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "./bin/selenium-server.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver": "nightwatch",
            "webdriver.firefox.profile": "nightwatch"
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": false, // if you want to keep screenshots
                "path": './screenshots' // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
                "url_index": url.index
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            },
            // "desiredCapabilities": {
            //     "browserName": "phantomjs",
            //     "javascriptEnabled": true,
            //     "acceptSslCerts": true,
            //     "phantomjs.binary.path": "node_modules/phantomjs/bin/phantomjs",
            //     "phantomjs.cli.args": "--webdriver=5558 --webdriver-selenium-grid-hub=http://localhost:4444"
            // },
            "skip_testcases_on_fail": true
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        }
    }
}

// condition os type
var os_type = os.type().toLowerCase();
var selenium_cli = config.selenium.cli_args;
if (os_type.indexOf('windows') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_windows.exe';
} else if (os_type.indexOf('darwin') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_mac';
} else {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_linux64';
}

module.exports = config;
