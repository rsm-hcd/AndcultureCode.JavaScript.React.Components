import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import { SelectFormField } from "./select-form-field";
import uuid from "uuid";

export default {
    component: SelectFormField,
    title: "Molecules | Forms / Select Form Field",
};

export const selectFormFieldKnobs = () => (
    <SelectFormField
        errorMessage={text("Error Message", "")}
        label={text("Label", "Tell me something")}
        id={uuid.v4()}
        onChange={() => {}}
        required={boolean("Required", true)}
        values={[
            {
                label: "Option 1",
                value: "Value 1",
            },
            {
                label: "Option 2",
                value: "Value 2",
            },
        ]}
        isValid={boolean("Valid", true)}
    />
);
