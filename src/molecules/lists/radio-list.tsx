import * as React from "react";
import { UnorderedList } from "./unordered-list";

export const COMPONENT_CLASS = "c-radio-list";
export const RadioListButtonStyleClassName = "-button-style";

export interface RadioListProps {
    items: JSX.Element[];
    style?: RadioListStyles;
}

export enum RadioListStyles {
    Default = "default",
    Button = "button",
}

const RadioList: React.FunctionComponent<RadioListProps> = (props) => {
    const { items, style } = props;

    if (items.length === 0) {
        return null;
    }

    const classNames = [COMPONENT_CLASS];
    if (style === RadioListStyles.Button) {
        classNames.push(RadioListButtonStyleClassName);
    }

    return (
        <fieldset className={classNames.join(" ")}>
            <UnorderedList listItems={items} />
        </fieldset>
    );
};

export { RadioList };
