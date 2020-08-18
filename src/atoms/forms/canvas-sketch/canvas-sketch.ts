import { ImageSettings, ImageCanvasTool } from "./tools/image-canvas-tool";
import { CanvasToolSettings, CanvasTool, ToolConfig } from "./tools/base-canvas-tool";
import { LineCanvasDrawTool } from "./tools/line-canvas-draw-tool";
import { PencilCanvasDrawTool } from "./tools/pencil-canvas-draw-tool";
import { PanCanvasTool } from "./tools/pan-canvas-tool";
import { DrawToolUiSettings, DrawToolConfig, CanvasDrawToolSettings, CanvasDrawTool } from "./tools/base-canvas-draw-tool";
import { CanvasToolType } from "./enums/canvas-tool-type";
import { CoreUtils } from "andculturecode-javascript-core";
import { CanvasObjectType } from "./enums/canvas-object-type";

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
 * Binds to the provided HTML canvases element and gives various tool capabilities
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

    public dispose(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this.selectedTool.dispose();
    }

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

    public redrawBackgroundImageUsing(backgroundImageUrl: string): void {
        if (this._config.backgroundImage == null) {
            return;
        }
        this._config.backgroundImage.src = backgroundImageUrl;
        this._redrawBackgroundImage();
    }

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

    public setSelectedTool(toolType: CanvasToolType): void {
        if (!this._isBrowserSupported) {
            return;
        }

        if (this.selectedTool) {
            this.selectedTool.dispose();
        }

        const selectedTool = this.getTool(toolType);
        if (selectedTool == null) {
            return;
        }
        this.selectedTool = selectedTool;
        if (this.selectedTool) {
            this.selectedTool.initialize();
        }
    }

    public setToolColor(color: string): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._drawToolUiSettings.color = color;
    }

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

    private _clearCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    private _clearSketchCanvas(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._clearCanvas(this._config.sketchCanvas, this._sketchContext);
    }

    private _clearBackgroundImageCanvas(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        if (this._config.backgroundImageCanvas == null) {
            return;
        }

        this._clearCanvas(this._config.backgroundImageCanvas, this._backgroundImageContext);
    }

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

    private _onAddStroke(strokeSettings: CanvasDrawToolSettings): void {
        // track the changes in it's own stack.. making sure to consider the current object index (history in view currently)
        this._config.objectStack = this._getStackToDraw();
        this._config.objectStack.push(strokeSettings);

        this._config.currentObjectIndex = this._config.currentObjectIndex + 1;
    }

    private _getStackToDraw(): CanvasToolSettings[] {
        const stackToDraw = [...this._config.objectStack].slice(0, this._config.currentObjectIndex + 1);
        return stackToDraw;
    }

    private _isInstanceOfDrawTool(tool: CanvasTool): tool is CanvasDrawTool {
        return "color" in tool
            && "width" in tool
            && "drawStrokes" in tool;
    }

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

    private _initializeCurrentDrawing(): void {
        if (this._config.objectStack?.length > 0) {
            // default the current stroke based on the initialized stroke stack's last object
            const lastObjectIndex = this._config.objectStack.length - 1;

            if (this._config.currentObjectIndex != null && lastObjectIndex !== this._config.currentObjectIndex) {
                // caller wants the index to be something different... overwrite with caller's demand
                this._config.currentObjectIndex = this._config.currentObjectIndex;
            }
            else {
                this._config.currentObjectIndex = lastObjectIndex;
            }

            const stackToDraw = this._getStackToDraw();

            this._drawObjects(stackToDraw);
        }

    }

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

    private _redrawSketch(): void {
        if (!this._isBrowserSupported) {
            return;
        }

        this._clearSketchCanvas();

        const stackToDraw = this._getStackToDraw();

        this._drawObjects(stackToDraw);
    }

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
