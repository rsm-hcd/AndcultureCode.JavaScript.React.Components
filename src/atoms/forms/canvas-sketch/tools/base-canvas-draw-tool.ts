import { CanvasToolSettings, ToolConfig } from "./base-canvas-tool";
import { CanvasToolType } from "../enums/canvas-tool-type";
import { PointerPosition } from "../interfaces/pointer-position";
import { CoreUtils } from "../../../../utilities/core-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface CanvasDrawTool {
    dispose: () => void;
    drawStrokes: (strokes: CanvasDrawToolSettings[]) => void;
    initialize: () => void;
    toolType: CanvasToolType;
}

export interface CanvasDrawToolSettings extends CanvasToolSettings {
    stroke: string; // color
    strokeWidth: number;
}

export interface DrawToolUiSettings {
    color: string;
    width: number;
}

export interface DrawToolConfig extends ToolConfig {
    onFinishStroke: (strokeSettings: CanvasDrawToolSettings) => void;
    uiSettings: DrawToolUiSettings;
}

// #endregion Interfaces

class BaseCanvasDrawTool {
    protected _canvas: HTMLCanvasElement;
    protected _color: string;
    protected _config: DrawToolConfig;
    protected _context: CanvasRenderingContext2D;
    protected _currentPosition: PointerPosition;
    protected _isPointerActive: boolean;
    protected _previousPosition: PointerPosition;
    protected _uiSettings: DrawToolUiSettings;
    protected _width: number;

    constructor(config: DrawToolConfig) {
        this._uiSettings = config.uiSettings;

        this._canvas = config.canvas;
        this._color = "FFFFFF"; // default
        this._config = config;
        this._context = config.context;
        this._currentPosition = { x: 0, y: 0 }; // default
        this._previousPosition = { x: 0, y: 0 }; // default
        this._width = 1; // default

        this._isPointerActive = false;

        CoreUtils.bindAll(this);
    }

    // ---------------------------------------------------------------------------------------------
    // #region Protected Methods
    // ---------------------------------------------------------------------------------------------

    protected _onFinishStroke(strokeSettings: CanvasDrawToolSettings): void {
        if (this._config.onFinishStroke) {
            this._config.onFinishStroke(strokeSettings);
        }
    }

    // #endregion Public Methods
}

export { BaseCanvasDrawTool };
