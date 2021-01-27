import React from "react";
import { Icon } from "../../atoms/icons/icon";
import { Icons } from "../../atoms/constants/icons";
import "./error-banner.scss";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-error-banner";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface ErrorBannerProps {
    text: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const ErrorBanner: React.FC<ErrorBannerProps> = (props: ErrorBannerProps) => (
    <div className={COMPONENT_CLASS}>
        <Icon type={Icons.Information} />
        {props.text}
    </div>
);

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { ErrorBanner };

// #endregion Exports
