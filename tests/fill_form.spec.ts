import { describe, it } from "@serenity-js/playwright-test";

import { fillForm, submitForm, uploadImage, validateFormSended } from "./tasks";

describe("Practice Form", () => {
  it("should allow the form to be submitted if all the data is correct", async ({
    actor,
    page,
  }) => {
    await actor.attemptsTo(
      fillForm(),
      uploadImage(page),
      submitForm(),
      validateFormSended()
    );
  });
});
