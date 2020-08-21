import { configure, addParameters, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import "./storybook.css";
import "../src/assets/scss/andculturecode-javascript-react-components.scss";
import { IconUtils } from "../src/utilities/icon-utils";
import { SvgIcons } from "../src/atoms/constants/svg-icons";

IconUtils.register(SvgIcons);

setDefaults({
    header: true,
    inline: true,
    source: true,
});

addParameters({
    options: {
        panelPosition: "right", // 'Bottom' is the other option.
    },
});

addDecorator(withInfo);
addDecorator(withKnobs({ escapeHTML: false }));

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);
