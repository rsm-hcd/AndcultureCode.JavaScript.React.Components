import { CanvasDrawToolSettings, BaseCanvasDrawTool, CanvasDrawTool, DrawToolConfig } from "./base-canvas-draw-tool";
import { CanvasToolType } from "../enums/canvas-tool-type";
import { PointerPosition } from "../interfaces/pointer-position";
import { CoreUtils } from "../../../../utilities/core-utils";
import { PositionUtils } from "../utils/position-utils";
import { CanvasObjectType } from "../enums/canvas-object-type";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

interface PencilStrokeSettings extends CanvasDrawToolSettings {
    path: any[];
}

// #endregion Interfaces

class PencilCanvasDrawTool extends BaseCanvasDrawTool implements CanvasDrawTool {
    public toolType: CanvasToolType;

    protected _path: PointerPosition[];

    constructor(drawToolConfig: DrawToolConfig) {
        super(drawToolConfig);

        this._path = [];

        this.toolType = CanvasToolType.pencil;

        CoreUtils.bindAll(this);
    }

    // ---------------------------------------------------------------------------------------------
    // #region Public Methods
    // ---------------------------------------------------------------------------------------------

    public dispose(): void {
        this._removeEventListeners();
        this._removeCursor();
    }

    public drawStrokes(strokes: CanvasDrawToolSettings[]): void {
        (strokes as PencilStrokeSettings[]).forEach((stroke: PencilStrokeSettings, strokeI: number) => {
            let lastX: number = 0;
            let lastY: number = 0;
            stroke.path.forEach((path: any, pathI: number) => {
                const type = path[0];
                const color = stroke.stroke;
                const width = stroke.strokeWidth;
                if (type === "M") {
                    // started stroke
                    this._drawStroke(path[1], path[2], path[1], path[2], color, width);
                    lastX = path[1];
                    lastY = path[2];
                }
                if (type === "Q") {
                    // moving
                    this._drawStroke(lastX, lastY, path[3], path[4], color, width);
                    lastX = path[1];
                    lastY = path[2];
                }
                if (type === "L") {
                    // ended stroke
                    this._drawStroke(lastX, lastY, path[1], path[2], color, width);
                    lastX = path[1];
                    lastY = path[2];
                }
            });
        });
    }

    public initialize(): void {
        this._addEventListeners();
        this._addCursor();
    }

    // #endregion Private Methods

    // ---------------------------------------------------------------------------------------------
    // #region Private Methods
    // ---------------------------------------------------------------------------------------------

    private _addCursor(): void {
        this._canvas.style.cursor = "crosshair";
    }

    /**
     * Binds the necessary mouse and touch events
     */
    private _addEventListeners(): void {
        this._canvas.addEventListener("mousedown", this._onMouseDownCanvas, false);
        this._canvas.addEventListener("mousemove", this._onMouseMoveCanvas, false);
        window.addEventListener("mouseup", this._onMouseUpWindow, false);

        this._canvas.addEventListener("touchstart", this._onTouchStartCanvas, false);
        this._canvas.addEventListener("touchmove", this._onTouchMoveCanvas, false);
        window.addEventListener("touchend", this._onTouchEndWindow, false);
    }

    /**
     * Draws the current state of the interaction
     */
    private _drawInteraction(): void {
        this._drawStroke(
            this._previousPosition.x,
            this._previousPosition.y,
            this._currentPosition.x,
            this._currentPosition.y,
            this._uiSettings.color,
            this._uiSettings.width);
    }

    /**
     * Draws the interaction based on the provided state
     *
     * @param startX
     * @param startY
     * @param endX
     * @param endY
     * @param color
     * @param width
     */
    private _drawStroke(
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        color: string,
        width: number): void {
        this._context.beginPath();

        // Draw a line between two points
        this._context.strokeStyle = color;
        this._context.moveTo(startX, startY);
        this._context.lineCap = "round";
        this._context.lineWidth = width;
        this._context.lineTo(endX, endY);
        this._context.stroke();

        this._context.closePath();
    }

    /**
     * Finalizes the entire stroke interaction
     */
    private _finishStroke(): void {
        if (!this._isPointerActive) {
            // currently not active... bail
            return;
        }

        this._isPointerActive = false;

        const strokeSettings = this._getStrokeSettings();

        // Clear the current path
        this._path = [];

        this._onFinishStroke(strokeSettings);
    }

