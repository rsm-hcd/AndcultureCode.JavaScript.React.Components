import React from "react";
import { text } from "@storybook/addon-knobs";
import { ErrorBanner } from "./error-banner";

export default {
    component: ErrorBanner,
    title: "Molecules | Errors / Error Banner",
};

export const errorBannerDefault = () => (
    <ErrorBanner text={text("Text", "This is an error message.")} />
);
