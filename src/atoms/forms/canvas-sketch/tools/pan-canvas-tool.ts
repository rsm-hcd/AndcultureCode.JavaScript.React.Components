import { PointerPosition } from "../interfaces/pointer-position";
import { CoreUtils } from "../../../../utilities/core-utils";
import { CanvasToolType } from "../enums/canvas-tool-type";
import { PositionUtils } from "../utils/position-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface PanConfig {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    panTo: (moveX: number, moveY: number) => void;
}

// #endregion Interfaces

class PanCanvasTool {
    public toolType: CanvasToolType;

    private _config: PanConfig;
    private _isPointerActive: boolean;
    private _lastPosition: PointerPosition;

    constructor(panConfig: PanConfig) {
        this._config = panConfig;
        this._isPointerActive = false;
        this._lastPosition = { x: 0, y: 0 };
        this.toolType = CanvasToolType.pan;

        CoreUtils.bindAll(this);
    }

    // ---------------------------------------------------------------------------------------------
    // #region Public Methods
    // ---------------------------------------------------------------------------------------------

    public dispose(): void {
        this._removeEventListeners();
        this._removeCursor();
    }

    public initialize(): void {
        this._addEventListeners();
        this._addCursor();
    }

    // #endregion Public Methods

    // ---------------------------------------------------------------------------------------------
    // #region Private Methods
    // ---------------------------------------------------------------------------------------------

    private _addCursor(): void {
        this._config.canvas.style.cursor = "move";
    }

    /**
     * Binds the necessary mouse and touch events
     */
    private _addEventListeners(): void {
        this._config.canvas.addEventListener(
            "mousedown",
            this._onMouseDownCanvas,
            false
        );
        this._config.canvas.addEventListener(
            "mousemove",
            this._onMouseMoveCanvas,
            false
        );
        window.addEventListener("mouseup", this._onMouseUpWindow, false);

        this._config.canvas.addEventListener(
            "touchstart",
            this._onTouchStartCanvas,
            false
        );
        this._config.canvas.addEventListener(
            "touchmove",
            this._onTouchMoveCanvas,
            false
        );
        window.addEventListener("touchend", this._onTouchEndWindow, false);
    }

    /**
     * Completes the panning interaction
     */
    private _finishPan(): void {
        // Finish the path of the stroke
        this._lastPosition = { x: 0, y: 0 };
        this._isPointerActive = false;
    }

    /**
     * Tracks the point of interaction and moves to it
     *
     * @param newCurrentPosition
     */
    private _pan(newCurrentPosition: PointerPosition): void {
        // If the pointer is active... draw!
        if (this._isPointerActive) {
            const newPanX = newCurrentPosition.x - this._lastPosition.x;
            const newPanY = newCurrentPosition.y - this._lastPosition.y;

            this._config.panTo(newPanX, newPanY);
        }
    }

    private _removeCursor(): void {
        this._config.canvas.style.cursor = "default";
    }

    /**
     * Removed the bound mouse and touch events
     */
    private _removeEventListeners(): void {
        this._config.canvas.removeEventListener(
            "mousedown",
            this._onMouseDownCanvas,
            false
        );
        this._config.canvas.removeEventListener(
            "mousemove",
            this._onMouseMoveCanvas,
            false
        );
        window.removeEventListener("mouseup", this._onMouseUpWindow, false);

        this._config.canvas.removeEventListener(
            "touchstart",
            this._onTouchStartCanvas,
            false
        );
        this._config.canvas.removeEventListener(
            "touchmove",
            this._onTouchMoveCanvas,
            false
        );
        window.removeEventListener("touchend", this._onTouchEndWindow, false);
    }

    /**
     * Captures the starting position and begins the entire interaction
     *
     * @param startingPosition
     */
    private _startPan(startingPosition: PointerPosition): void {
        // Start the path of the stroke
        this._lastPosition = startingPosition;
        this._isPointerActive = true;
    }

    // #endregion Private Methods

    // ---------------------------------------------------------------------------------------------
    // #region Event Handlers
    // ---------------------------------------------------------------------------------------------

    private _onMouseDownCanvas(e: MouseEvent): void {
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._startPan(mousePosition);
        }
    }

    private _onMouseMoveCanvas(e: MouseEvent): void {
        const mousePosition = PositionUtils.getMousePosition(e);
        if (mousePosition != null) {
            this._pan(mousePosition);
        }
    }

    private _onMouseUpWindow(): void {
        this._finishPan();
    }

    private _onTouchEndWindow(e: TouchEvent): void {
        this._finishPan();

        // Don't allow touch events to be called
        e.preventDefault();
    }

    private _onTouchMoveCanvas(e: TouchEvent): void {
        const touchPosition = PositionUtils.getTouchPosition(
            e,
            this._config.canvas
        );
        if (touchPosition != null) {
            this._pan(touchPosition);
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
            this._startPan(touchPosition);
        }

        // Don't allow touch events to be called
        e.preventDefault();
    }

    // #endregion Event Handlers
}

export { PanCanvasTool };