    /**
     * Returns the path of the entire stroke that can then be persisted for later use
     */
    private _getPath(): any[][] {
        const reformattedPath: any[] = [];
        this._path.forEach((value: PointerPosition, index: number) => {
            if (index === 0) {
                // starting point
                reformattedPath.push(["M", value.x, value.y]);
            }
            else if (index + 1 === this._path.length) {
                // ending point
                reformattedPath.push(["L", value.x, value.y]);
            }
            else {
                // moving point
                reformattedPath.push(["L", value.x, value.y]);
            }
        });

        return reformattedPath;
    }

    /**
     * Returns the stroke settings for the entire interaction including the stroke, color, and width
     */
    private _getStrokeSettings(): PencilStrokeSettings {
        // Put together tool stroke here
        return {
            path: this._getPath(),
            stroke: this._uiSettings.color,
            strokeWidth: this._uiSettings.width,
            type: CanvasObjectType.path,
        };
    }

    /**
     * Handles the move interaction while drawing
     *
     * @param newCurrentPosition
     */
    private _move(newCurrentPosition: PointerPosition): void {
        // If the pointer is active... draw!
        if (this._isPointerActive) {
            // Update the mouse coordinates when moved
            this._previousPosition = this._currentPosition;
            this._path.push(newCurrentPosition);
            this._currentPosition = newCurrentPosition;
            this._drawInteraction();
        }
    }

    private _removeCursor(): void {
        this._canvas.style.cursor = "default";
    }

    /**
     * Removed the bound mouse and touch events
     */
    private _removeEventListeners(): void {
        this._canvas.removeEventListener("mousedown", this._onMouseDownCanvas, false);
        this._canvas.removeEventListener("mousemove", this._onMouseMoveCanvas, false);
        window.removeEventListener("mouseup", this._onMouseUpWindow, false);

        this._canvas.removeEventListener("touchstart", this._onTouchStartCanvas, false);
        this._canvas.removeEventListener("touchmove", this._onTouchMoveCanvas, false);
        window.removeEventListener("touchend", this._onTouchEndWindow, false);
    }

    /**
     * Captures the starting position and begins the entire stroke interaction
     *
     * @param startingPosition
     */
    private _startStroke(startingPosition: PointerPosition): void {
        if (startingPosition == null) {
            // null checking - being defensive
            return;
        }

        // Start the path of the stroke
        this._path.push(startingPosition);
        this._previousPosition = startingPosition;
        this._isPointerActive = true;
        this._currentPosition = startingPosition;

        // Draw!
        this._drawInteraction();
    }

    // #endregion Private Methods

    // ---------------------------------------------------------------------------------------------
    // #region Event Handlers
    // ---------------------------------------------------------------------------------------------

    private _onMouseDownCanvas(e: MouseEvent): void {
        console.log(`_onMouseDownCanvas: start`);
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._startStroke(mousePosition);
        }
        console.log(`_onMouseDownCanvas: finish`);
    }

    private _onMouseMoveCanvas(e: MouseEvent): void {
        console.log(`_onMouseMoveCanvas: start`);
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._move(mousePosition);
        }
        console.log(`_onMouseMoveCanvas: finish`);
    }

    private _onMouseUpWindow(): void {
        console.log(`_onMouseUpWindow: start`);
        this._finishStroke();
        console.log(`_onMouseUpWindow: finish`);
    }

    private _onTouchEndWindow(e: TouchEvent): void {
        this._finishStroke();

        // Don't allow touch events to be called
        e.preventDefault();
    }

    private _onTouchMoveCanvas(e: TouchEvent): void {
        const touchPosition = PositionUtils.getTouchPosition(e, this._config.canvas);
        if (touchPosition != null) {
            this._move(touchPosition);
        }

        // Don't allow touch events to be called
        e.preventDefault();
    }

    private _onTouchStartCanvas(e: TouchEvent): void {
        const touchPosition = PositionUtils.getTouchPosition(e, this._config.canvas);
        if (touchPosition != null) {
            this._startStroke(touchPosition);
        }

        // Don't allow touch events to be called
        e.preventDefault();
    }

    // #endregion Event Handlers
}

export { PencilCanvasDrawTool };
