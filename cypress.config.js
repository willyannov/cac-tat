const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "baseUrl": "https://cac-tat.s3.eu-central-1.amazonaws.com/"
  },
});
