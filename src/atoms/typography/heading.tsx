import React, { PropsWithChildren } from "react";
import { HeadingPriority } from "../constants/heading-priority";
import { IconSizes } from "../constants/icon-sizes";
import { Icons } from "../constants/icons";
import { Icon } from "../icons/icon";
import "./heading.scss";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface HeadingProps {
    cssClassName?: string;
    icon?: Icons;
    iconSize?: IconSizes;
    id?: string;
    priority?: HeadingPriority;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Heading: React.FC<HeadingProps> = (
    props: PropsWithChildren<HeadingProps>
) => {
    let cssClassNames: Array<any> = ["c-heading"];

    if (props.cssClassName) {
        cssClassNames.push(props.cssClassName);
    }

    let componentProps = {
        className: cssClassNames.join(" "),
    };

    const content = (
        <React.Fragment>
            {// if
            props.icon != null && <Icon type={props.icon} />}
            <span>{props.children}</span>
        </React.Fragment>
    );

    return React.createElement(
        `h${props.priority ?? HeadingPriority.Two}`,
        componentProps,
        content
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Heading };

// #endregion Exports
