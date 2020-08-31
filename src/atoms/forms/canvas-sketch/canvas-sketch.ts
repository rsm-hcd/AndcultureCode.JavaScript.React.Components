import { ImageSettings, ImageCanvasTool } from "./tools/image-canvas-tool";
import { CanvasToolSettings, CanvasTool, ToolConfig } from "./tools/base-canvas-tool";
import { LineCanvasDrawTool } from "./tools/line-canvas-draw-tool";
import { PencilCanvasDrawTool } from "./tools/pencil-canvas-draw-tool";
import { PanCanvasTool } from "./tools/pan-canvas-tool";
import { DrawToolUiSettings, DrawToolConfig, CanvasDrawToolSettings, CanvasDrawTool } from "./tools/base-canvas-draw-tool";
import { CanvasToolType } from "./enums/canvas-tool-type";
import { CanvasObjectType } from "./enums/canvas-object-type";
import { CoreUtils } from "../../../utilities/core-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface CanvasSketchConfig {
    backgroundImage?: ImageSettings;
    backgroundImageCanvas?: HTMLCanvasElement;
    currentObjectIndex: number;
    panX: number;
    panY: number;
    scaleFactor: number;
    sketchCanvas: HTMLCanvasElement;
    objectStack: CanvasToolSettings[];
}

// #endregion Interfaces

/**
 * Binds to the provided HTML canvases element in the contructor and provides access to switch
 * the selected tool and selected tool options like color and width through it's API
 */
class CanvasSketch {

    public backgroundImageTool!: ImageCanvasTool;
    public imageTool!: ImageCanvasTool;
    public lineDrawTool!: LineCanvasDrawTool;
    public panTool!: PanCanvasTool;
    public pencilDrawTool!: PencilCanvasDrawTool;
    public selectedTool!: CanvasTool;

    private _config: CanvasSketchConfig;
    private _backgroundImageContext!: CanvasRenderingContext2D;
    private _drawToolUiSettings: DrawToolUiSettings;
    private _drawToolConfig!: DrawToolConfig;
    private _isBrowserSupported!: boolean;
    private _sketchContext!: CanvasRenderingContext2D;
    private _toolConfig!: ToolConfig;

    /**
     * Tracks
     *
     * @constructor
     * @param {CanvasSketchConfig} canvasSketchConfig - configuration of object
     */
    constructor(canvasSketchConfig: CanvasSketchConfig) {
        this._drawToolUiSettings = {
            color: "FFFFFF", // default
            width: 1, // default
        };

        this._config = { ...canvasSketchConfig };

        // initialize local canvas contexts references
        this._initializeCanvasContexts();

        if (!this._isBrowserSupported) {
            // browser doesn't support the canvas... bail
            return;
        }

        // order here matters... handlers passed into tools will be bound to those tools
        CoreUtils.bindAll(this);

        // initialize all tools used by the sketchpad
        this._initializeTools();

        // initialize current drawing
        this._initializeCurrentDrawing();
    }

    // ---------------------------------------------------------------------------------------------
    // #region Public Methods
    // ---------------------------------------------------------------------------------------------

    /**
     * Disposes of any active bound events through the selected tool and anything else that this
     * object may need to clean up
     */
    public dispose(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this.selectedTool.dispose();
    }

    /**
     * Gets the appropriate canva tool based on the provided tool type
     *
     * @param {CanvasToolType} toolType - The tool type of the tool caller is looking to use
     */
    public getTool(toolType: CanvasToolType): CanvasTool | null {
        if (!this._isBrowserSupported) {
            return null;
        }

        switch (toolType) {
            case this.pencilDrawTool.toolType:
                return this.pencilDrawTool;
            case this.lineDrawTool.toolType:
                return this.lineDrawTool;
            case this.imageTool.toolType:
                return this.imageTool;
            case this.panTool.toolType:
                return this.panTool;
            default:
                return null;
        }
    }

