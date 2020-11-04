import { ButtonSizes } from "../constants/button-sizes";
import { ButtonStyles } from "../constants/button-styles";
import { ButtonTypes } from "../constants/button-types";
import React, { forwardRef } from "react";
import { StringUtils } from "andculturecode-javascript-core";
import { AccessibilityLabels } from "../../enums/accessibility-labels";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface ButtonProps {
    accessibleText?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    children?: any;
    cssClassName?: string;
    disabled?: boolean;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDrag?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDrop?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    ref?: React.RefObject<HTMLButtonElement>;
    size?: ButtonSizes;
    style?: ButtonStyles;
    /**
     * useful when you need a non-submit button inside a form
     */
    type?: ButtonTypes;
    value?: string | number | string[] | undefined;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Button: React.RefForwardingComponent<
    HTMLButtonElement,
    ButtonProps
> = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
        accessibleText,
        ariaControls,
        ariaExpanded,
        children,
        cssClassName,
        disabled,
        id,
        onClick,
        size,
        style,
        type,
        value,
    } = props;

    let classNames = style === ButtonStyles.None ? [] : ["c-button"];

    if (size != null) {
        classNames.push(`-${size}`);
    }

    if (style != null) {
        classNames.push(`-${style}`);
    }

    if (StringUtils.hasValue(cssClassName)) {
        classNames.push(cssClassName!);
    }

    return (
        <button
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            className={classNames.join(" ")}
            disabled={disabled}
            id={id}
            onClick={onClick}
            ref={ref}
            type={type}
            value={value}
            onKeyDown={props.onKeyDown}>
            {children}
            {accessibleText != null && (
                // if
                <span className={AccessibilityLabels.ScreenReadersOnlyClass}>
                    {accessibleText}
                </span>
            )}
        </button>
    );
});

// #endregion Component

export { Button };
