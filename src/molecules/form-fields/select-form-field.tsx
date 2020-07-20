import React from "react";
import uuid from "uuid";
import { Select, SelectOption } from "../../atoms/forms/select";
import { StringUtils, CollectionUtils } from "andculturecode-javascript-core";

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-form-field";

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface SelectFormFieldProps {
    errorMessage?: string;
    errorMessages?: string[];
    fieldId?: string;
    id: string;
    isValid?: boolean;
    name?: string;
    label: string;
    onChange: (e: SelectOption<any> | undefined) => void;
    required?: boolean;
    values: SelectOption[];
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const SelectFormField: React.FC<SelectFormFieldProps> = (
    props: SelectFormFieldProps
) => {
    const {
        errorMessage,
        errorMessages,
        id,
        isValid,
        name,
        label,
        onChange,
        required,
        values,
    } = props;

    const cssIsValid = isValid ? "" : "-invalid";
    const fieldId = props.fieldId ?? uuid.v4();
    const hasErrorMessage = StringUtils.hasValue(errorMessage);
    const hasErrors = CollectionUtils.hasValues(errorMessages);

    return (
        <div className={`${COMPONENT_CLASS} ${cssIsValid}`}>
            <label htmlFor={fieldId}>
                {label}
                {required ? "*" : ""}
            </label>
            <Select options={values} id={id} onChange={onChange} name={name} />
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

export { SelectFormField };

// #endregion Exports
