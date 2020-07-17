import React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { TextArea } from "./text-area";
import Faker from "faker";

export default {
    component: TextArea,
    title: "Atoms | Forms / Text Area",
};

export const textAreaKnobs = () => (
    <TextArea
        disabled={boolean("Disabled", false)}
        id={Faker.random.uuid()}
        maxLength={number("Max Length", 30)}
        onChange={() => {}}
        placeholder={text("Placeholder", "Placeholder...")}
        rows={number("Rows", 5)}
        value={text("Value", "Input Value")}
    />
);
