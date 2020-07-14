import { Icon } from "./icon";
import { IconSizes } from "../constants/icon-sizes";
import { Icons } from "../constants/icons";
import React from "react";
import { select } from "@storybook/addon-knobs";
import { IconUtils } from "../../utilities/icon-utils";
import { SvgIcon } from "../interfaces/svg-icon";
import { BaseCheckmarkIcon } from "./defaults/base/base-checkmark-icon";
import { LargeCheckmarkIcon } from "./defaults/large/large-checkmark-icon";

export default {
    title: "Atoms | Icons / Icon",
    component: Icon,
};

export const icon = () => {
    const icon: SvgIcon = {
        base: BaseCheckmarkIcon,
        large: LargeCheckmarkIcon,
        type: Icons.Checkmark,
    };

    IconUtils.registerSvgIcon(icon);

    return (
        <Icon
            type={select("type", Icons, Icons.Checkmark)}
            size={select("icon size", IconSizes, IconSizes.Large)}
        />
    );
};
