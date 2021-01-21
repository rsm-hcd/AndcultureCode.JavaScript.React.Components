import {
    CheckboxInput,
    CheckboxInputProperties,
} from "../checkbox-input/checkbox-input";
import React from "react";
import { StringUtils } from "andculturecode-javascript-core";
import "./form-field.scss";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-form-field";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface CheckboxFormFieldProperties extends CheckboxInputProperties {
    /**
     * An error message to display under the current checkbox with more information.
     *
     * @type {string}
     * @memberof CheckboxFormFieldProperties
     */
    errorMessage?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const CheckboxFormField: React.FC<CheckboxFormFieldProperties> = (props) => {
    const { checked, disabled, errorMessage, label, onChange } = props;

    const hasError = StringUtils.hasValue(errorMessage);

    return (
        <div className={COMPONENT_CLASS}>
            <CheckboxInput
                checked={checked}
                disabled={disabled}
                label={label}
                onChange={onChange}
            />
            {hasError && (
                <div className={`${COMPONENT_CLASS}__errors`}>
                    <label>{errorMessage}</label>
                </div>
            )}
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { CheckboxFormField };

// #endregion Exports
