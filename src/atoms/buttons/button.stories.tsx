import { select, text } from "@storybook/addon-knobs";
import { Button } from "./button";
import { ButtonSizes } from "../constants/button-sizes";
import { ButtonStyles } from "../constants/button-styles";
import { Icon } from "../icons/icon";
import { IconSizes } from "../constants/icon-sizes";
import { Icons } from "../constants/icons";
import React from "react";

export default {
    title: "Atoms | Buttons",
    component: Button,
};

export const buttonDefault = () => (
    <Button
        onClick={() => {}}
        size={select("size", ButtonSizes, ButtonSizes.Medium)}
        style={select("style", ButtonStyles, ButtonStyles.Primary)}
        accessibleText={text("Accessible Text", "Text for screen reader")}>
        {text("Button Text", "Click Here!")}
    </Button>
);

export const buttonIcon = () => (
    <Button
        onClick={() => {}}
        size={select("size", ButtonSizes, ButtonSizes.Medium)}
        style={select("style", ButtonStyles, ButtonStyles.Primary)}
        accessibleText={text("Accessible Text", "Text for screen reader")}>
        <Icon
            type={select("type", Icons, Icons.Checkmark)}
            size={select("icon size", IconSizes, IconSizes.Large)}
        />
    </Button>
);
