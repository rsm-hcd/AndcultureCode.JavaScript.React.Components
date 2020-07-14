import { SvgIcon } from "../atoms/interfaces/svg-icon";
import { IconSizes } from "../atoms/constants/icon-sizes";
import { Svg } from "../types/svg";

// -----------------------------------------------------------------------------------------
// #region Variables
// -----------------------------------------------------------------------------------------

let _globalIcons: any = {};

// #endregion Variables

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Retrieve an SVG Icon by type
 * @param type Type of SVG Icon
 */
const _getSvgIcon = (type: string): SvgIcon => _getRegistry()?.[type];

/**
 * Retrieve a specific SVG Icon size
 * @param type Type of SVG Icon
 * @param size Size being requested
 */
const _getSvg = (type: string, size: IconSizes): Svg =>
    _getSvgIcon(type)?.[size] as Svg;

/**
 * Retrieve a full (immutable) copy of the icon registry
 */
const _getRegistry = () => Object.assign({}, _globalIcons);

/**
 * Register custom project versions of icons, merging with any existing
 * @param icons
 */
const _register = (icons: any) => {
    _globalIcons = Object.assign({}, _globalIcons, icons);
    return _getRegistry();
};

/**
 * Register a single SVG Icon
 * @param icon SVG Icon to register
 * @param throwIfDuplicate Throw an error if a duplicate for this icon type exists
 */
const _registerSvgIcon = (icon: SvgIcon, throwIfDuplicate: boolean = false) => {
    const type = icon.type;

    if (throwIfDuplicate && _globalIcons.hasOwnProperty(type)) {
        throw new Error(
            `Icon registry already contains icon of type '${type}'`
        );
    }

    _globalIcons[type] = icon;

    return _getRegistry();
};

/**
 * Register all default icons provided from this components package
 */
const _registerDefaults = () => {};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const IconUtils = {
    getSvg: _getSvg,
    getSvgIcon: _getSvgIcon,
    getRegistry: _getRegistry,
    register: _register,
    registerSvgIcon: _registerSvgIcon,
    registerDefaults: _registerDefaults,
};

export { IconUtils };

// #endregion Exports
