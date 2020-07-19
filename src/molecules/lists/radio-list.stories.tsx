import React from "react";
import { RadioList } from "./radio-list";
import Faker from "faker";
import { RadioButton } from "../../atoms/forms/radio-button-input";
import uuid from "uuid";
import { boolean } from "@storybook/addon-knobs";

export default {
    component: RadioList,
    title: "Molecules | Lists / RadioList",
};

export const radioListDefault = () => (
    <RadioList
        items={[
            <RadioButton
                checked={boolean("checked", false)}
                id={uuid()}
                label={Faker.random.word()}
                name={Faker.random.word()}>
                {Faker.lorem.text()}
            </RadioButton>,
            <RadioButton
                checked={boolean("checked", true)}
                id={uuid()}
                label={Faker.random.word()}
                name={Faker.random.word()}>
                {Faker.lorem.text()}
            </RadioButton>,
        ]}
    />
);
