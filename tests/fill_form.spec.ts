import { describe, it } from "@serenity-js/playwright-test";
import { Navigate } from "@serenity-js/web";

import { fillForm, submitForm, uploadImage, validateFormSended } from "./tasks";

describe("Fill form", () => {
  it("User fill form", async ({ actor, page }) => {
    await actor.attemptsTo(
      Navigate.to("/automation-practice-form"),
      fillForm(),
      uploadImage(page),
      submitForm(),
      validateFormSended()
    );
  });
});
