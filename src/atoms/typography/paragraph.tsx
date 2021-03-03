import React, { forwardRef, PropsWithChildren, Ref } from "react";
import { ParagraphSizes } from "../constants/paragraph-sizes";
import { StringUtils } from "andculturecode-javascript-core";

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

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    (props: PropsWithChildren<ParagraphProps>, ref: Ref<HTMLParagraphElement>) => {
        let cssClassNames: Array<any> = [];

        if (StringUtils.hasValue(props.cssClassName)) {
            cssClassNames.push(props.cssClassName!);
        }

        if (props.size != null) {
            cssClassNames.push(`-${props.size}`);
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
