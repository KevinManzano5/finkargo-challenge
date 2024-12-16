import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";

import { submitButton } from "../pages/form.page";

export const submitForm = (): Task =>
  Task.where(`#actor sends form`, Click.on(submitButton()));
