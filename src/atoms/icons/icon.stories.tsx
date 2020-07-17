import { Icon } from "./icon";
import { IconSizes } from "../constants/icon-sizes";
import { Icons } from "../constants/icons";
import React from "react";
import { select } from "@storybook/addon-knobs";
import { SvgIcons } from "../constants/svg-icons";

export default {
    component: Icon,
    title: "Atoms | Icons / Icon",
};

export const icon = () => (
    <Icon
        type={select("type", Icons, Icons.Checkmark)}
        size={select("icon size", IconSizes, IconSizes.Large)}
    />
);

export const IconsAll = () => (
    <React.Fragment>
        {SvgIcons.map((i) => (
            <div>
                <h3>{i.type}</h3>
                <h4>Base</h4>
                <Icon type={i.type} size={IconSizes.Base} />
                <h4>Large</h4>
                <Icon type={i.type} size={IconSizes.Large} />
                <hr />
            </div>
        ))}
    </React.Fragment>
);
