import { describe, it } from "@serenity-js/playwright-test";
import { Navigate } from "@serenity-js/web";

import { fillForm, submitForm, validateFormSended } from "./tasks";

describe("Fill form", () => {
  it("User fill form", async ({ actor }) => {
    await actor.attemptsTo(
      Navigate.to("/automation-practice-form"),
      fillForm(),
      submitForm(),
      validateFormSended()
    );
  });
});
