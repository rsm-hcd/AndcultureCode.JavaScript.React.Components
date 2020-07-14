// -----------------------------------------------------------------------------------------
// #region Atoms
// -----------------------------------------------------------------------------------------

export { Anchor } from "./atoms/anchors/anchor";
export { Button } from "./atoms/buttons/button";

// Icons
export { BaseCheckmarkIcon } from "./atoms/icons/defaults/base/base-checkmark-icon";
export { BaseCloseIcon } from "./atoms/icons/defaults/base/base-close-icon";
export { Icon } from "./atoms/icons/icon";
export { LargeCheckmarkIcon } from "./atoms/icons/defaults/large/large-checkmark-icon";
export { LargeCloseIcon } from "./atoms/icons/defaults/large/large-close-icon";

// #endregion Atoms

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

export { ButtonSizes } from "./atoms/constants/button-sizes";
export { ButtonStyles } from "./atoms/constants/button-styles";
export { ButtonTypes } from "./atoms/constants/button-types";
export { IconSizes } from "./atoms/constants/icon-sizes";
export { Icons } from "./atoms/constants/icons";
export { SvgIcons } from "./atoms/constants/svg-icons";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

// To support babel we must use isolatedModules=true, thus we cannot re-export named interfaces
export * from "./atoms/interfaces/svg-icon";

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

// To support babel we must use isolatedModules=true, thus we cannot re-export named types
export * from "./types/svg";

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Utilities
// -----------------------------------------------------------------------------------------

export { IconUtils } from "./utilities/icon-utils";

// #endregion Utilities