    /**
     * Redraws the background image based on the URL provided
     *
     * @param {string} backgroundImageUrl - The URL of the background image to draw
     */
    public redrawBackgroundImageUsing(backgroundImageUrl: string): void {
        if (this._config.backgroundImage == null) {
            return;
        }
        this._config.backgroundImage.src = backgroundImageUrl;
        this._redrawBackgroundImage();
    }

    /**
     * Forces a redraw of the current state of the canvases.  This is useful in cases where the
     * caller needs to redraw on demand
     */
    public redrawCurrentState(): void {
        this._redrawBackgroundImage();
        this._redrawSketch();
    }

    /**
     * Allows the caller to redraw the sketchpad at any point within the provided stack and
     * point in time within that stack
     *
     * @param {CanvasToolSettings[]} objects - The entire stack of drawn objects
     * @param {number} newCurrentObjectIndex - The point in time / point in stack to draw
     */
    public redrawSketchAt(objects: CanvasToolSettings[], newCurrentObjectIndex: number): void {
        if (!this._isBrowserSupported) {
            return;
        }

        if (objects == null) {
            console.error(`Please provide a new stroke stack`);
            return;
        }
        if (!Array.isArray(objects)) {
            console.error(`Please provide a valid array`);
            return;
        }
        if (newCurrentObjectIndex + 1 > objects.length) {
            console.error(`Drawing history only contains ${objects.length} objects.  Cannot set object index to ${newCurrentObjectIndex}`);
            return;
        }
        if (newCurrentObjectIndex < -1) {
            console.error(`Cannot set new object index below -1.  -1 should be used when nothing is to be drawn`);
            return;
        }

        this._config.objectStack = objects;
        this._config.currentObjectIndex = newCurrentObjectIndex;

        this._redrawSketch();
    }

    /**
     * Allows the caller to select one of the availalbe tool type
     *
     * @param {CanvasToolType} toolType - The tool to be selected
     */
    public setSelectedTool(toolType: CanvasToolType): void {
        if (!this._isBrowserSupported) {
            return;
        }

        if (this.selectedTool != null) {
            this.selectedTool.dispose();
        }

        const selectedTool = this.getTool(toolType);
        if (selectedTool == null) {
            return;
        }
        this.selectedTool = selectedTool;
        if (this.selectedTool != null) {
            this.selectedTool.initialize();
        }
    }

