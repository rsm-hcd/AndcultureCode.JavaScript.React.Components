import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { CheckboxFormField } from "./checkbox-form-field";

export default {
    component: CheckboxFormField,
    title: "Molecules | Forms / Checkbox Form Field",
};

export const checkboxFormFieldKnobs = () => (
    <CheckboxFormField
        checked={boolean("Checked", false)}
        disabled={boolean("Disabled", false)}
        label={text("Label", "Remember Me")}
        onChange={() => {}}
    />
);
