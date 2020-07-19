import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import uuid from "uuid";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonStyles } from "../../atoms/constants/button-styles";

// -------------------------------------------------------------------------------------------------
// #region Constants
// -------------------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-dropdown-button";
const COMPONENT_LIST_CLASS = `${COMPONENT_CLASS}__list`;

// #endregion Constants

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface DropdownItem {
    component: string | React.ReactNode | React.ReactNodeArray;
    onSelect: () => void;
}

export interface DropdownButtonProps {
    buttonClassName?: string;
    menuItems: Array<DropdownItem>;
    size?: ButtonSizes;
    style?: ButtonStyles;
    buttonContents: string | React.ReactNode | React.ReactNodeArray;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const DropdownButton: React.FC<DropdownButtonProps> = (
    props: DropdownButtonProps
) => {
    const { buttonClassName, menuItems, buttonContents, size, style } = props;

    const classNames = ["c-button", COMPONENT_CLASS];

    if (buttonClassName != null) {
        classNames.push(buttonClassName);
    }

    if (size != null) {
        classNames.push(size);
    }

    if (style != null) {
        classNames.push(style);
    }

    return (
        <Menu>
            <MenuButton className={classNames.join(" ")}>
                {buttonContents}
            </MenuButton>
            <MenuList className={COMPONENT_LIST_CLASS}>
                {menuItems.map((item: DropdownItem) => (
                    <MenuItem
                        key={uuid.v4()}
                        onSelect={item.onSelect}
                        className={`${COMPONENT_LIST_CLASS}__item`}>
                        {item.component}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { DropdownButton };

// #endregion Exports
