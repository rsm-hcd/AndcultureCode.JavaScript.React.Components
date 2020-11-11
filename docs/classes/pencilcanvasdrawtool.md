[andculturecode-javascript-react-components](../README.md) › [PencilCanvasDrawTool](pencilcanvasdrawtool.md)

# Class: PencilCanvasDrawTool

## Hierarchy

* [BaseCanvasDrawTool](basecanvasdrawtool.md)

  ↳ **PencilCanvasDrawTool**

## Implements

* [CanvasDrawTool](../interfaces/canvasdrawtool.md)

## Index

### Constructors

* [constructor](pencilcanvasdrawtool.md#constructor)

### Properties

* [_canvas](pencilcanvasdrawtool.md#protected-_canvas)
* [_color](pencilcanvasdrawtool.md#protected-_color)
* [_config](pencilcanvasdrawtool.md#protected-_config)
* [_context](pencilcanvasdrawtool.md#protected-_context)
* [_currentPosition](pencilcanvasdrawtool.md#protected-_currentposition)
* [_isPointerActive](pencilcanvasdrawtool.md#protected-_ispointeractive)
* [_path](pencilcanvasdrawtool.md#protected-_path)
* [_previousPosition](pencilcanvasdrawtool.md#protected-_previousposition)
* [_uiSettings](pencilcanvasdrawtool.md#protected-_uisettings)
* [_width](pencilcanvasdrawtool.md#protected-_width)
* [toolType](pencilcanvasdrawtool.md#tooltype)

### Methods

* [_addCursor](pencilcanvasdrawtool.md#private-_addcursor)
* [_addEventListeners](pencilcanvasdrawtool.md#private-_addeventlisteners)
* [_drawInteraction](pencilcanvasdrawtool.md#private-_drawinteraction)
* [_drawStroke](pencilcanvasdrawtool.md#private-_drawstroke)
* [_finishStroke](pencilcanvasdrawtool.md#private-_finishstroke)
* [_getPath](pencilcanvasdrawtool.md#private-_getpath)
* [_getStrokeSettings](pencilcanvasdrawtool.md#private-_getstrokesettings)
* [_move](pencilcanvasdrawtool.md#private-_move)
* [_onFinishStroke](pencilcanvasdrawtool.md#protected-_onfinishstroke)
* [_onMouseDownCanvas](pencilcanvasdrawtool.md#private-_onmousedowncanvas)
* [_onMouseMoveCanvas](pencilcanvasdrawtool.md#private-_onmousemovecanvas)
* [_onMouseUpWindow](pencilcanvasdrawtool.md#private-_onmouseupwindow)
* [_onTouchEndWindow](pencilcanvasdrawtool.md#private-_ontouchendwindow)
* [_onTouchMoveCanvas](pencilcanvasdrawtool.md#private-_ontouchmovecanvas)
* [_onTouchStartCanvas](pencilcanvasdrawtool.md#private-_ontouchstartcanvas)
* [_removeCursor](pencilcanvasdrawtool.md#private-_removecursor)
* [_removeEventListeners](pencilcanvasdrawtool.md#private-_removeeventlisteners)
* [_startStroke](pencilcanvasdrawtool.md#private-_startstroke)
* [dispose](pencilcanvasdrawtool.md#dispose)
* [drawStrokes](pencilcanvasdrawtool.md#drawstrokes)
* [initialize](pencilcanvasdrawtool.md#initialize)

## Constructors

###  constructor

\+ **new PencilCanvasDrawTool**(`drawToolConfig`: [DrawToolConfig](../interfaces/drawtoolconfig.md)): *[PencilCanvasDrawTool](pencilcanvasdrawtool.md)*

*Overrides [BaseCanvasDrawTool](basecanvasdrawtool.md).[constructor](basecanvasdrawtool.md#constructor)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`drawToolConfig` | [DrawToolConfig](../interfaces/drawtoolconfig.md) |

**Returns:** *[PencilCanvasDrawTool](pencilcanvasdrawtool.md)*

## Properties

### `Protected` _canvas

• **_canvas**: *HTMLCanvasElement*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_canvas](basecanvasdrawtool.md#protected-_canvas)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L35)*

___

### `Protected` _color

• **_color**: *string*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_color](basecanvasdrawtool.md#protected-_color)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L36)*

___

### `Protected` _config

• **_config**: *[DrawToolConfig](../interfaces/drawtoolconfig.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_config](basecanvasdrawtool.md#protected-_config)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L37)*

___

### `Protected` _context

• **_context**: *CanvasRenderingContext2D*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_context](basecanvasdrawtool.md#protected-_context)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L38)*

___

### `Protected` _currentPosition

• **_currentPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_currentPosition](basecanvasdrawtool.md#protected-_currentposition)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L39)*

___

### `Protected` _isPointerActive

• **_isPointerActive**: *boolean*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_isPointerActive](basecanvasdrawtool.md#protected-_ispointeractive)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L40)*

___

### `Protected` _path

• **_path**: *[PointerPosition](../interfaces/pointerposition.md)[]*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L33)*

___

### `Protected` _previousPosition

• **_previousPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_previousPosition](basecanvasdrawtool.md#protected-_previousposition)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L41)*

___

### `Protected` _uiSettings

• **_uiSettings**: *[DrawToolUiSettings](../interfaces/drawtooluisettings.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_uiSettings](basecanvasdrawtool.md#protected-_uisettings)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L42)*

___

### `Protected` _width

• **_width**: *number*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_width](basecanvasdrawtool.md#protected-_width)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L43)*

___

###  toolType

• **toolType**: *[CanvasToolType](../enums/canvastooltype.md)*

*Implementation of [CanvasDrawTool](../interfaces/canvasdrawtool.md).[toolType](../interfaces/canvasdrawtool.md#tooltype)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L31)*

## Methods

### `Private` _addCursor

▸ **_addCursor**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L120)*

**Returns:** *void*

___

### `Private` _addEventListeners

▸ **_addEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:127](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L127)*

Binds the necessary mouse and touch events

**Returns:** *void*

___

### `Private` _drawInteraction

▸ **_drawInteraction**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:156](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L156)*

Draws the current state of the interaction

**Returns:** *void*

___

### `Private` _drawStroke

▸ **_drawStroke**(`startX`: number, `startY`: number, `endX`: number, `endY`: number, `color`: string, `width`: number): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:177](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L177)*

Draws the interaction based on the provided state

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startX` | number | - |
`startY` | number | - |
`endX` | number | - |
`endY` | number | - |
`color` | string | - |
`width` | number |   |

**Returns:** *void*

___

### `Private` _finishStroke

▸ **_finishStroke**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:201](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L201)*

Finalizes the entire stroke interaction

**Returns:** *void*

___

### `Private` _getPath

▸ **_getPath**(): *[[PathType](../enums/pathtype.md), number, number][]*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:220](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L220)*

Returns the path of the entire stroke that can then be persisted for later use

**Returns:** *[[PathType](../enums/pathtype.md), number, number][]*

___

### `Private` _getStrokeSettings

▸ **_getStrokeSettings**(): *[PencilStrokeSettings](../interfaces/pencilstrokesettings.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:241](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L241)*

Returns the stroke settings for the entire interaction including the stroke, color, and width

**Returns:** *[PencilStrokeSettings](../interfaces/pencilstrokesettings.md)*

___

### `Private` _move

▸ **_move**(`newCurrentPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:256](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L256)*

Handles the move interaction while drawing

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newCurrentPosition` | [PointerPosition](../interfaces/pointerposition.md) |   |

**Returns:** *void*

___

### `Protected` _onFinishStroke

▸ **_onFinishStroke**(`strokeSettings`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)): *void*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_onFinishStroke](basecanvasdrawtool.md#protected-_onfinishstroke)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md) |

**Returns:** *void*

___

### `Private` _onMouseDownCanvas

▸ **_onMouseDownCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:327](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L327)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseMoveCanvas

▸ **_onMouseMoveCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:334](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L334)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseUpWindow

▸ **_onMouseUpWindow**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:341](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L341)*

**Returns:** *void*

___

### `Private` _onTouchEndWindow

▸ **_onTouchEndWindow**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:345](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L345)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchMoveCanvas

▸ **_onTouchMoveCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:349](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L349)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchStartCanvas

▸ **_onTouchStartCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:362](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _removeCursor

▸ **_removeCursor**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:267](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L267)*

**Returns:** *void*

___

### `Private` _removeEventListeners

▸ **_removeEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:274](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L274)*

Removed the bound mouse and touch events

**Returns:** *void*

___

### `Private` _startStroke

▸ **_startStroke**(`startingPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:305](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L305)*

Captures the starting position and begins the entire stroke interaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startingPosition` | [PointerPosition](../interfaces/pointerposition.md) |   |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L49)*

**Returns:** *void*

___

###  drawStrokes

▸ **drawStrokes**(`strokes`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)[]): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`strokes` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)[] |

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts:109](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/pencil-canvas-draw-tool.ts#L109)*

**Returns:** *void*
