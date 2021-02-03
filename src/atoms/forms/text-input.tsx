import { InputTypes } from "../constants/input-types";
import { InputProperties } from "../interfaces/input-properties";
import { Icons } from "../constants/icons";
import { IconSizes } from "../constants/icon-sizes";
import { Icon } from "../icons/icon";
import React from "react";
import "./text-input.scss";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface TextInputProps extends InputProperties {
    icon?: Icons;
    iconSize?: IconSizes;
    id: string;
    maxLength?: number;
    name?: string;

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    testId?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    let classNames: string[] = ["c-text-input"];

    const {
        ariaLabelledBy,
        disabled,
        icon,
        iconSize,
        id,
        name,
        onChange,
        placeholder,
        testId,
        value,
    } = props;

    const maxLength = props.maxLength != null ? props.maxLength : 20;

    if (icon != null) {
        classNames.push("-icon");
    }

    return (
        <div className={classNames.join(" ")}>
            {// if
            icon != null && (
                <Icon type={icon} size={iconSize ?? IconSizes.Large} />
            )}
            <input
                aria-labelledby={ariaLabelledBy}
                data-testid={testId}
                disabled={disabled}
                id={id}
                placeholder={placeholder}
                maxLength={maxLength}
                name={name}
                onChange={onChange}
                type={InputTypes.Text}
                value={value}
            />
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { TextInput };

// #endregion Exports
