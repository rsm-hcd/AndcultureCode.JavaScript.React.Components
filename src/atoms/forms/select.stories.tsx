import React from "react";
import { text } from "@storybook/addon-knobs";
import { Select } from "./select";
import Faker from "faker";

export default {
    component: Select,
    title: "Atoms | Forms / Select",
};

export const selectKnobs = () => (
    <Select
        // disabled={boolean("Disabled", false)}
        id={Faker.random.uuid()}
        onChange={() => {}}
        options={[
            { label: "Label 1", value: "Value1" },
            { label: "Label 2", value: "Value2" },
        ]}
        value={text("Value", "Input Value")}
    />
);
