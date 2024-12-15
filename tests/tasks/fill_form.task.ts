import { Task } from "@serenity-js/core";
import { Click, Enter, Navigate, Select } from "@serenity-js/web";
import { fakerEN_US as faker } from "@faker-js/faker";

import {
  addressTextarea,
  dateOfBirthInput,
  dayOfBirthOption,
  emailInput,
  firstNameInput,
  genderLabel,
  hobbiesCheckbox,
  lastNameInput,
  monthOfBirthSelect,
  phoneNumberInput,
  subjectsInput,
  yearOfBirthSelect,
} from "../pages/form.page";

export const fillForm = (): Task =>
  Task.where(
    `#actor fills form`,
    Navigate.to("/automation-practice-form"),
    Enter.theValue(faker.person.firstName()).into(firstNameInput()),
    Enter.theValue(faker.person.lastName()).into(lastNameInput()),
    Enter.theValue(faker.internet.email()).into(emailInput()),
    Click.on(genderLabel()),
    Enter.theValue(
      faker.phone.number({ style: "international" }).replace("+", "")
    ).into(phoneNumberInput()),
    Click.on(dateOfBirthInput()),
    Select.value("9").from(monthOfBirthSelect()),
    Select.value("2003").from(yearOfBirthSelect()),
    Click.on(dayOfBirthOption()),
    Enter.theValue(faker.person.jobArea()).into(subjectsInput()),
    Click.on(hobbiesCheckbox()),
    Enter.theValue(faker.location.streetAddress()).into(addressTextarea())
  );
