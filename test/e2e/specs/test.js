// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL
        // todo use you own logic
        browser
            .url(devServer)
            // .waitForElementVisible('#app', 5000)
            // .moveToElement('.body', 30, 40, () => {
            //     browser.expect.element('.body tr:first-child .addArea span').to.be.visible
            //     browser.click('.body tr:first-child .addArea span')
            //     browser.assert.elementCount('.body tr', 5)
            // })
            // .end()
    }
}
