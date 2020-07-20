import React, { useState } from "react";
import uuid from "uuid";
import { InputProperties } from "../../atoms/interfaces/input-properties";
import { PasswordInput } from "../../atoms/forms/password-input";
import { StringUtils } from "andculturecode-javascript-core";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-form-field";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface PasswordFormFields extends InputProperties {
    errorMessage?: string;

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    inputTestId?: string;

    label: string;
    required?: boolean;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const PasswordFormField: React.FC<PasswordFormFields> = (
    props: PasswordFormFields
) => {
    const {
        disabled,
        errorMessage,
        inputTestId,
        isValid,
        label,
        placeholder,
        onChange,
        required,
        value,
    } = props;

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const cssIsValid = isValid ? "" : "-invalid";
    const disableShowHide = StringUtils.isEmpty(value) || disabled;
    const fieldId = uuid.v4();
    const passwordShowHideLabel = isVisible ? "Hide" : "Show";

    const onChangeIsVisible = (
        event: React.MouseEvent<Element, MouseEvent>
    ) => {
        event.preventDefault();

        setIsVisible(!isVisible);
    };

    if (disabled && isVisible === true) {
        setIsVisible(false);
    }

    return (
        <div className={`${COMPONENT_CLASS} -password ${cssIsValid}`}>
            <label htmlFor={fieldId}>
                {label}
                {required && (
                    <span className={`${COMPONENT_CLASS}__required`}>
                        {" *"}
                    </span>
                )}
            </label>
            {// if
            !disableShowHide && (
                <button
                    type="button"
                    aria-label={`${passwordShowHideLabel} Password`}
                    onClick={(event) => onChangeIsVisible(event)}>
                    {passwordShowHideLabel}
                </button>
            )}
            <PasswordInput
                disabled={disabled}
                id={fieldId}
                isValid={isValid}
                isVisible={isVisible}
                onChange={onChange}
                placeholder={placeholder}
                testId={inputTestId}
                value={value}
            />
            <div className={`${COMPONENT_CLASS}__bottom`}>
                <div className={`${COMPONENT_CLASS}__bottom__errors`}>
                    <label>{errorMessage}</label>
                </div>
            </div>
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { PasswordFormField };

// #endregion Exports
