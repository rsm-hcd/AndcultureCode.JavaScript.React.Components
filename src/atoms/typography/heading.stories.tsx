import React from "react";
import Faker from "faker";
import { select } from "@storybook/addon-knobs";
import { HeadingPriority } from "../constants/heading-priority";
import { Heading } from "./heading";
import { CoreUtils } from "andculturecode-javascript-core";
import { Icons } from "../constants/icons";

export default {
    component: Heading,
    title: "Atoms | Typography / Heading",
};

export const headingDefault = () => <Heading>{Faker.lorem.text()}</Heading>;

export const headingKnobs = () => {
    const options = CoreUtils.numericEnumToPojo(HeadingPriority);

    return (
        <Heading
            icon={select("icon", Icons, Icons.Plus)}
            priority={select("priority", options, HeadingPriority.One)}>
            Voluptas Expedita Magnam
        </Heading>
    );
};
