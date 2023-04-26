const { defineConfig } = require("cypress")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: false,
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
  env: {
    baseUrl: "https://www.perlego.com/"
  },
  viewportWidth: 1536,
  viewportHeight: 960,
})
