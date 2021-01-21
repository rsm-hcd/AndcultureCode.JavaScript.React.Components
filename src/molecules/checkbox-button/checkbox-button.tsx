import { InputTypes } from "../../atoms/constants/input-types";
import React from "react";
import { Icon } from "../../atoms/icons/icon";
import { Icons } from "../../atoms/constants/icons";
import "../checkbox-input/checkbox-input.scss"; // Todo: Remove dependency on external styles
import "./checkbox-button.scss";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

export const CheckboxButtonCheckedClass = "-checked";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface CheckboxButtonProperties {
    checked: boolean;
    cssClassName?: string;
    disabled?: boolean;
    /**
     * id applied to the HTML element
     */
    id?: string;
    /**
     * an identifier used for the onChange event
     */
    identifier?: number;
    label: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        identifier?: number
    ) => void;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const CheckboxButton: React.FC<CheckboxButtonProperties> = (
    props: CheckboxButtonProperties
) => {
    const { cssClassName, checked, disabled, id, label } = props;

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e, props.identifier);
    };

    const checkedClassName = checked ? CheckboxButtonCheckedClass : "";

    return (
        <label
            id={id}
            className={`e-checkbox c-checkbox-button ${checkedClassName} ${cssClassName}`}>
            <Icon type={Icons.Checkmark} />
            <span>{label}</span>
            <input
                checked={checked}
                disabled={disabled}
                onChange={_onChange}
                type={InputTypes.Checkbox}
                value={checked.toString()}
            />
        </label>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { CheckboxButton };

// #endregion Exports
