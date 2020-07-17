import React from "react";
import { Paragraph } from "./paragraph";
import Faker from "faker";
import { select } from "@storybook/addon-knobs";
import { ParagraphSizes } from "../constants/paragraph-sizes";

export default {
    component: Paragraph,
    title: "Atoms | Typography / Paragraph",
};

export const paragraphDefault = () => (
    <Paragraph>{Faker.lorem.paragraph(10)}</Paragraph>
);

export const paragraphEmpty = () => <Paragraph></Paragraph>;

export const paragraphWithStyles = () => (
    <Paragraph cssClassName="-larger">{Faker.lorem.paragraph(4)}</Paragraph>
);

export const paragraphKnobs = () => (
    <Paragraph size={select("size", ParagraphSizes, ParagraphSizes.Base)}>
        {Faker.lorem.paragraph(10)}
    </Paragraph>
);
