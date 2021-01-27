import * as React from "react";
import { UnorderedList } from "./unordered-list";
import "./radio-list.scss";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

export const RadioListClassName = "c-radio-list";
export const RadioListButtonStyleClassName = "-button-style";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface RadioListProps {
    items: JSX.Element[];
    style?: RadioListStyles;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Enums
// -----------------------------------------------------------------------------------------

export enum RadioListStyles {
    Default = "default",
    Button = "button",
}

// #endregion Enums

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const RadioList: React.FunctionComponent<RadioListProps> = (props) => {
    const { items, style } = props;

    if (items.length === 0) {
        return null;
    }

    const classNames = [RadioListClassName];
    if (style === RadioListStyles.Button) {
        classNames.push(RadioListButtonStyleClassName);
    }

    return (
        <fieldset className={classNames.join(" ")}>
            <UnorderedList listItems={items} />
        </fieldset>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { RadioList };

// #endregion Exports
