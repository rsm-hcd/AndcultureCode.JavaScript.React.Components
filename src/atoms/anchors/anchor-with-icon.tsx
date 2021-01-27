import React from "react";
import { ButtonSizes } from "../constants/button-sizes";
import { ButtonStyles } from "../constants/button-styles";
import { Icons } from "../constants/icons";
import { Anchor } from "../anchors/anchor";
import { Icon } from "../icons/icon";
import "./anchor.scss";

export interface AnchorWithIconProps {
    accessibleText?: string;
    children: any;
    icon: keyof typeof Icons;
    size?: ButtonSizes;
    style?: ButtonStyles;
    to: string;
}

const AnchorWithIcon: React.FC<AnchorWithIconProps> = (
    props: AnchorWithIconProps
) => {
    const size: ButtonSizes =
        props.size != null ? props.size : ButtonSizes.Medium;
    const { accessibleText, icon, to } = props;

    // Defaulting all AnchorWithIcon components to be styled as a button for now.
    const cssClassNames = ["c-button", "-icon-left", size];

    if (props.style != null) {
        cssClassNames.push(props.style);
    }

    return (
        <Anchor cssClassName={cssClassNames.join(" ")} to={to}>
            <Icon type={icon} /> {props.children}
            {// if
            accessibleText != null && (
                <span className="sr-only">{accessibleText}</span>
            )}
        </Anchor>
    );
};

export { AnchorWithIcon };
