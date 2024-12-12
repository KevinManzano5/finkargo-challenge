import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";

import { submitButton } from "../questions/form.question";

export const submitForm = (): Task =>
  Task.where(`User sends form`, Click.on(submitButton()));
