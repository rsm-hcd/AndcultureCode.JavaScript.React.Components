import * as React from "react";
import { forwardRef } from "react";
import "./radio-input.scss";

const COMPONENT_CLASS = "c-radio";
export const RadioInputSelectedClassName = "-selected";

export interface RadioInputProps {
    autofocus?: boolean;
    checked: boolean;
    cssClassName?: string;
    id: string;
    label: string;
    name: string;
    onCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    ref?: React.RefObject<HTMLInputElement> | null;
    value?: string | string[] | number;
}

const RadioInput: React.RefForwardingComponent<
    HTMLInputElement,
    RadioInputProps
> = forwardRef(
    (
        props: React.PropsWithChildren<RadioInputProps>,
        ref: React.Ref<HTMLInputElement>
    ) => {
        const {
            autofocus,
            checked,
            children,
            cssClassName,
            id,
            label,
            name,
            onCheck,
            onClick,
            value,
        } = props;

        const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void =>
            onCheck?.(e);
        const handleClick = (): void => onClick?.();

        const cssChecked = checked ? RadioInputSelectedClassName : "";

        return (
            <div className={`${COMPONENT_CLASS} ${cssChecked} ${cssClassName}`}>
                <input
                    autoFocus={autofocus}
                    checked={checked}
                    id={id}
                    name={name}
                    onChange={handleChecked}
                    onClick={handleClick}
                    ref={ref}
                    type="radio"
                    value={value}
                />
                <label htmlFor={id}>
                    {label}
                    {children}
                </label>
            </div>
        );
    }
);

export { RadioInput };
