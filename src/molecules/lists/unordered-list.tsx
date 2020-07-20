import React from "react";
import { Icons } from "../../atoms/constants/icons";
import { StringUtils } from "andculturecode-javascript-core";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface UnorderedListProps {
    cssClassName?: string;
    id?: string;
    listIcon?: Icons;
    listItems: Array<any>;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const UnorderedList: React.FC<UnorderedListProps> = (
    props: UnorderedListProps
) => {
    let cssClassNames: string[] = [];

    if (StringUtils.hasValue(props.cssClassName)) {
        cssClassNames.push(props.cssClassName!);
    }

    if (props.listIcon != null) {
        cssClassNames.push("-has-icon");
        cssClassNames.push(props.listIcon);
    }

    return (
        <ul className={cssClassNames.join(" ")} id={props.id}>
            {props.listItems?.map((listItem, index) => (
                <li key={index}>{listItem}</li>
            ))}
        </ul>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { UnorderedList };

// #endregion Exports
