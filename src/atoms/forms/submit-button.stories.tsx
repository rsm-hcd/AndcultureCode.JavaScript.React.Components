import { SubmitButton } from "./submit-button";
import { text } from "@storybook/addon-knobs";
import React from "react";

export default {
    component: SubmitButton,
    title: "Atoms | Forms / Submit Button",
};

export const submitButtonKnobs = () => (
    <SubmitButton buttonText={text("Button Text", "Submit")} />
);
