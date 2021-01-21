import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { RadioInput } from "./radio-input";
import Faker from "faker";

export default {
    component: RadioInput,
    title: "Molecules | Radio Input",
};

export const radioInputKnobs = () => (
    <RadioInput
        checked={boolean("checked", false)}
        id={Faker.random.uuid()}
        label={text("Label", Faker.random.word())}
        name={text("Name", Faker.random.word())}
        value={text("Value", Faker.random.word())}
    />
);
