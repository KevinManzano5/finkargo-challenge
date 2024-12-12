import { describe, it } from "@serenity-js/playwright-test";
import { isVisible, Navigate } from "@serenity-js/web";
import { Ensure } from "@serenity-js/assertions";

import { fillForm } from "./tasks/fill_form.task";
import { modal } from "./questions/form.question";

describe("Fill form", () => {
  it("User fill form", async ({ actor }) => {
    await actor.attemptsTo(
      Navigate.to("/automation-practice-form"),
      fillForm({
        address: "Mason Street",
        email: "john@gmail.com",
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "3123456789",
        subjects: "Testing",
      }),
      Ensure.that(modal, isVisible())
    );
  });
});
