import {
    CanvasDrawToolSettings,
    CanvasDrawTool,
    DrawToolConfig,
    BaseCanvasDrawTool,
} from "./base-canvas-draw-tool";
import { CanvasToolType } from "../enums/canvas-tool-type";
import { CoreUtils } from "../../../../utilities/core-utils";
import { PointerPosition } from "../interfaces/pointer-position";
import { CanvasObjectType } from "../enums/canvas-object-type";
import { PositionUtils } from "../utils/position-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface LineStrokeSettings extends CanvasDrawToolSettings {
    endX: number;
    endY: number;
    startX: number;
    startY: number;
}

// #endregion Interfaces

class LineCanvasDrawTool extends BaseCanvasDrawTool implements CanvasDrawTool {
    public toolType: CanvasToolType;

    constructor(drawToolConfig: DrawToolConfig) {
        super(drawToolConfig);

        this.toolType = CanvasToolType.line;

        CoreUtils.bindAll(this);
    }

    // ---------------------------------------------------------------------------------------------
    // #region Public Methods
    // ---------------------------------------------------------------------------------------------

    public dispose(): void {
        this._removeEventListeners();
    }

    public drawStrokes(strokes: CanvasDrawToolSettings[]): void {
        (strokes as LineStrokeSettings[]).forEach(
            (stroke: LineStrokeSettings) => {
                const startX: number = stroke.startX;
                const endX: number = stroke.endX;
                const startY: number = stroke.startY;
                const endY: number = stroke.endY;

                const color = stroke.stroke;
                const width = stroke.strokeWidth;

                this._drawStroke(startX, startY, endX, endY, color, width);
            }
        );
    }

    public initialize(): void {
        this._addEventListeners();
    }

    // #endregion Private Methods

    // ---------------------------------------------------------------------------------------------
    // #region Private Methods
    // ---------------------------------------------------------------------------------------------

    /**
     * Binds the necessary mouse and touch events
     */
    private _addEventListeners(): void {
        this._canvas.addEventListener(
            "mousedown",
            this._onMouseDownCanvas,
            false
        );
        this._canvas.addEventListener(
            "mousemove",
            this._onMouseMoveCanvas,
            false
        );
        window.addEventListener("mouseup", this._onMouseUpWindow, false);

        this._canvas.addEventListener(
            "touchstart",
            this._onTouchStartCanvas,
            false
        );
        this._canvas.addEventListener(
            "touchmove",
            this._onTouchMoveCanvas,
            false
        );
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
            this._uiSettings.width
        );
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
        width: number
    ): void {
        this._context.beginPath();

        // Draw a line between two points
        this._context.strokeStyle = color;
        this._context.moveTo(startX, startY);
        this._context.lineCap = "round";
        this._context.lineWidth = width;
        this._context.lineTo(endX, endY);

        if (endX !== startX || endY !== startY) {
            // only draw the line if the mouse actually moved
            this._context.stroke();
        }

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

        this._onFinishStroke(strokeSettings);
    }

    /**
     * Returns the stroke settings for the entire interaction including the stroke, color, and width
     */
    private _getStrokeSettings(): LineStrokeSettings {
        // Put together tool stroke here
        return {
            endX: this._currentPosition.x,
            endY: this._currentPosition.y,
            startX: this._previousPosition.x,
            startY: this._previousPosition.y,
            stroke: this._uiSettings.color,
            strokeWidth: this._uiSettings.width,
            type: CanvasObjectType.line,
        };
    }

    /**
     * Handles the move interaction while drawing
     *
     * @param newCurrentPosition
     */
    private _move(newCurrentPosition: PointerPosition): void {
        if (newCurrentPosition == null) {
            // null checking - being defensive
            return;
        }

        // If the pointer is active... draw!
        if (this._isPointerActive) {
            // Undo the last interaction by redrawing the canvas strokes
            this._config.redraw();

            this._currentPosition = newCurrentPosition;
            this._drawInteraction();
        }
    }

    /**
     * Removed the bound mouse and touch events
     */
    private _removeEventListeners(): void {
        this._canvas.removeEventListener(
            "mousedown",
            this._onMouseDownCanvas,
            false
        );
        this._canvas.removeEventListener(
            "mousemove",
            this._onMouseMoveCanvas,
            false
        );
        window.removeEventListener("mouseup", this._onMouseUpWindow, false);

        this._canvas.removeEventListener(
            "touchstart",
            this._onTouchStartCanvas,
            false
        );
        this._canvas.removeEventListener(
            "touchmove",
            this._onTouchMoveCanvas,
            false
        );
        window.removeEventListener("touchend", this._onTouchEndWindow, false);
    }

    /**
     * Captures the starting position and begins the entire stroke interaction
     *
     * @param startingPosition
     */
    private _startStroke(startingPosition: PointerPosition): void {
        // Start the path of the stroke
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
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._startStroke(mousePosition);
        }
    }

    private _onMouseMoveCanvas(e: MouseEvent): void {
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._move(mousePosition);
        }
    }

    private _onMouseUpWindow(): void {
        this._finishStroke();
    }

    private _onTouchEndWindow(e: TouchEvent): void {
        this._finishStroke();

        // Don't allow touch events to be called
        e.preventDefault();
    }

    private _onTouchMoveCanvas(e: TouchEvent): void {
        const touchPosition = PositionUtils.getTouchPosition(
            e,
            this._config.canvas
        );
        if (touchPosition != null) {
            this._move(touchPosition);
        }

        // Don't allow touch events to be called
        e.preventDefault();
    }

    private _onTouchStartCanvas(e: TouchEvent): void {
        const touchPosition = PositionUtils.getTouchPosition(
            e,
            this._config.canvas
        );
        if (touchPosition != null) {
            this._startStroke(touchPosition);
        }

        // Don't allow touch events to be called
        e.preventDefault();
    }

    // #endregion Event Handlers
}

export { LineCanvasDrawTool };
