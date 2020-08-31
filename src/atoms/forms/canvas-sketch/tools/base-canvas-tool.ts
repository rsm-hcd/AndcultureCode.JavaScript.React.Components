import { CanvasToolType } from "../enums/canvas-tool-type";
import { CanvasObjectType } from "../enums/canvas-object-type";
import { CoreUtils } from "../../../../utilities/core-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface CanvasTool {
    dispose: () => void;
    initialize: () => void;
    toolType: CanvasToolType;
}

export interface CanvasToolSettings {
    type: CanvasObjectType;
}

export interface ToolConfig {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    redraw: () => void;
}

// #endregion Interfaces

class BaseCanvasTool {
    protected _canvas: HTMLCanvasElement;
    protected _config: ToolConfig;
    protected _context: CanvasRenderingContext2D;

    constructor(toolConfig: ToolConfig) {
        this._canvas = toolConfig.canvas;
        this._config = toolConfig;
        this._context = toolConfig.context;

        CoreUtils.bindAll(this);
    }
}

export { BaseCanvasTool };
