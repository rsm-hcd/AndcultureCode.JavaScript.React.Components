import React, { PropsWithChildren } from "react";
import { Paragraph } from "../../atoms/typography/paragraph";

// -------------------------------------------------------------------------------------------------
// #region Constants
// -------------------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-card";

// #endregion Constants

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface CardProps {
    label: string;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Components
// -------------------------------------------------------------------------------------------------

const Card: React.FC<CardProps> = (props: PropsWithChildren<CardProps>) => (
    <div className={COMPONENT_CLASS}>
        <div className={`${COMPONENT_CLASS}__content`}>
            <Paragraph>{props.children}</Paragraph>
        </div>
        <div className={`${COMPONENT_CLASS}__label`}>
            <Paragraph>{props.label}</Paragraph>
        </div>
    </div>
);

// #endregion Components

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { Card };

// #endregion Exports
