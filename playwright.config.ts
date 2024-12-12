import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://demoqa.com/automation-practice-form",
    headless: false,
    viewport: {
      height: 1080,
      width: 1920,
    },
  },
  reporter: [
    [
      "@serenity-js/playwright-test",
      {
        crew: [
          ["@serenity-js/serenity-bdd", {}],
          [
            "@serenity-js/core:ArtifactArchiver",
            { outputDirectory: "target/site/serenity" },
          ],
        ],
      },
    ],

    // other native Playwright Test reporters
    ["html", { open: "never" }], // built-in Playwright HTML reporter
  ],

  // Other configuration omitted for brevity
  // For details, see https://playwright.dev/docs/test-configuration
};

export default config;
