import { HeadingPriority } from "../constants/heading-priority";
import React from "react";
import { CoreUtils } from "andculturecode-javascript-core";
import { select } from "@storybook/addon-knobs";
import { HeadingIcon } from "./heading-icon";
import { Icons } from "../constants/icons";
import { IconSizes } from "../constants/icon-sizes";

export default {
    component: HeadingIcon,
    title: "Atoms | Typography / HeadingIcon",
};

export const headingIconDefault = () => (
    <HeadingIcon iconSize={IconSizes.Base} priority={2} type={Icons.Plus}>
        Voluptas Expedita Magnam
    </HeadingIcon>
);

export const headingIconKnobs = () => {
    const priorityOptions = CoreUtils.numericEnumToPojo(HeadingPriority);

    return (
        <HeadingIcon
            iconSize={select("icon size", IconSizes, IconSizes.Large)}
            priority={
                select(
                    "priority",
                    priorityOptions,
                    HeadingPriority.One
                ) as HeadingPriority
            }
            type={select("type", Icons, Icons.Plus)}>
            Voluptas Expedita Magnam
        </HeadingIcon>
    );
};
