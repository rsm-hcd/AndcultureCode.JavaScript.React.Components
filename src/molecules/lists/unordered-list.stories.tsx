import React from "react";
import { UnorderedList } from "./unordered-list";
import Faker from "faker";
import { select } from "@storybook/addon-knobs";
import { Icons } from "../../atoms/constants/icons";

export default {
    component: UnorderedList,
    title: "Molecules | Lists / UnorderedList",
};

export const unorderedListDefault = () => (
    <UnorderedList listItems={[Faker.lorem.text(), Faker.lorem.text()]} />
);

export const unorderedListKnobs = () => (
    <UnorderedList
        listIcon={select("List Icon", Icons, Icons.ChevronRight)}
        listItems={[Faker.lorem.text(), Faker.lorem.text()]}
    />
);
