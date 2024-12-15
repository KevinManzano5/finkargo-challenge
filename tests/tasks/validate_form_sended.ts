import { Task } from "@serenity-js/core";
import { isVisible, TakeScreenshot } from "@serenity-js/web";
import { Ensure } from "@serenity-js/assertions";

import { modal } from "../pages/form.page";

export const validateFormSended = (): Task =>
  Task.where(
    `User validates form sended`,
    Ensure.that(modal, isVisible()),
    TakeScreenshot.of("app")
  );
