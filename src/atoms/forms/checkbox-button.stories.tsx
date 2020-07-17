import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { CheckboxButton } from "./checkbox-button";

export default {
    component: CheckboxButton,
    title: "Atoms | Forms / Checkbox Button",
};

export const checkboxButtonKnobs = () => (
    <CheckboxButton
        checked={boolean("Checked", false)}
        label={text("Label", "Option 1")}
        disabled={boolean("Disabled", false)}
        onChange={() => {}}
    />
);
