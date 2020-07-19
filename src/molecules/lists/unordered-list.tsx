import React from "react";
import { Icons } from "../../atoms/constants/icons";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface UnorderedListProps {
    cssClassName?: string;
    id?: string;
    listItems: Array<any>;
    listIcon?: keyof typeof Icons;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const UnorderedList: React.FC<UnorderedListProps> = (
    props: UnorderedListProps
) => {
    let cssClassNames: Array<any> = [];

    if (props.cssClassName) {
        cssClassNames.push(props.cssClassName);
    }

    if (props.listIcon) {
        cssClassNames.push("-has-icon");
        cssClassNames.push(`${props.listIcon}`);
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
