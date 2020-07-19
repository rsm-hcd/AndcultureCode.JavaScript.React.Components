import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { RadioButton } from "./radio-button-input";
import Faker from "faker";

export default {
    component: RadioButton,
    title: "Atoms | Forms / Radio Button",
};

export const radioButtonKnobs = () => (
    <RadioButton
        checked={boolean("checked", false)}
        id={Faker.random.uuid()}
        label={text("Label", Faker.random.word())}
        name={text("Name", Faker.random.word())}
        value={text("Value", Faker.random.word())}
    />
);
