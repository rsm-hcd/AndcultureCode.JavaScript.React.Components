import React from "react";
import { RadioList } from "./radio-list";
import Faker from "faker";
import { RadioInput } from "../radio-input/radio-input";
import uuid from "uuid";
import { boolean } from "@storybook/addon-knobs";

export default {
    component: RadioList,
    title: "Molecules | Lists / RadioList",
};

export const radioListDefault = () => (
    <RadioList
        items={[
            <RadioInput
                checked={boolean("checked", false)}
                id={uuid()}
                label={Faker.random.word()}
                name={Faker.random.word()}>
                {Faker.lorem.text()}
            </RadioInput>,
            <RadioInput
                checked={boolean("checked", true)}
                id={uuid()}
                label={Faker.random.word()}
                name={Faker.random.word()}>
                {Faker.lorem.text()}
            </RadioInput>,
        ]}
    />
);
