import { Image } from "./image";
import React from "react";
import { text } from "@storybook/addon-knobs";

export default {
    component: Image,
    title: "Atoms | Images / Image",
};

export const image = () => (
    <Image src={text("Src", "https://via.placeholder.com/350x150")} />
);
