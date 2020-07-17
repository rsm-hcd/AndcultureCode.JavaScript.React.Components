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
    <HeadingIcon type={Icons.Plus} priority={2} iconSize={IconSizes.Base}>
        Voluptas Expedita Magnam
    </HeadingIcon>
);

export const headingIconKnobs = () => {
    const priorityOptions = CoreUtils.numericEnumToPojo(HeadingPriority);

    return (
        <HeadingIcon
            type={select("type", Icons, Icons.Plus)}
            priority={
                select(
                    "priority",
                    priorityOptions,
                    HeadingPriority.One
                ) as HeadingPriority
            }
            iconSize={select("icon size", IconSizes, IconSizes.Large)}>
            Voluptas Expedita Magnam
        </HeadingIcon>
    );
};
