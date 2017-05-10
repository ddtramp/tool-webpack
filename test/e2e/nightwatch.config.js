require('babel-register')
let testEnv = require('../../config/test.env')

module.exports = {
    "src_folders": ["test/e2e/specs"],
    "output_folder": "test/e2e/reports",
    "custom_commands_path": "",
    "custom_assertions_path": ['test/e2e/custom-assertions'],
    "page_objects_path": "",
    "globals_path": "",

    "selenium": {
        "start_process": true,
        "server_path": require('selenium-server').path,
        "log_path": "./logs/",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": require('chromedriver').path
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "marionette": true,
                "javascriptEnabled": true,
                "acceptSslCerts": true
            },
            globals: {
                devServerURL: 'http://localhost:' + (testEnv.PORT || 8080)
            }
        },

        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },

        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
}
