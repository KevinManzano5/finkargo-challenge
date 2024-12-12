import { Task } from "@serenity-js/core";
import { Click, Enter, Select } from "@serenity-js/web";

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
} from "../questions/form.question";

export interface Options {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subjects: string;
  address: string;
}

export const fillForm = ({
  address,
  email,
  firstName,
  lastName,
  phoneNumber,
  subjects,
}: Options): Task =>
  Task.where(
    `User fills form`,
    Enter.theValue(firstName).into(firstNameInput()),
    Enter.theValue(lastName).into(lastNameInput()),
    Enter.theValue(email).into(emailInput()),
    Click.on(genderLabel()),
    Enter.theValue(phoneNumber).into(phoneNumberInput()),
    Click.on(dateOfBirthInput()),
    Select.value("9").from(monthOfBirthSelect()),
    Select.value("2003").from(yearOfBirthSelect()),
    Click.on(dayOfBirthOption()),
    Enter.theValue(subjects).into(subjectsInput()),
    Click.on(hobbiesCheckbox()),
    Enter.theValue(address).into(addressTextarea())
  );
