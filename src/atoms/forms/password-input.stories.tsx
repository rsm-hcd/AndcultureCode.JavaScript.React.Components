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
        id={Faker.random.uuid()}
        isValid={boolean("Is Valid", true)}
        isVisible={boolean("Is Visible", false)}
        onChange={() => {}}
        placeholder={text("Placeholder", "Please enter password.")}
        value={text("Value", "Password")}
    />
);
