import React, { forwardRef } from "react";

// -------------------------------------------------------------------------------------------------
// #region Enums
// -------------------------------------------------------------------------------------------------

export enum ParagraphSizes {
    XLarge = "-xlarge",
    Large = "-large",
    Base = "-base",
    Small = "-small",
    XSmall = "-xsmall",
}

// #endregion Enums

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface ParagraphProps {
    children?: any;
    cssClassName?: string;
    dangerouslySetInnerHTML?: { __html: string };
    id?: string;
    ref?: React.RefObject<HTMLParagraphElement> | null;
    size?: ParagraphSizes;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const Paragraph: React.RefForwardingComponent<
    HTMLParagraphElement,
    ParagraphProps
> = forwardRef(
    (props: ParagraphProps, ref: React.Ref<HTMLParagraphElement>) => {
        let cssClassNames: Array<any> = [];

        if (props.cssClassName) {
            cssClassNames.push(props.cssClassName);
        }

        if (props.size) {
            cssClassNames.push(props.size);
        }

        return (
            <p
                className={cssClassNames.join(" ")}
                dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
                id={props.id}
                ref={ref}>
                {props.children}
            </p>
        );
    }
);

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { Paragraph };

// #endregion Exports
