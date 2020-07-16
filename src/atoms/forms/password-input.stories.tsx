import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { PasswordInput } from "./password-input";
import Faker from "faker";

export default {
    component: PasswordInput,
    title: "Atoms | Forms / Password Input",
};

export const passwordInputKnobs = () => (
    <PasswordInput
        disabled={boolean("Disabled", false)}
        onChange={() => {}}
        id={Faker.random.uuid()}
        isVisible={boolean("Is Visible", false)}
        placeholder={text("Placeholder", "Please enter password.")}
        value={text("Value", "Password")}
        isValid={boolean("Is Valid", true)}
    />
);
