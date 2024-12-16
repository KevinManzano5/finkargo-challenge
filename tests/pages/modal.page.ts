import { By, PageElement } from "@serenity-js/web";

export const closeModalButton = () =>
  PageElement.located(By.id("closeLargeModal"));

export const modal = () =>
  PageElement.located(By.xpath("//div[@class='modal-content']"));

export const modalTitleText = () =>
  PageElement.located(By.id("example-modal-sizes-title-lg"));
