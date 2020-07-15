import { SvgIcon } from "../atoms/interfaces/svg-icon";
import { IconSizes } from "../atoms/constants/icon-sizes";
import { Svg } from "../types/svg";
import { CollectionUtils } from "andculturecode-javascript-core";

// -----------------------------------------------------------------------------------------
// #region Variables
// -----------------------------------------------------------------------------------------

let _globalIcons: any = {};

// #endregion Variables

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Empties the global icon registry
 */
const _clearRegistry = () => (_globalIcons = {});

/**
 * Retrieve a specific SVG Icon size
 * @param type Type of SVG Icon
 * @param size Size being requested
 */
const _getSvg = (type: string, size: IconSizes = IconSizes.Base): Svg =>
    _getSvgIcon(type)?.[size] as Svg;

/**
 * Retrieve an SVG Icon by type
 * @param type Type of SVG Icon
 */
const _getSvgIcon = (type: string): SvgIcon => _getRegistry()?.[type];

/**
 * Retrieve a full (immutable) copy of the icon registry
 */
const _getRegistry = () => Object.assign({}, _globalIcons);

/**
 * Register custom project versions of icons, merging with any existing
 * @param icons
 */
const _register = (icons: SvgIcon[]) => {
    if (CollectionUtils.isEmpty(icons)) {
        return _getRegistry();
    }

    icons.forEach((i) => _registerSvgIcon(i));

    return _getRegistry();
};

/**
 * Register a single SVG Icon
 * @param icon SVG Icon to register
 * @param throwIfDuplicate Throw an error if a duplicate for this icon type exists
 */
const _registerSvgIcon = (icon: SvgIcon, throwIfDuplicate: boolean = false) => {
    if (icon?.type == null) {
        return {};
    }

    const type = icon.type;

    if (throwIfDuplicate && _globalIcons.hasOwnProperty(type)) {
        throw new Error(
            `Icon registry already contains icon of type '${type}'`
        );
    }

    _globalIcons[type] = icon;

    return _getRegistry();
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const IconUtils = {
    clearRegistry: _clearRegistry,
    getSvg: _getSvg,
    getSvgIcon: _getSvgIcon,
    getRegistry: _getRegistry,
    register: _register,
    registerSvgIcon: _registerSvgIcon,
};

export { IconUtils };

// #endregion Exports
