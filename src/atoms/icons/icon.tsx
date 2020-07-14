import * as React from "react";
import { IconSizes } from "../constants/icon-sizes";
import { Icons } from "../constants/icons";
import { IconUtils } from "../../utilities/icon-utils";
import { Svg } from "../../types/svg";
import { StringUtils } from "andculturecode-javascript-core";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface IconProps {
    cssClassName?: string;
    size?: IconSizes;
    type: keyof typeof Icons;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
    let cssClassNames = ["c-icon"];
    const size: IconSizes = props.size ?? IconSizes.Base;
    const icon: Svg = IconUtils.getSvg(props.type, size);

    if (icon == null) {
        return <i></i>;
    }

    if (StringUtils.hasValue(props.cssClassName)) {
        cssClassNames.push(props.cssClassName!);
    }

    if (StringUtils.hasValue(props.size)) {
        cssClassNames.push(`-${props.size}`);
    }

    return React.createElement(icon, {
        className: cssClassNames.join(" "),
    });
};

// #endregion Component

export { Icon };
