import React from "react";
import { LinkCardTypes } from "../constants/link-card-types";
import { StringUtils } from "andculturecode-javascript-core";
import { Anchor } from "../../atoms/anchors/anchor";
import { Button } from "../../atoms/buttons/button";
import { Icon } from "../../atoms/icons/icon";
import { Icons } from "../../atoms/constants/icons";
import { Paragraph } from "../../atoms/typography/paragraph";
import { ParagraphSizes } from "../../atoms/constants/paragraph-sizes";

// -------------------------------------------------------------------------------------------------
// #region Contants
// -------------------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-link-card";

// #endregion Constants

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface LinkCardProps {
    children: any;
    includeIcon?: boolean;
    label: string;
    to?: any;
    type?: LinkCardTypes;
    onClick?: () => void;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const LinkCard: React.FC<LinkCardProps> = (props: LinkCardProps) => {
    const cssClassNames = [COMPONENT_CLASS];
    if (props.includeIcon) {
        cssClassNames.push("-with-icon");
    }
    const cssClassNamesFlat = cssClassNames.join(" ");

    const type = props.type ?? LinkCardTypes.Link;

    const renderChildren = () => (
        <React.Fragment>
            {// if
            props.includeIcon && <Icon type={Icons.Lightbulb} />}
            <div className={`${COMPONENT_CLASS}__content`}>
                <Paragraph size={ParagraphSizes.Small}>
                    {props.children}
                </Paragraph>
                {// if
                StringUtils.hasValue(props.label) && (
                    <div className={`${COMPONENT_CLASS}__label`}>
                        <Paragraph size={ParagraphSizes.XSmall}>
                            {props.label}
                        </Paragraph>
                    </div>
                )}
            </div>
        </React.Fragment>
    );

    return (
        <div>
            {// if
            type === LinkCardTypes.Button && (
                <Button
                    cssClassName={cssClassNamesFlat}
                    onClick={props.onClick}>
                    {renderChildren()}
                </Button>
            )}
            {// if
            type === LinkCardTypes.Link && (
                <Anchor cssClassName={cssClassNamesFlat} to={props.to}>
                    {renderChildren()}
                </Anchor>
            )}
        </div>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { LinkCard };

// #endregion Exports
