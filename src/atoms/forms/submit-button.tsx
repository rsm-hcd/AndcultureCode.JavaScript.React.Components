import React from "react";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface SubmitButtonProps {
    buttonText?: string;
    cssClassName?: string;

    /**
     * Typically you do not need this, but using it can allow you to
     * place the button outside of the form for styling purposes.
     */
    formId?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const SubmitButton: React.FC<SubmitButtonProps> = (
    props: SubmitButtonProps
) => {
    return (
        <input
            className={props.cssClassName || "c-button"}
            form={props.formId}
            type="submit"
            value={props.buttonText || "Submit"}
        />
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { SubmitButton };

// #endregion Export
