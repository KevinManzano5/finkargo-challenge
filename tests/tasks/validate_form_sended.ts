import { Task } from "@serenity-js/core";
import { Click, isVisible, TakeScreenshot } from "@serenity-js/web";
import { Ensure, equals } from "@serenity-js/assertions";

import { closeModalButton, modal, modalTitleText } from "../pages";

export const validateFormSended = (): Task =>
  Task.where(
    `#actor validates form sended`,
    Ensure.that(modal(), isVisible()),
    Ensure.that(
      modalTitleText().text(),
      equals("Thanks for submitting the form")
    ),
    TakeScreenshot.of("Resume"),
    Click.on(closeModalButton())
  );
