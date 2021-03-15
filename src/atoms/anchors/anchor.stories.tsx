import React from "react";
import { Anchor } from "./anchor";
import Faker from "faker";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { Icons } from "../constants/icons";

addDecorator(StoryRouter());

export default {
    title: "Atoms | Anchors",
    component: Anchor,
};

export const Default = () => <Anchor to="/test">{Faker.lorem.words(5)}</Anchor>;

export const Icon = () => (
    <Anchor icon={Icons.Share} to="/test">
        {Faker.lorem.words(5)}
    </Anchor>
);

export const External = () => (
    <Anchor external={true} target="_blank" to="https://www.humanetech.com/">
        Center For Humane Technology
    </Anchor>
);
