import React from "react";
import { text } from "@storybook/addon-knobs";
import { LinkCard } from "./link-card";
import { LinkCardTypes } from "../constants/link-card-types";
import { MemoryRouter } from "react-router-dom";

export default {
    component: LinkCard,
    title: "Molecules | Cards / Link Cards",
};

export const linkCardButton = () => (
    <LinkCard to="/" label="Link Card Label" type={LinkCardTypes.Button}>
        {text("content", "Link Card Content")}
    </LinkCard>
);

export const linkCardDefault = () => (
    <MemoryRouter>
        <LinkCard to="/" label="Link Card Label">
            {text("content", "Link Card Content")}
        </LinkCard>
    </MemoryRouter>
);
