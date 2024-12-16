import { describe, it, test } from "@serenity-js/playwright-test";
import { actorCalled } from "@serenity-js/core";
import { BrowseTheWebWithPlaywright } from "@serenity-js/playwright";

import { fillForm, submitForm, uploadImage, validateFormSended } from "./tasks";

test.use({
  actorCalled: async ({ actorCalled, contextOptions, page }, use) => {
    await use((name: string) => {
      return actorCalled(name).whoCan(
        BrowseTheWebWithPlaywright.usingPage(page, contextOptions)
      );
    });
  },
});

describe("Practice Form", () => {
  it("should allow the form to be submitted if all the data is correct", async ({
    actor,
    page,
  }) => {
    actor = actorCalled("Tony");

    await actor.attemptsTo(
      fillForm(),
      uploadImage(page),
      submitForm(),
      validateFormSended()
    );
  });
});
