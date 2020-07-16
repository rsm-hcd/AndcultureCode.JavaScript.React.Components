import React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { TextInput } from "./text-input";
import Faker from "faker";

export default {
    component: TextInput,
    title: "Atoms | Forms / Text Input",
};

export const textInputKnobs = () => (
    <TextInput
        disabled={boolean("Disabled", false)}
        id={Faker.random.uuid()}
        maxLength={number("Max Length", 30)}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        value={text("Value", "Input Value")}
        isValid={boolean("Valid", true)}
    />
);
