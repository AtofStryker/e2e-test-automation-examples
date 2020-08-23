module.exports = {
  launchOptions: {
    headless: !!process.env.CI,
    devtools: !!process.env.CI,
    ...(process.env.DEBUG
      ? {
          slowMo: 200,
        }
      : {}),
  },
  browsers: ["chromium", "webkit"],
  devices: ["iPhone 11", "Pixel 2"],
};
