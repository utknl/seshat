const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false
  },
  env: {
    baseUrl: "https://www.perlego.com/"
  },
  viewportWidth: 1536,
  viewportHeight: 960,
})
