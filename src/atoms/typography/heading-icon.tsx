import React, { PropsWithChildren } from "react";
import { HeadingPriority } from "../constants/heading-priority";
import { Heading } from "./heading";
import { Icons } from "../constants/icons";
import { IconSizes } from "../constants/icon-sizes";
import { Icon } from "../icons/icon";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface HeadingIconProps {
    iconSize?: IconSizes;
    priority?: HeadingPriority;
    type: keyof typeof Icons;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const HeadingIcon: React.FC<HeadingIconProps> = (
    props: PropsWithChildren<HeadingIconProps>
) => {
    return (
        <div className="c-heading-icon">
            <Icon size={props.iconSize} type={props.type} />
            <Heading priority={props.priority}>{props.children}</Heading>
        </div>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { HeadingIcon };

// #endregion Exports
