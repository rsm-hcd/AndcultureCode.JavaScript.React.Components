import React, { ReactElement } from "react";
import { CollectionUtils, StringUtils } from "andculturecode-javascript-core";
import { Button } from "../../atoms/buttons/button";
import { ButtonTypes } from "../../atoms/constants/button-types";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonStyles } from "../../atoms/constants/button-styles";
import { Paragraph } from "../../atoms/typography/paragraph";

// -------------------------------------------------------------------------------------------------
// #region Constants
// -------------------------------------------------------------------------------------------------

export const ListBoxBaseClassName = "c-list-box";
export const ListBoxItemClassName = `${ListBoxBaseClassName}__item`;

// #endregion Constants

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface ListBoxItem<T extends string | number = string> {
    customAction?: React.ReactNode | React.ReactNodeArray;
    id: T;
    label?: string;
    text: string | React.ReactNode | React.ReactNodeArray;
}

export interface ListBoxProps<T extends string | number = string> {
    actionText?: string;
    children?: React.ReactNode | React.ReactNodeArray;
    hideWhenNoItems?: boolean;
    items?: Array<ListBoxItem<T>>;
    onActionClick?: (id: T) => void;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

export const ListBox = <T extends string | number = string>(
    props: ListBoxProps<T>
): ReactElement<ListBoxProps<T>> | null => {
    if (props.items != null && CollectionUtils.isEmpty(props.items)) {
        if (props.hideWhenNoItems === true) {
            return null;
        }

        return (
            <div className={`${ListBoxBaseClassName} -empty`}>
                <Paragraph>No Items Added</Paragraph>
            </div>
        );
    }

    return (
        <div className={ListBoxBaseClassName}>
            {CollectionUtils.hasValues(props.items) &&
                props.items!.map((item: ListBoxItem<T>) => (
                    <div className={ListBoxItemClassName} key={`${item.id}`}>
                        {// if
                        StringUtils.hasValue(item.label) && (
                            <div className={`${ListBoxItemClassName}__label`}>
                                {item.label}
                            </div>
                        )}
                        <div className={`${ListBoxItemClassName}__text`}>
                            {item.text}
                        </div>
                        {// if
                        props.onActionClick != null && (
                            <Button
                                cssClassName={`${ListBoxItemClassName}__action`}
                                onClick={() => props.onActionClick!(item.id)}
                                size={ButtonSizes.Small}
                                style={ButtonStyles.TertiaryAlt}
                                type={ButtonTypes.Button}>
                                {props.actionText ?? "Action"}
                            </Button>
                        )}
                        {item.customAction}
                    </div>
                ))}
            {props.children}
        </div>
    );
};

// #endregion Component