    /**
     * Allows the caller to define the color being used by the tool
     *
     * @param {string} color - The color to be selected (NOTE: must be in hex format with hash)
     * @example
     * canvasSketch.setToolColor('#5eeb34');
     */
    public setToolColor(color: string): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._drawToolUiSettings.color = color;
    }

    /**
     * Allows the caller to define what happens when a tool successfully adds a stroke to the
     * drawn stack of objects
     *
     * @param {(strokeSettings: CanvasDrawToolSettings) => void} onAddedStroke - The function that
     *  is called when a new drawn object is added to the stack.  Returns the settings of that drawn
     *  object including things like color, width, and the type of tool used
     */
    public setOnAddedToolStroke(onAddedStroke: (strokeSettings: CanvasDrawToolSettings) => void): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._drawToolConfig.onFinishStroke = (strokeSettings: CanvasDrawToolSettings) => {

            // make sure to track stroke in stack
            this._onAddStroke(strokeSettings);

            if (typeof (onAddedStroke) === "function") {
                // call
                onAddedStroke(strokeSettings);
            }
        };
    }

    /**
     * Allows the caller to define the width being used by the tool
     *
     * @param {number} width - The width to be seelcted
     * @example
     * canvasSketch.setToolWidth(10);
     */
    public setToolWidth(width: number): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._drawToolUiSettings.width = width;
    }

    // #endregion Public Methods


    // ---------------------------------------------------------------------------------------------
    // #region Private Methods
    // ---------------------------------------------------------------------------------------------

    /**
     * Removes the background image from the background image canvas so that it is no longer visible
     */
    private _clearBackgroundImageCanvas(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        if (this._config.backgroundImageCanvas == null) {
            return;
        }

        this._clearCanvas(this._config.backgroundImageCanvas, this._backgroundImageContext);
    }

    /**
     * Removes all drawing on the provided canvas and context
     *
     * @param {HTMLCanvasElement} canvas - The canvas that will have its drawing removed
     * @param {CanvasRenderingContext2D} context - The context of the canvas to remove the drawing
     */
    private _clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * Removes all drawing from the sketch canvas so that it is no longer visible
     */
    private _clearSketchCanvas(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._clearCanvas(this._config.sketchCanvas, this._sketchContext);
    }

    /**
     * Draws the provided objects onto the sketch canvas
     *
     * @param {CanvasToolSettings[]} objectStack - The provided objects to be drawn
     */
    private _drawObjects(objectStack: CanvasToolSettings[]): void {
        if (!this._isBrowserSupported) {
            return;
        }

        // Draw the pencil strokes
        const pencilStrokes = objectStack.filter((value: CanvasToolSettings) => value.type === CanvasObjectType.path) as CanvasDrawToolSettings[];
        this.pencilDrawTool.drawStrokes(pencilStrokes);

        // Draw the line strokes
        const lineStrokes = objectStack.filter((value: CanvasToolSettings) => value.type === CanvasObjectType.line) as CanvasDrawToolSettings[];
        this.lineDrawTool.drawStrokes(lineStrokes);

        // Draw the images
        const images = objectStack.filter((value: CanvasToolSettings) => value.type === CanvasObjectType.image) as any as ImageSettings[];
        this.imageTool.drawImages(images);
    }

    /**
     * Handler bound to tools drawing so capture the drawn stroke int he canvas sketch stack
     *
     * @param {CanvasDrawToolSettings} strokeSettings - The settings of the drawn stroke that was just added
     */
    private _onAddStroke(strokeSettings: CanvasDrawToolSettings): void {
        // track the changes in it's own stack.. making sure to consider the current object index (history in view currently)
        this._config.objectStack = this._getStackToDraw();
        this._config.objectStack.push(strokeSettings);

        this._config.currentObjectIndex = this._config.currentObjectIndex + 1;
    }

    /**
     * Returns an immutable stack of drawn strokes to draw at the point / point in time based on the current object index
     */
    private _getStackToDraw(): CanvasToolSettings[] {
        const stackToDraw = [...this._config.objectStack].slice(0, this._config.currentObjectIndex + 1);
        return stackToDraw;
    }

    /**
     * Determines if the provided canvas tool is a drawable tool
     *
     * @param {CanvasTool} tool - The tool to evaluate
     */
    private _isInstanceOfDrawTool(tool: CanvasTool): tool is CanvasDrawTool {
        return "color" in tool
            && "width" in tool
            && "drawStrokes" in tool;
    }

    /**
     * Uses the current canvas instances to establish the sketch and background image contexts and
     * while determining browser compatability with canvas at the same time
     */
    private _initializeCanvasContexts(): void {
        if (this._config.sketchCanvas.getContext != null) {
            // browser supports the canvas tag, get the 2d drawing context for this canvas
            const sketchContext = this._config.sketchCanvas.getContext("2d");
            if (sketchContext == null) {
                return;
            }
            this._sketchContext = sketchContext;
            this._isBrowserSupported = true;
        }
        else {
            // browser does not support the canvas tag, bail
            this._isBrowserSupported = false;
            return;
        }

        if (this._config.backgroundImageCanvas != null && this._config.backgroundImageCanvas.getContext != null) {
            // browser supports the canvas tag, get the 2d drawing context for this canvas
            const backgroundImageContext = this._config.backgroundImageCanvas.getContext("2d");
            if (backgroundImageContext == null) {
                return;
            }
            this._backgroundImageContext = backgroundImageContext;
            this._isBrowserSupported = true;
        }
        else {
            // browser does not support the canvas tag, bail
            this._isBrowserSupported = false;
            return;
        }
    }

    /**
     * Uses the current object stack (if provided) to redraw the strokes onto the sketch canvas
     */
    private _initializeCurrentDrawing(): void {
        if (this._config.objectStack?.length > 0) {
            // default the current stroke based on the initialized stroke stack's last object
            const lastObjectIndex = this._config.objectStack.length - 1;

            if (this._config.currentObjectIndex != null && lastObjectIndex !== this._config.currentObjectIndex) {
                // caller wants the index to be something different... overwrite with caller's demand
                this._config.currentObjectIndex = lastObjectIndex;
            }

            const stackToDraw = this._getStackToDraw();

            this._drawObjects(stackToDraw);
        }
    }

    /**
     * Uses the current sketch canvas and context to set up all available tools to the caller
     */
    private _initializeTools(): void {
        // setup default config settings for all tools
        this._toolConfig = {
            canvas: this._config.sketchCanvas,
            context: this._sketchContext,
            redraw: this._redrawSketch,
        };
        this._drawToolConfig = Object.assign({
            onFinishStroke: (strokeSettings: CanvasDrawToolSettings) => { },
            uiSettings: this._drawToolUiSettings,
        }, this._toolConfig);

        this.imageTool = new ImageCanvasTool(Object.assign({}, this._toolConfig, { redraw: this._redrawSketch }));
        this.lineDrawTool = new LineCanvasDrawTool(this._drawToolConfig);
        this.pencilDrawTool = new PencilCanvasDrawTool(this._drawToolConfig);
        this.panTool = new PanCanvasTool(Object.assign({}, this._toolConfig, { panTo: this._panTo }));

        if (this._config.backgroundImage?.src != null && this._config.backgroundImageCanvas != null) {
            const toolConfig: ToolConfig = {
                canvas: this._config.backgroundImageCanvas,
                context: this._backgroundImageContext,
                redraw: this._redrawBackgroundImage,
            };
            this.backgroundImageTool = new ImageCanvasTool(toolConfig);

            // default the dimension of the destination rectangle for the background image to fit center
            const defaultBackgroundImageSettings: ImageSettings = {
                destRecEndX: this._config.backgroundImageCanvas.width,
                destRecEndY: this._config.backgroundImageCanvas.height,
                destRecStartX: 0,
                destRecStartY: 0,
                src: '',
            };
            Object.assign(defaultBackgroundImageSettings, this._config.backgroundImage);

            // draw the background image
            this.backgroundImageTool.drawImage(defaultBackgroundImageSettings);
        }
    }

    /**
     * Positions the canvases (background image and sketch) to the provided coordinate values
     *
     * @param {number} panXDelta - The left pixel number
     * @param {number} panYDelta - The top pixel number
     */
    private _panTo(panXDelta: number, panYDelta: number): void {
        const newPanX = this._config.panX + panXDelta;
        const newPanY = this._config.panY + panYDelta;
        this._config.panX = newPanX;
        this._config.panY = newPanY;

        this._config.sketchCanvas.style.top = newPanY + "px";
        this._config.sketchCanvas.style.left = newPanX + "px";

        if (this._config.backgroundImageCanvas != null) {
            this._config.backgroundImageCanvas.style.top = newPanY + "px";
            this._config.backgroundImageCanvas.style.left = newPanX + "px";
        }
    }

    /**
     * Clears the sketch canvas and redraws all current stack objects to it
     */
    private _redrawSketch(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._clearSketchCanvas();

        const stackToDraw = this._getStackToDraw();

        this._drawObjects(stackToDraw);
    }

    /**
     * Clears the background image canvas and redraws the background image to it
     */
    private _redrawBackgroundImage(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._clearBackgroundImageCanvas();

        if (this.backgroundImageTool != null && this._config.backgroundImage != null) {
            this.backgroundImageTool.drawImage(this._config.backgroundImage);
        }
    }

    // #endregion Public Methods
}

export { CanvasSketch };
