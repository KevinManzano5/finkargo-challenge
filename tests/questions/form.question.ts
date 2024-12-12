import { By, PageElement } from "@serenity-js/web";

export const firstNameInput = () =>
  PageElement.located(By.id("firstName")).describedAs("First name input box");

export const lastNameInput = () =>
  PageElement.located(By.id("lastName")).describedAs("Last name input box");

export const emailInput = () =>
  PageElement.located(By.id("userEmail")).describedAs("Email input box");

export const genderLabel = () =>
  PageElement.located(By.xpath("//label[@for='gender-radio-1']"));

export const phoneNumberInput = () => PageElement.located(By.id("userNumber"));

export const dateOfBirthInput = () =>
  PageElement.located(By.id("dateOfBirthInput"));

export const monthOfBirthSelect = () =>
  PageElement.located(
    By.xpath("//select[@class='react-datepicker__month-select']")
  );

export const yearOfBirthSelect = () =>
  PageElement.located(
    By.xpath("//select[@class='react-datepicker__year-select']")
  );

export const dayOfBirthOption = () =>
  PageElement.located(
    By.xpath("//div[@class='react-datepicker__day react-datepicker__day--020']")
  );

export const subjectsInput = () => PageElement.located(By.id("subjectsInput"));

export const hobbiesCheckbox = () =>
  PageElement.located(By.xpath("//label[@for='hobbies-checkbox-3']"));

export const addressTextarea = () =>
  PageElement.located(By.id("currentAddress"));

export const modal = PageElement.located(
  By.xpath("//div[@class='modal-content']")
);

export const submitButton = () =>
  PageElement.located(By.id("submit")).describedAs("Submit button");
