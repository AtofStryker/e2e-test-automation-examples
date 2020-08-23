beforeAll(async () => {
  await page.goto("https://whatismybrowser.com/");
});

test("should run in browsers", async () => {
  const browser = await page.$eval(".string-major", (el) => el.innerHTML);
  expect(browser).toEqual(expect.stringMatching(/Safari|Chrome/));
});
