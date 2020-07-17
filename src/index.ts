// -----------------------------------------------------------------------------------------
// #region Atoms
// -----------------------------------------------------------------------------------------

export { Anchor } from "./atoms/anchors/anchor";
export { AnchorWithIcon } from "./atoms/anchors/anchor-with-icon";
export { Button } from "./atoms/buttons/button";
export { Icon } from "./atoms/icons/icon";
export { Image } from "./atoms/images/image";
export { ProgressBar } from "./atoms/progress-bar/progress-bar";

// Forms
export { CheckboxButton } from "./atoms/forms/checkbox-button";
export { CheckboxInput } from "./atoms/forms/checkbox-input";
export { InputCharacterCount } from "./atoms/forms/input-character-count";
export { PasswordInput } from "./atoms/forms/password-input";
export { Select } from "./atoms/forms/select";
export { SubmitButton } from "./atoms/forms/submit-button";
export { TextArea } from "./atoms/forms/text-area";
export { TextInput } from "./atoms/forms/text-input";
export { TextInputIcon } from "./atoms/forms/text-input-icon";

// Typography
export { Heading } from "./atoms/typography/heading";
export { HeadingIcon } from "./atoms/typography/heading-icon";
export { Paragraph } from "./atoms/typography/paragraph";

// #endregion Atoms

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

export { ButtonSizes } from "./atoms/constants/button-sizes";
export { ButtonStyles } from "./atoms/constants/button-styles";
export { ButtonTypes } from "./atoms/constants/button-types";
export { HeadingPriority } from "./atoms/constants/heading-priority";
export { IconSizes } from "./atoms/constants/icon-sizes";
export { Icons } from "./atoms/constants/icons";
export { InputTypes } from "./atoms/constants/input-types";
export { ParagraphSizes } from "./atoms/constants/paragraph-sizes";
export { SvgIcons } from "./atoms/constants/svg-icons";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

// To support babel we must use isolatedModules=true, thus we cannot re-export named interfaces
export * from "./atoms/interfaces/input-properties";
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
