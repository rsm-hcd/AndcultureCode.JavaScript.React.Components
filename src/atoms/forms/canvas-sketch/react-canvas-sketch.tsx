import {
    CanvasSketch,
    CanvasSketchConfig
} from "./canvas-sketch";
import * as React from "react";
import { CanvasToolType } from "./enums/canvas-tool-type";
import { CanvasDrawToolSettings } from "./tools/base-canvas-draw-tool";
import { useEffect } from "@storybook/addons";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface ReactCanvasSketchValue {
    currentObjectIndex: number;
    objects: CanvasDrawToolSettings[];
}

export interface ReactCanvasSketchProps {
    backgroundImageUrl: string;
    canvasHeight: number;
    canvasWidth: number;
    className: string;
    containerHeight: number;
    containerWidth: number;
    onAddedStroke: (strokeSettings: CanvasDrawToolSettings) => void;
    redrawIncrement: number;
    canvasToolType: CanvasToolType;
    toolWidth: number;
    toolColor: string;
    value: ReactCanvasSketchValue;
}

// #endregion Interfaces


// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const ReactCanvasSketch: React.FC<ReactCanvasSketchProps> = (
    props: ReactCanvasSketchProps
) => {

    // track the ref of the canvas elements
    const htmlCanvasBackgroundImage = React.createRef<HTMLCanvasElement>();
    const htmlCanvasSketch = React.createRef<HTMLCanvasElement>();

    // track the previous list of objects
    const prevValueObjectsRef = React.useRef<CanvasDrawToolSettings[]>();
    useEffect(() => {
        prevValueObjectsRef.current = props.value.objects;
    });
    const prevValueObjects = prevValueObjectsRef.current;

    // initialize state
    const canvasSketchDefaultInstance: CanvasSketch = null as any;
    const [isInitialized, setIsInitialized] = React.useState(false);
    const [canvasSketch, setCanvasSketch] = React.useState(canvasSketchDefaultInstance);

    // set up effects
    useEffect(() => {
        if (!isInitialized) {
            // set up the default options for the background image
            const canvasSketchConfig: CanvasSketchConfig = {
                backgroundImage: { src: props.backgroundImageUrl },
                backgroundImageCanvas: htmlCanvasBackgroundImage.current as HTMLCanvasElement,
                currentObjectIndex: props.value.currentObjectIndex,
                objectStack: props.value.objects,
                panX: 0,
                panY: 0,
                scaleFactor: 1,
                sketchCanvas: htmlCanvasSketch.current as HTMLCanvasElement,
            };

            // initialize the canvas sketch object
            const newCanvasSketch = new CanvasSketch(canvasSketchConfig);

            // set up any default property driven settings
            newCanvasSketch.setSelectedTool(props.canvasToolType);
            newCanvasSketch.setToolColor(props.toolColor);
            newCanvasSketch.setToolWidth(props.toolWidth);
            newCanvasSketch.setOnAddedToolStroke(props.onAddedStroke);

            // set state
            setCanvasSketch(newCanvasSketch);
            setIsInitialized(true);
        }
        return () => {
            // clean up
            canvasSketch.dispose();
        }
    });

    useEffect(() => {
        if (prevValueObjects === props.value.objects) {
            canvasSketch.redrawSketchAt(props.value.objects, props.value.currentObjectIndex);
        }
    }, [props.value.currentObjectIndex, props.value.objects]); // https://stackoverflow.com/questions/55724642/react-useeffect-hook-when-only-one-of-the-effects-deps-changes-but-not-the-oth

    useEffect(() => {
        canvasSketch.redrawSketchAt(props.value.objects, props.value.currentObjectIndex);
    }, [props.redrawIncrement]);

    useEffect(() => {
        canvasSketch.redrawBackgroundImageUsing(props.backgroundImageUrl);
    }, [props.backgroundImageUrl]);

    useEffect(() => {
        canvasSketch.setToolColor(props.toolColor);
    }, [props.toolColor]);

    useEffect(() => {
        canvasSketch.setToolWidth(props.toolWidth);
    }, [props.toolWidth]);

    useEffect(() => {
        canvasSketch.setSelectedTool(props.canvasToolType);
    }, [props.canvasToolType]);


    // configure styles for elemtns
    const canvasStyles = {
        height: props.canvasHeight,
        width: props.canvasWidth,
    };
    const containerStyles = {
        height: props.containerHeight,
        width: props.containerWidth,
    };

    return (
        <div
            className={`c-react-canvas-sketch ${props.className}`}
            style={containerStyles}>
            <div className="c-react-canvas-sketch__canvas-container" style={canvasStyles}>
                <canvas
                    className="c-react-canvas-sketch__background-image"
                    height={props.canvasHeight}
                    ref={htmlCanvasBackgroundImage}
                    style={{ zIndex: 0 }}
                    width={props.canvasWidth} />
                <canvas
                    className="c-react-canvas-sketch__field"
                    height={props.canvasHeight}
                    ref={htmlCanvasSketch}
                    style={{ zIndex: 1 }}
                    width={props.canvasWidth}>
                    Sorry, Canvas HTML5 element is not supported by your browser :(
                    </canvas>
            </div>
        </div>
    );
}

export { ReactCanvasSketch };
