[andculturecode-javascript-react-components](../README.md) › [ReactCanvasSketchProps](reactcanvassketchprops.md)

# Interface: ReactCanvasSketchProps

Represents all properties supported by the <ReactCanvasSketch> component

## Hierarchy

* **ReactCanvasSketchProps**

## Index

### Properties

* [backgroundImageUrl](reactcanvassketchprops.md#backgroundimageurl)
* [canvasHeight](reactcanvassketchprops.md#canvasheight)
* [canvasToolType](reactcanvassketchprops.md#canvastooltype)
* [canvasWidth](reactcanvassketchprops.md#canvaswidth)
* [className](reactcanvassketchprops.md#classname)
* [containerHeight](reactcanvassketchprops.md#containerheight)
* [containerWidth](reactcanvassketchprops.md#containerwidth)
* [onAddedStroke](reactcanvassketchprops.md#onaddedstroke)
* [redrawIncrement](reactcanvassketchprops.md#redrawincrement)
* [showCanvasBorder](reactcanvassketchprops.md#showcanvasborder)
* [toolColor](reactcanvassketchprops.md#toolcolor)
* [toolWidth](reactcanvassketchprops.md#toolwidth)
* [value](reactcanvassketchprops.md#value)

## Properties

###  backgroundImageUrl

• **backgroundImageUrl**: *string*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L36)*

The URL of the background image to be drawn to the sketchpad

___

###  canvasHeight

• **canvasHeight**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L40)*

The height of the canvas element

___

###  canvasToolType

• **canvasToolType**: *[CanvasToolType](../enums/canvastooltype.md)*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L71)*

The tool to be selected by the canvas sketch library

___

###  canvasWidth

• **canvasWidth**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L44)*

The width of the canvas element

___

###  className

• **className**: *string*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L48)*

The className that will be appended to the sketchpad's outer most container

___

###  containerHeight

• **containerHeight**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:53](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L53)*

The height of the container wrapping the sketchpad
NOTE: This can be smaller than the canvasHeight value since the sketchpad supports panning

___

###  containerWidth

• **containerWidth**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L58)*

The width of the container wrapping the sketchpad
NOTE: This can be smaller than the canvasWidth value since the sketchpad supports panning

___

###  onAddedStroke

• **onAddedStroke**: *function*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:63](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L63)*

Handler to allow caller to track added stroke settings whenever a tool draws a new object
to the drawn objects stack

#### Type declaration:

▸ (`strokeSettings`: [CanvasDrawToolSettings](canvasdrawtoolsettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](canvasdrawtoolsettings.md) |

___

###  redrawIncrement

• **redrawIncrement**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:67](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L67)*

Allows the caller to redraw the sketchpad by changing the numeric value provided

___

###  showCanvasBorder

• **showCanvasBorder**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L76)*

When true, displays a dashed border around the canvas to identify drawable area.  When false,
hides the dashed border around the canvas.

___

###  toolColor

• **toolColor**: *string*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L84)*

The color of the selected tool for use by the selected tool

___

###  toolWidth

• **toolWidth**: *number*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:80](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L80)*

The width of the selected tool for use by the selected tool

___

###  value

• **value**: *[ReactCanvasSketchValue](reactcanvassketchvalue.md)*

*Defined in [src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/react-canvas-sketch.tsx#L90)*

The object literal containing all information necessary to redraw the objects containing all
data necessary to redraw the sketch canvas at a point in the history of the stack of drawing
objects
