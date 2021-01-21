import { boolean, number, optionsKnob } from "@storybook/addon-knobs";
import { ProgressBar, ProgressBarStyles } from "./progress-bar";
import React from "react";

export default {
    component: ProgressBar,
    title: "Molecules | Progress Bar",
};

export const progressBarKnobs = () => (
    <ProgressBar
        isErrored={boolean("Is Errored", false)}
        style={optionsKnob(
            "Style",
            {
                thick: ProgressBarStyles.Thick,
                thin: ProgressBarStyles.Thin,
            },
            ProgressBarStyles.Thick,
            { display: "radio" }
        )}
        value={number("Progress Percent", 50, {
            step: 1,
            min: 0,
            max: 100,
        })}
    />
);
