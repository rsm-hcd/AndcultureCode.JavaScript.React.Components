import { boolean, select } from "@storybook/addon-knobs";
import { TextInputIcon } from "./text-input-icon";
import React from "react";
import { Icons } from "../constants/icons";
import { IconSizes } from "../constants/icon-sizes";

export default {
    component: TextInputIcon,
    title: "Atoms | Forms / Text Input Icon",
};

export const textInputIconKnobs = () => (
    <TextInputIcon
        icon={select("Icon", Icons, Icons.Search)}
        iconSize={boolean("Icon Size", true) ? IconSizes.Large : IconSizes.Base}
        id="text-input-icon-stories"
        onChange={() => {}}
        placeholder="Type to search..."
    />
);
