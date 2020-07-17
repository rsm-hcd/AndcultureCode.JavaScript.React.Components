import { TextInput, TextInputProps } from "./text-input";
import React from "react";
import { Icons } from "../constants/icons";
import { IconSizes } from "../constants/icon-sizes";
import { Icon } from "../icons/icon";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface TextInputIconProps extends TextInputProps {
    icon: Icons;
    iconSize?: IconSizes;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const TextInputIcon: React.FC<TextInputIconProps> = (
    props: TextInputIconProps
) => {
    return (
        <div className="c-text-input-icon">
            <Icon type={props.icon} size={props.iconSize ?? IconSizes.Large} />
            <TextInput {...props} />
        </div>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { TextInputIcon };

// #endregion Exports
