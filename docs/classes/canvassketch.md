[andculturecode-javascript-react-components](../README.md) › [CanvasSketch](canvassketch.md)

# Class: CanvasSketch

Binds to the provided HTML canvases element in the contructor and provides access to switch
the selected tool and selected tool options like color and width through it's API

## Hierarchy

* **CanvasSketch**

## Index

### Constructors

* [constructor](canvassketch.md#constructor)

### Properties

* [_backgroundImageContext](canvassketch.md#private-_backgroundimagecontext)
* [_config](canvassketch.md#private-_config)
* [_drawToolConfig](canvassketch.md#private-_drawtoolconfig)
* [_drawToolUiSettings](canvassketch.md#private-_drawtooluisettings)
* [_isBrowserSupported](canvassketch.md#private-_isbrowsersupported)
* [_sketchContext](canvassketch.md#private-_sketchcontext)
* [_toolConfig](canvassketch.md#private-_toolconfig)
* [backgroundImageTool](canvassketch.md#backgroundimagetool)
* [imageTool](canvassketch.md#imagetool)
* [lineDrawTool](canvassketch.md#linedrawtool)
* [panTool](canvassketch.md#pantool)
* [pencilDrawTool](canvassketch.md#pencildrawtool)
* [selectedTool](canvassketch.md#selectedtool)

### Methods

* [_clearBackgroundImageCanvas](canvassketch.md#private-_clearbackgroundimagecanvas)
* [_clearCanvas](canvassketch.md#private-_clearcanvas)
* [_clearSketchCanvas](canvassketch.md#private-_clearsketchcanvas)
* [_drawObjects](canvassketch.md#private-_drawobjects)
* [_getStackToDraw](canvassketch.md#private-_getstacktodraw)
* [_initializeCanvasContexts](canvassketch.md#private-_initializecanvascontexts)
* [_initializeCurrentDrawing](canvassketch.md#private-_initializecurrentdrawing)
* [_initializeTools](canvassketch.md#private-_initializetools)
* [_isInstanceOfDrawTool](canvassketch.md#private-_isinstanceofdrawtool)
* [_onAddStroke](canvassketch.md#private-_onaddstroke)
* [_panTo](canvassketch.md#private-_panto)
* [_redrawBackgroundImage](canvassketch.md#private-_redrawbackgroundimage)
* [dispose](canvassketch.md#dispose)
* [getTool](canvassketch.md#gettool)
* [redrawBackgroundImageUsing](canvassketch.md#redrawbackgroundimageusing)
* [redrawCurrentState](canvassketch.md#redrawcurrentstate)
* [redrawSketch](canvassketch.md#redrawsketch)
* [redrawSketchAt](canvassketch.md#redrawsketchat)
* [setOnAddedToolStroke](canvassketch.md#setonaddedtoolstroke)
* [setSelectedTool](canvassketch.md#setselectedtool)
* [setToolColor](canvassketch.md#settoolcolor)
* [setToolWidth](canvassketch.md#settoolwidth)

## Constructors

###  constructor

\+ **new CanvasSketch**(`canvasSketchConfig`: [CanvasSketchConfig](../interfaces/canvassketchconfig.md)): *[CanvasSketch](canvassketch.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L55)*

Tracks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`canvasSketchConfig` | [CanvasSketchConfig](../interfaces/canvassketchconfig.md) | configuration of object  |

**Returns:** *[CanvasSketch](canvassketch.md)*

## Properties

### `Private` _backgroundImageContext

• **_backgroundImageContext**: *CanvasRenderingContext2D*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L50)*

___

### `Private` _config

• **_config**: *[CanvasSketchConfig](../interfaces/canvassketchconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L49)*

___

### `Private` _drawToolConfig

• **_drawToolConfig**: *[DrawToolConfig](../interfaces/drawtoolconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:52](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L52)*

___

### `Private` _drawToolUiSettings

• **_drawToolUiSettings**: *[DrawToolUiSettings](../interfaces/drawtooluisettings.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L51)*

___

### `Private` _isBrowserSupported

• **_isBrowserSupported**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:53](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L53)*

___

### `Private` _sketchContext

• **_sketchContext**: *CanvasRenderingContext2D*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L54)*

___

### `Private` _toolConfig

• **_toolConfig**: *[ToolConfig](../interfaces/toolconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L55)*

___

###  backgroundImageTool

• **backgroundImageTool**: *[ImageCanvasTool](imagecanvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L42)*

___

###  imageTool

• **imageTool**: *[ImageCanvasTool](imagecanvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L43)*

___

###  lineDrawTool

• **lineDrawTool**: *[LineCanvasDrawTool](linecanvasdrawtool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L44)*

___

###  panTool

• **panTool**: *[PanCanvasTool](pancanvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L45)*

___

###  pencilDrawTool

• **pencilDrawTool**: *[PencilCanvasDrawTool](pencilcanvasdrawtool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L46)*

___

###  selectedTool

• **selectedTool**: *[CanvasTool](../interfaces/canvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L47)*

## Methods

### `Private` _clearBackgroundImageCanvas

▸ **_clearBackgroundImageCanvas**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:299](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L299)*

Removes the background image from the background image canvas so that it is no longer visible

**Returns:** *void*

___

### `Private` _clearCanvas

▸ **_clearCanvas**(`canvas`: HTMLCanvasElement, `context`: CanvasRenderingContext2D): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:320](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L320)*

Removes all drawing on the provided canvas and context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | The canvas that will have its drawing removed |
`context` | CanvasRenderingContext2D | The context of the canvas to remove the drawing  |

**Returns:** *void*

___

### `Private` _clearSketchCanvas

▸ **_clearSketchCanvas**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:330](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L330)*

Removes all drawing from the sketch canvas so that it is no longer visible

**Returns:** *void*

___

### `Private` _drawObjects

▸ **_drawObjects**(`objectStack`: [CanvasToolSettings](../interfaces/canvastoolsettings.md)[]): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:343](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L343)*

Draws the provided objects onto the sketch canvas

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectStack` | [CanvasToolSettings](../interfaces/canvastoolsettings.md)[] | The provided objects to be drawn  |

**Returns:** *void*

___

### `Private` _getStackToDraw

▸ **_getStackToDraw**(): *[CanvasToolSettings](../interfaces/canvastoolsettings.md)[]*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:383](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L383)*

Returns an immutable stack of drawn strokes to draw at the point / point in time based on the current object index

**Returns:** *[CanvasToolSettings](../interfaces/canvastoolsettings.md)[]*

___

### `Private` _initializeCanvasContexts

▸ **_initializeCanvasContexts**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:404](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L404)*

Uses the current canvas instances to establish the sketch and background image contexts and
while determining browser compatability with canvas at the same time

**Returns:** *void*

___

### `Private` _initializeCurrentDrawing

▸ **_initializeCurrentDrawing**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:442](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L442)*

Uses the current object stack (if provided) to redraw the strokes onto the sketch canvas

**Returns:** *void*

___

### `Private` _initializeTools

▸ **_initializeTools**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:464](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L464)*

Uses the current sketch canvas and context to set up all available tools to the caller

**Returns:** *void*

___

### `Private` _isInstanceOfDrawTool

▸ **_isInstanceOfDrawTool**(`tool`: [CanvasTool](../interfaces/canvastool.md)): *tool is CanvasDrawTool*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:396](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L396)*

Determines if the provided canvas tool is a drawable tool

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tool` | [CanvasTool](../interfaces/canvastool.md) | The tool to evaluate  |

**Returns:** *tool is CanvasDrawTool*

___

### `Private` _onAddStroke

▸ **_onAddStroke**(`strokeSettings`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:372](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L372)*

Handler bound to tools drawing so capture the drawn stroke int he canvas sketch stack

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md) | The settings of the drawn stroke that was just added  |

**Returns:** *void*

___

### `Private` _panTo

▸ **_panTo**(`panXDelta`: number, `panYDelta`: number): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:523](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L523)*

Positions the canvases (background image and sketch) to the provided coordinate values

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`panXDelta` | number | The left pixel number |
`panYDelta` | number | The top pixel number  |

**Returns:** *void*

___

### `Private` _redrawBackgroundImage

▸ **_redrawBackgroundImage**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:541](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L541)*

Clears the background image canvas and redraws the background image to it

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L97)*

Disposes of any active bound events through the selected tool and anything else that this
object may need to clean up

**Returns:** *void*

___

###  getTool

▸ **getTool**(`toolType`: [CanvasToolType](../enums/canvastooltype.md)): *[CanvasTool](../interfaces/canvastool.md) | null*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:110](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L110)*

Gets the appropriate canva tool based on the provided tool type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toolType` | [CanvasToolType](../enums/canvastooltype.md) | The tool type of the tool caller is looking to use  |

**Returns:** *[CanvasTool](../interfaces/canvastool.md) | null*

___

###  redrawBackgroundImageUsing

▸ **redrawBackgroundImageUsing**(`backgroundImageUrl`: string): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L134)*

Redraws the background image based on the URL provided

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`backgroundImageUrl` | string | The URL of the background image to draw  |

**Returns:** *void*

___

###  redrawCurrentState

▸ **redrawCurrentState**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:146](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L146)*

Forces a redraw of the current state of the canvases.  This is useful in cases where the
caller needs to redraw on demand

**Returns:** *void*

___

###  redrawSketch

▸ **redrawSketch**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:154](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L154)*

Clears the sketch canvas and redraws all current stack objects to it

**Returns:** *void*

___

###  redrawSketchAt

▸ **redrawSketchAt**(`objects`: [CanvasToolSettings](../interfaces/canvastoolsettings.md)[], `newCurrentObjectIndex`: number): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:173](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L173)*

Allows the caller to redraw the sketchpad at any point within the provided stack and
point in time within that stack

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objects` | [CanvasToolSettings](../interfaces/canvastoolsettings.md)[] | The entire stack of drawn objects |
`newCurrentObjectIndex` | number | The point in time / point in stack to draw  |

**Returns:** *void*

___

###  setOnAddedToolStroke

▸ **setOnAddedToolStroke**(`onAddedStroke`: function): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:255](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L255)*

Allows the caller to define what happens when a tool successfully adds a stroke to the
drawn stack of objects

**Parameters:**

▪ **onAddedStroke**: *function*

The function that
 is called when a new drawn object is added to the stack.  Returns the settings of that drawn
 object including things like color, width, and the type of tool used

▸ (`strokeSettings`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md) |

**Returns:** *void*

___

###  setSelectedTool

▸ **setSelectedTool**(`toolType`: [CanvasToolType](../enums/canvastooltype.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:213](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L213)*

Allows the caller to select one of the availalbe tool type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toolType` | [CanvasToolType](../enums/canvastooltype.md) | The tool to be selected  |

**Returns:** *void*

___

###  setToolColor

▸ **setToolColor**(`color`: string): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:239](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L239)*

Allows the caller to define the color being used by the tool

**`example`** 
canvasSketch.setToolColor('#5eeb34');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | string | The color to be selected (NOTE: must be in hex format with hash) |

**Returns:** *void*

___

###  setToolWidth

▸ **setToolWidth**(`width`: number): *void*

*Defined in [src/atoms/forms/canvas-sketch/canvas-sketch.ts:282](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/d179e3a/src/atoms/forms/canvas-sketch/canvas-sketch.ts#L282)*

Allows the caller to define the width being used by the tool

**`example`** 
canvasSketch.setToolWidth(10);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | The width to be seelcted |

**Returns:** *void*
