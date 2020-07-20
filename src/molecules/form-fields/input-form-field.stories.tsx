import { InputFormField } from "./input-form-field";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import React from "react";
import { InputTypes } from "../../atoms/constants/input-types";

export default {
    component: InputFormField,
    title: "Molecules | Forms / Input Form Field",
};

export const inputFormFieldKnobs = () => (
    <InputFormField
        disabled={boolean("Disabled", false)}
        errorMessage={text("Error Message", "")}
        isValid={boolean("Valid", true)}
        label={text("Label", "Label")}
        maxLength={number("Max Length", 30)}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        required={boolean("Required", true)}
        type={select("Type", InputTypes, InputTypes.Text)}
        value={text("Value", "Input Value")}
    />
);
