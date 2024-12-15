import path from "path";
import { cwd } from "process";
import { Page } from "@playwright/test";
import { Interaction, Task } from "@serenity-js/core";

export const uploadImage = (page: Page): Task =>
  Task.where(
    `#actor upload picture`,
    Interaction.where(`User select picture`, async () => {
      await page
        .locator("css=#uploadPicture")
        .setInputFiles([path.join(`${cwd()}/uploads`, "image.jpg")]);
    })
  );
