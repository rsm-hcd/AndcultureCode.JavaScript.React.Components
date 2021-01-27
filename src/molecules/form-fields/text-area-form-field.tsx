import React from "react";
import uuid from "uuid";
import { TextArea } from "../../atoms/forms/text-area";
import { StringUtils, CollectionUtils } from "andculturecode-javascript-core";
import "./form-field.scss";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-form-field";
export const InvalidInputClassName = "-invalid";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface TextAreaFormFieldProps {
    disabled?: boolean;
    errorMessage?: string;
    errorMessages?: string[];
    fieldId?: string;
    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    inputTestId?: string;
    isValid?: boolean;
    label: string;
    maxLength?: number;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    value?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const TextAreaFormField: React.FC<TextAreaFormFieldProps> = (
    props: TextAreaFormFieldProps
) => {
    const {
        disabled,
        errorMessage,
        errorMessages,
        inputTestId,
        isValid,
        label,
        maxLength,
        name,
        onChange,
        placeholder,
        required,
        rows,
        value,
    } = props;

    const cssIsValid = isValid ? "" : InvalidInputClassName;
    const fieldId = props.fieldId ?? uuid.v4();
    const hasErrorMessage = StringUtils.hasValue(errorMessage);
    const hasErrors = CollectionUtils.hasValues(errorMessages);

    return (
        <div className={`${COMPONENT_CLASS} ${cssIsValid}`}>
            <label htmlFor={fieldId}>
                {label}
                {required ? "*" : ""}
            </label>
            <TextArea
                disabled={disabled}
                id={fieldId}
                maxLength={maxLength}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                testId={inputTestId}
                value={value}
            />
            <div className={`${COMPONENT_CLASS}__errors`}>
                {// if
                hasErrorMessage && <label>{errorMessage}</label>}
                {// if
                hasErrors &&
                    errorMessages?.map((s: string) => (
                        <label key={s}>{s}</label>
                    ))}
            </div>
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { TextAreaFormField };

// #endregion Exports
