import { CheckboxInput } from "./checkbox-input";
import React from "react";
import { boolean, text } from "@storybook/addon-knobs";

export default {
    component: CheckboxInput,
    title: "Atoms | Forms / Checkbox Input",
};

export const checkboxInputKnobs = () => (
    <CheckboxInput
        checked={boolean("Checked", false)}
        label={text("Label", "Remember Me")}
        disabled={boolean("Disabled", false)}
        onChange={() => {}}
    />
);
