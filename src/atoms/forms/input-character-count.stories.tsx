import React from "react";
import { number } from "@storybook/addon-knobs";
import { InputCharacterCount } from "./input-character-count";

export default {
    component: InputCharacterCount,
    title: "Atoms | Forms / Input Character Count",
};

export const inputCharacterCountKnobs = () => (
    <InputCharacterCount
        currentLength={number("Current Length", 5)}
        maxLength={number("Max Length", 100)}
    />
);
