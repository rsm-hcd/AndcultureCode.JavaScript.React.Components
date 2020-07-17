import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import { TextAreaFormField } from "./text-area-form-field";
import faker from "faker";

export default {
    component: TextAreaFormField,
    title: "Molecules | Forms / TextArea Form Field",
};

export const textAreaFormFieldKnobs = () => (
    <TextAreaFormField
        disabled={boolean("Disabled", false)}
        errorMessage={text("Error Message", "")}
        label={text("Label", "Tell me something")}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        required={boolean("Required", true)}
        value={text("Value", faker.random.words())}
        isValid={boolean("Valid", true)}
    />
);
