import { Link } from "react-router-dom";
import React, { forwardRef } from "react";
import { Icons } from "../constants/icons";
import { Icon } from "../icons/icon";
import "./anchor.scss";

/*
-----------------------------------------------------------------------------------------
Interfaces
-----------------------------------------------------------------------------------------
*/

export interface AnchorProps {
    ariaLabel?: string;
    children?: any;
    cssClassName?: string;
    external?: boolean;
    icon?: Icons;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>, value?: any) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
    ref?: React.Ref<HTMLAnchorElement>;
    target?: string;
    title?: string;
    to: string;
}

/*
---------------------------------------------------------------------------------------------
Component
---------------------------------------------------------------------------------------------
*/

const Anchor: React.RefForwardingComponent<Link, AnchorProps> = forwardRef(
    (props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
        let cssClassNames: string[] = [];

        if (props.cssClassName) {
            cssClassNames.push(props.cssClassName);
        }

        const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
            if (props.onClick != null) {
                props.onClick(e);
            }
        };

        let relAttribute: string | undefined = undefined;
        if (props.target != null) {
            // Using target="_blank" without rel="noopener noreferrer" is a security risk: see
            // https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
            relAttribute = "noopener noreferrer";
        }

        const attributes = {
            "aria-label": props.ariaLabel,
            className: cssClassNames.join(" "),
            id: props.id,
            onClick: onClickHandler,
            ref: ref,
            target: props.target,
            rel: relAttribute,
            title: props.title,
            onKeyDown: props.onKeyDown,
        };

        const content = (
            <React.Fragment>
                {// if
                props.icon != null && <Icon type={props.icon} />}
                {props.children}
            </React.Fragment>
        );

        if (props.external === true) {
            return (
                <a href={props.to} {...attributes}>
                    {content}
                </a>
            );
        }

        return (
            // Address TypeScript Error Preventing Props Passing
            // https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/issues/137
            // @ts-ignore
            <Link to={props.to} {...attributes}>
                {content}
            </Link>
        );
    }
);

/*
---------------------------------------------------------------------------------------------
Exports
---------------------------------------------------------------------------------------------
*/

export default Anchor;

export { Anchor };
