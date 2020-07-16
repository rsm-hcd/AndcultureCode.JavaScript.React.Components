import React from "react";
import Faker from "faker";
import { select } from "@storybook/addon-knobs";
import { HeadingPriority } from "../constants/heading-priority";
import { Heading } from "./heading";
import { CoreUtils } from "andculturecode-javascript-core";

export default {
    component: Heading,
    title: "Atoms | Typography / Heading",
};

export const headingDefault = () => <Heading>{Faker.lorem.text()}</Heading>;

export const headingKnobs = () => {
    const options = CoreUtils.numericEnumToPojo(HeadingPriority);

    return (
        <Heading
            priority={
                select(
                    "priority",
                    options,
                    HeadingPriority.One
                ) as HeadingPriority
            }>
            Voluptas Expedita Magnam
        </Heading>
    );
};
