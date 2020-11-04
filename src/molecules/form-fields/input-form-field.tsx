import React, { forwardRef, Ref, RefObject } from "react";
import uuid from "uuid";
import { AccessibilityLabels } from "../../atoms/constants/accessibility-labels";
import { CollectionUtils, StringUtils } from "andculturecode-javascript-core";
import { InputCharacterCount } from "../../atoms/forms/input-character-count";
import { InputTypes } from "../../atoms/constants/input-types";
import { InputProperties } from "../../atoms/interfaces/input-properties";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-form-field";
export const InputFormFieldInvalidClass = "-invalid";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface InputFormFieldProps extends InputProperties {
    errorMessage?: string;
    errorMessages?: string[];

    /**
     * Unique identifier used select the underlying <input> for functional/e2e testing
     */
    inputTestId?: string;

    fieldId?: string;
    label: string;
    maxLength?: number;
    name?: string;
    ref?: RefObject<HTMLInputElement>;
    required?: boolean;
    showCharacterCount?: boolean;
    showLabelForScreenReadersOnly?: boolean;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const InputFormField: React.RefForwardingComponent<
    HTMLInputElement,
    InputFormFieldProps
> = forwardRef((props: InputFormFieldProps, ref: Ref<HTMLInputElement>) => {
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
        showCharacterCount,
        showLabelForScreenReadersOnly,
        type,
        value,
    } = props;

    const cssIsValid = isValid ? "" : InputFormFieldInvalidClass;
    const fieldId = props.fieldId ?? uuid.v4();

    return (
        <div className={`${COMPONENT_CLASS} ${cssIsValid}`}>
            <label htmlFor={fieldId}>
                {showLabelForScreenReadersOnly ? (
                    <span
                        className={AccessibilityLabels.ScreenReadersOnlyClass}>
                        {label}
                    </span>
                ) : (
                    <React.Fragment>{label}</React.Fragment>
                )}
                {required && (
                    <span className={`${COMPONENT_CLASS}__required`}>
                        {" *"}
                    </span>
                )}
            </label>
            <input
                data-testid={inputTestId}
                disabled={disabled}
                id={fieldId}
                placeholder={placeholder}
                maxLength={maxLength ?? 20}
                name={name}
                onChange={onChange}
                ref={ref}
                type={type ?? InputTypes.Text}
                value={value}
            />
            <div className={`${COMPONENT_CLASS}__bottom`}>
                <div className={`${COMPONENT_CLASS}__bottom__errors`}>
                    {// if
                    StringUtils.hasValue(errorMessage) && (
                        <label>{errorMessage}</label>
                    )}
                    {// if
                    CollectionUtils.hasValues(errorMessages) &&
                        errorMessages?.map((s: string) => (
                            <label key={s}>{s}</label>
                        ))}
                </div>
                {// if
                showCharacterCount !== false && (
                    <InputCharacterCount
                        currentLength={(value ?? "").length}
                        maxLength={maxLength ?? 20}
                    />
                )}
            </div>
        </div>
    );
});

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { InputFormField };

// #endregion Exports
