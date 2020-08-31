import {
    CanvasSketch,
    CanvasSketchConfig
} from "./canvas-sketch";
import * as React from "react";
import { CanvasToolType } from "./enums/canvas-tool-type";
import { CanvasDrawToolSettings } from "./tools/base-canvas-draw-tool";
import { useEffect } from "react";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

/**
 * Represents the objects containing all data necessary to redraw the sketch canvas at a point in
 * the history of the stack of drawing objects
 */
export interface ReactCanvasSketchValue {
    /**
     * The current point/index in the history stack of drawing objects
     */
    currentObjectIndex: number;
    /**
     * The drawn objects stack
     */
    objects: CanvasDrawToolSettings[];
}

/**
 * Represents all properties supported by the <ReactCanvasSketch> component
 */
export interface ReactCanvasSketchProps {
    /**
     * The URL of the background image to be drawn to the sketchpad
     */
    backgroundImageUrl: string;
    /**
     * The height of the canvas element
     */
    canvasHeight: number;
    /**
     * The width of the canvas element
     */
    canvasWidth: number;
    /**
     * The className that will be appended to the sketchpad's outer most container
     */
    className: string;
    /**
     * The height of the container wrapping the sketchpad
     * NOTE: This can be smaller than the canvasHeight value since the sketchpad supports panning
     */
    containerHeight: number;
    /**
     * The width of the container wrapping the sketchpad
     * NOTE: This can be smaller than the canvasWidth value since the sketchpad supports panning
     */
    containerWidth: number;
    /**
     * Handler to allow caller to track added stroke settings whenever a tool draws a new object
     * to the drawn objects stack
     */
    onAddedStroke: (strokeSettings: CanvasDrawToolSettings) => void;
    /**
     * Allows the caller to redraw the sketchpad by changing the numeric value provided
     */
    redrawIncrement: number;
    /**
     * The tool to be selected by the canvas sketch library
     */
    canvasToolType: CanvasToolType;
    /**
     * When true, displays a dashed border around the canvas to identify drawable area.  When false,
     * hides the dashed border around the canvas.
     */
    showCanvasBorder: boolean;
    /**
     * The width of the selected tool for use by the selected tool
     */
    toolWidth: number;
    /**
     * The color of the selected tool for use by the selected tool
     */
    toolColor: string;
    /**
     * The object literal containing all information necessary to redraw the objects containing all
     * data necessary to redraw the sketch canvas at a point in the history of the stack of drawing
     * objects
     */
    value: ReactCanvasSketchValue;
}

// #endregion Interfaces


// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const ReactCanvasSketch: React.FunctionComponent<ReactCanvasSketchProps> = (
    props: React.PropsWithChildren<ReactCanvasSketchProps>
) => {

    // track the ref of the canvas elements
    const htmlCanvasBackgroundImage = React.createRef<HTMLCanvasElement>();
    const htmlCanvasSketch = React.createRef<HTMLCanvasElement>();

    // initialize state
    const canvasSketchDefaultInstance: CanvasSketch = null as any;
    const [isInitialized, setIsInitialized] = React.useState(false);
    const [canvasSketch, setCanvasSketch] = React.useState(canvasSketchDefaultInstance);

    // ---------------------------------------------------------------------------------------------
    // #region Effect Hooks
    // ---------------------------------------------------------------------------------------------

    // initialization of canvas sketch - NOTE: Must be before other effects using canvasSketch!
    useEffect(() => {
        if (isInitialized) {
            // already initialized, bail
            return;
        }

        console.log("useEffect: Initializing");

        const {
            backgroundImageUrl,
            value,
        } = { ...props };

        // set up the default options for the background image
        const canvasSketchConfig: CanvasSketchConfig = {
            backgroundImage: { src: backgroundImageUrl },
            backgroundImageCanvas: htmlCanvasBackgroundImage.current as HTMLCanvasElement,
            currentObjectIndex: value.currentObjectIndex,
            objectStack: value.objects,
            panX: 0,
            panY: 0,
            scaleFactor: 1,
            sketchCanvas: htmlCanvasSketch.current as HTMLCanvasElement,
        };

        // initialize the canvas sketch object
        const newCanvasSketch = new CanvasSketch(canvasSketchConfig);

        // set state
        setCanvasSketch(newCanvasSketch);
        setIsInitialized(true);
    }, [
        canvasSketch,
        htmlCanvasBackgroundImage,
        htmlCanvasSketch,
        isInitialized,
        props
    ]);

    // cleanup of canvas sketch when unmounting component
    useEffect(() => {
        return () => {
            // cleanup on unmount
            if (canvasSketch != null) {
                canvasSketch.dispose();
            }
        }
    }, [canvasSketch]);

    // redraws current state when dimensions of container or canvas change
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.redrawCurrentState();
    }, [
        canvasSketch,
        props.canvasHeight,
        props.canvasWidth,
        props.containerHeight,
        props.containerWidth,
    ]);

    // redraw the sketch canvas when current object index or objects changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }

        canvasSketch.redrawSketchAt(props.value.objects, props.value.currentObjectIndex);
    }, [
        canvasSketch,
        props.value.currentObjectIndex,
        props.value.objects,
    ]);

    // redraw the sketch canvas when redraw increment changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }

        const { value } = { ...props };

        canvasSketch.redrawSketchAt(value.objects, value.currentObjectIndex);
    }, [
        props,
        canvasSketch
    ]);

    // redraw the background image when it changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.redrawBackgroundImageUsing(props.backgroundImageUrl);
    }, [
        props.backgroundImageUrl,
        canvasSketch
    ]);

    // set on added stroke when changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setOnAddedToolStroke(props.onAddedStroke);
    }, [
        props.onAddedStroke,
        canvasSketch
    ]);

    // set tool color when it changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setToolColor(props.toolColor);
    }, [
        props.toolColor,
        canvasSketch
    ]);

    // set tool width when it changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setToolWidth(props.toolWidth);
    }, [
        props.toolWidth,
        canvasSketch
    ]);

    // set selected tool when it changes
    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setSelectedTool(props.canvasToolType);
    }, [
        props.canvasToolType,
        canvasSketch
    ]);

    // #endregion Effect Hooks


    // configure styles for elemtns
    const canvasContainerStyles: React.CSSProperties = {
        height: props.canvasHeight,
        position: "relative",
        width: props.canvasWidth,
    };
    const sketchStyles: React.CSSProperties = {
        height: props.containerHeight,
        width: props.containerWidth,
    };
    const canvasStyles: React.CSSProperties = {
        position: "absolute",
    };
    if (props.showCanvasBorder) {
        canvasStyles.border = "1px dashed black";
    }

    return (
        <div
            className={`c-react-canvas-sketch ${props.className}`}
            style={sketchStyles}>
            <div className="c-react-canvas-sketch__canvas-container" style={canvasContainerStyles}>
                <canvas
                    className="c-react-canvas-sketch__background-image"
                    height={props.canvasHeight}
                    ref={htmlCanvasBackgroundImage}
                    style={{ ...canvasStyles, zIndex: 0 }}
                    width={props.canvasWidth} />
                <canvas
                    className="c-react-canvas-sketch__field"
                    height={props.canvasHeight}
                    ref={htmlCanvasSketch}
                    style={{ ...canvasStyles, zIndex: 1 }}
                    width={props.canvasWidth}>
                    Sorry, Canvas HTML5 element is not supported by your browser :(
                    </canvas>
            </div>
        </div>
    );
}

export { ReactCanvasSketch };
