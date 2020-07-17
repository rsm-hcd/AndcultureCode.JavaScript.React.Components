import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import { PasswordFormField } from "./password-form-field";

export default {
    component: PasswordFormField,
    title: "Molecules | Forms / Password Form Field",
};

export const passwordFormFieldKnobs = () => (
    <PasswordFormField
        disabled={boolean("Disabled", false)}
        errorMessage={text("Error Message", "")}
        label={text("Label", "Password")}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        required={boolean("Required", true)}
        value={text("Value", "Password")}
        isValid={boolean("Valid", true)}
    />
);
