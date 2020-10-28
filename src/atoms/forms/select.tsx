import React, { ChangeEvent } from "react";
import { StringUtils } from "andculturecode-javascript-core";
import { Icons } from "../constants/icons";
import { Icon } from "../icons/icon";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface SelectProps<T = any> {
    cssClassName?: string;
    id: string;
    name?: string;
    onChange: (selectedOption?: SelectOption<T>) => void;
    options: SelectOption<T>[];
    value?: string;
}

export interface SelectOption<T = any> {
    data?: T;
    label: string;
    value: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Select: React.FC<SelectProps> = (props: SelectProps) => {
    const classNames = ["c-select"];
    if (StringUtils.hasValue(props.cssClassName)) {
        classNames.push(props.cssClassName!);
    }

    const selectOptions = props.options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const option = props.options.find(
            (o: SelectOption) => o.value === e.target.value
        );
        props.onChange(option);
    };

    return (
        <div className={classNames.join(" ")}>
            <select
                id={props.id}
                onChange={handleChange}
                value={props.value}
                name={props.name}>
                {selectOptions}
            </select>
            <Icon type={Icons.ChevronDown} />
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Select };

// #endregion Exports
