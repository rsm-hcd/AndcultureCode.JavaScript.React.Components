[andculturecode-javascript-react-components](../README.md) › [LineCanvasDrawTool](linecanvasdrawtool.md)

# Class: LineCanvasDrawTool

## Hierarchy

* [BaseCanvasDrawTool](basecanvasdrawtool.md)

  ↳ **LineCanvasDrawTool**

## Implements

* [CanvasDrawTool](../interfaces/canvasdrawtool.md)

## Index

### Constructors

* [constructor](linecanvasdrawtool.md#constructor)

### Properties

* [_canvas](linecanvasdrawtool.md#protected-_canvas)
* [_color](linecanvasdrawtool.md#protected-_color)
* [_config](linecanvasdrawtool.md#protected-_config)
* [_context](linecanvasdrawtool.md#protected-_context)
* [_currentPosition](linecanvasdrawtool.md#protected-_currentposition)
* [_isPointerActive](linecanvasdrawtool.md#protected-_ispointeractive)
* [_previousPosition](linecanvasdrawtool.md#protected-_previousposition)
* [_uiSettings](linecanvasdrawtool.md#protected-_uisettings)
* [_width](linecanvasdrawtool.md#protected-_width)
* [toolType](linecanvasdrawtool.md#tooltype)

### Methods

* [_addEventListeners](linecanvasdrawtool.md#private-_addeventlisteners)
* [_drawInteraction](linecanvasdrawtool.md#private-_drawinteraction)
* [_drawStroke](linecanvasdrawtool.md#private-_drawstroke)
* [_finishStroke](linecanvasdrawtool.md#private-_finishstroke)
* [_getStrokeSettings](linecanvasdrawtool.md#private-_getstrokesettings)
* [_move](linecanvasdrawtool.md#private-_move)
* [_onFinishStroke](linecanvasdrawtool.md#protected-_onfinishstroke)
* [_onMouseDownCanvas](linecanvasdrawtool.md#private-_onmousedowncanvas)
* [_onMouseMoveCanvas](linecanvasdrawtool.md#private-_onmousemovecanvas)
* [_onMouseUpWindow](linecanvasdrawtool.md#private-_onmouseupwindow)
* [_onTouchEndWindow](linecanvasdrawtool.md#private-_ontouchendwindow)
* [_onTouchMoveCanvas](linecanvasdrawtool.md#private-_ontouchmovecanvas)
* [_onTouchStartCanvas](linecanvasdrawtool.md#private-_ontouchstartcanvas)
* [_removeEventListeners](linecanvasdrawtool.md#private-_removeeventlisteners)
* [_startStroke](linecanvasdrawtool.md#private-_startstroke)
* [dispose](linecanvasdrawtool.md#dispose)
* [drawStrokes](linecanvasdrawtool.md#drawstrokes)
* [initialize](linecanvasdrawtool.md#initialize)

## Constructors

###  constructor

\+ **new LineCanvasDrawTool**(`drawToolConfig`: [DrawToolConfig](../interfaces/drawtoolconfig.md)): *[LineCanvasDrawTool](linecanvasdrawtool.md)*

*Overrides [BaseCanvasDrawTool](basecanvasdrawtool.md).[constructor](basecanvasdrawtool.md#constructor)*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`drawToolConfig` | [DrawToolConfig](../interfaces/drawtoolconfig.md) |

**Returns:** *[LineCanvasDrawTool](linecanvasdrawtool.md)*

## Properties

### `Protected` _canvas

• **_canvas**: *HTMLCanvasElement*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_canvas](basecanvasdrawtool.md#protected-_canvas)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L35)*

___

### `Protected` _color

• **_color**: *string*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_color](basecanvasdrawtool.md#protected-_color)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L36)*

___

### `Protected` _config

• **_config**: *[DrawToolConfig](../interfaces/drawtoolconfig.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_config](basecanvasdrawtool.md#protected-_config)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L37)*

___

### `Protected` _context

• **_context**: *CanvasRenderingContext2D*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_context](basecanvasdrawtool.md#protected-_context)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L38)*

___

### `Protected` _currentPosition

• **_currentPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_currentPosition](basecanvasdrawtool.md#protected-_currentposition)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L39)*

___

### `Protected` _isPointerActive

• **_isPointerActive**: *boolean*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_isPointerActive](basecanvasdrawtool.md#protected-_ispointeractive)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L40)*

___

### `Protected` _previousPosition

• **_previousPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_previousPosition](basecanvasdrawtool.md#protected-_previousposition)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L41)*

___

### `Protected` _uiSettings

• **_uiSettings**: *[DrawToolUiSettings](../interfaces/drawtooluisettings.md)*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_uiSettings](basecanvasdrawtool.md#protected-_uisettings)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L42)*

___

### `Protected` _width

• **_width**: *number*

*Inherited from [BaseCanvasDrawTool](basecanvasdrawtool.md).[_width](basecanvasdrawtool.md#protected-_width)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L43)*

___

###  toolType

• **toolType**: *[CanvasToolType](../enums/canvastooltype.md)*

*Implementation of [CanvasDrawTool](../interfaces/canvasdrawtool.md).[toolType](../interfaces/canvasdrawtool.md#tooltype)*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L27)*

## Methods

### `Private` _addEventListeners

▸ **_addEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L74)*

Binds the necessary mouse and touch events

**Returns:** *void*

___

### `Private` _drawInteraction

▸ **_drawInteraction**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L103)*

Draws the current state of the interaction

**Returns:** *void*

___

### `Private` _drawStroke

▸ **_drawStroke**(`startX`: number, `startY`: number, `endX`: number, `endY`: number, `color`: string, `width`: number): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:124](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L124)*

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

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:152](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L152)*

Finalizes the entire stroke interaction

**Returns:** *void*

___

### `Private` _getStrokeSettings

▸ **_getStrokeSettings**(): *[LineStrokeSettings](../interfaces/linestrokesettings.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:168](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L168)*

Returns the stroke settings for the entire interaction including the stroke, color, and width

**Returns:** *[LineStrokeSettings](../interfaces/linestrokesettings.md)*

___

### `Private` _move

▸ **_move**(`newCurrentPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:186](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L186)*

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

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md) |

**Returns:** *void*

___

### `Private` _onMouseDownCanvas

▸ **_onMouseDownCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:252](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L252)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseMoveCanvas

▸ **_onMouseMoveCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:259](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseUpWindow

▸ **_onMouseUpWindow**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:266](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L266)*

**Returns:** *void*

___

### `Private` _onTouchEndWindow

▸ **_onTouchEndWindow**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:270](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchMoveCanvas

▸ **_onTouchMoveCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:277](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L277)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchStartCanvas

▸ **_onTouchStartCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:290](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L290)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _removeEventListeners

▸ **_removeEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:205](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L205)*

Removed the bound mouse and touch events

**Returns:** *void*

___

### `Private` _startStroke

▸ **_startStroke**(`startingPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:236](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L236)*

Captures the starting position and begins the entire stroke interaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startingPosition` | [PointerPosition](../interfaces/pointerposition.md) |   |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L41)*

**Returns:** *void*

___

###  drawStrokes

▸ **drawStrokes**(`strokes`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)[]): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`strokes` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)[] |

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/70e5ccf/src/atoms/forms/canvas-sketch/tools/line-canvas-draw-tool.ts#L61)*

**Returns:** *void*
