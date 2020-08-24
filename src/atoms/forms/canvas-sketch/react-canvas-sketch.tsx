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

const ReactCanvasSketch: React.FunctionComponent<ReactCanvasSketchProps> = (
    props: React.PropsWithChildren<ReactCanvasSketchProps>
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
        console.log("useEffect: initializing");
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
    }, [
        canvasSketch,
        htmlCanvasBackgroundImage,
        htmlCanvasSketch,
        isInitialized,
        props.backgroundImageUrl,
        props.canvasToolType,
        props.onAddedStroke,
        props.toolColor,
        props.toolWidth,
        props.value.currentObjectIndex,
        props.value.objects,
    ]);

    useEffect(() => {
        console.log("useEffect: canvasSketch");
        return () => {
            // cleanup on unmount
            if (canvasSketch != null) {
                canvasSketch.dispose();
            }
        }
    }, [canvasSketch]);

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

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        // Only redraw if currentObjectIndex changes but not the objects list itself.  Being done to
        // prevent rerenders after every single stroke of the same tool.  See following URL for more
        // inforamtion on tracking previous state/props using hooks
        //      https://stackoverflow.com/questions/55724642/react-useeffect-hook-when-only-one-of-the-effects-deps-changes-but-not-the-oth
        if (prevValueObjects === props.value.objects) {
            canvasSketch.redrawSketchAt(props.value.objects, props.value.currentObjectIndex);
        }
    }, [props.value.currentObjectIndex, props.value.objects, canvasSketch, prevValueObjects]);

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.redrawSketchAt(props.value.objects, props.value.currentObjectIndex);
    }, [props.redrawIncrement, canvasSketch, props.value.objects, props.value.currentObjectIndex]);

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.redrawBackgroundImageUsing(props.backgroundImageUrl);
    }, [props.backgroundImageUrl, canvasSketch]);

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setToolColor(props.toolColor);
    }, [props.toolColor, canvasSketch]);

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setToolWidth(props.toolWidth);
    }, [props.toolWidth, canvasSketch]);

    useEffect(() => {
        if (canvasSketch == null) {
            return;
        }
        canvasSketch.setSelectedTool(props.canvasToolType);
    }, [props.canvasToolType, canvasSketch]);


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
