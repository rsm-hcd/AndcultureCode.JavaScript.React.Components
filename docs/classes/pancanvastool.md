[andculturecode-javascript-react-components](../README.md) › [PanCanvasTool](pancanvastool.md)

# Class: PanCanvasTool

## Hierarchy

* **PanCanvasTool**

## Index

### Constructors

* [constructor](pancanvastool.md#constructor)

### Properties

* [_config](pancanvastool.md#private-_config)
* [_isPointerActive](pancanvastool.md#private-_ispointeractive)
* [_lastPosition](pancanvastool.md#private-_lastposition)
* [toolType](pancanvastool.md#tooltype)

### Methods

* [_addCursor](pancanvastool.md#private-_addcursor)
* [_addEventListeners](pancanvastool.md#private-_addeventlisteners)
* [_finishPan](pancanvastool.md#private-_finishpan)
* [_onMouseDownCanvas](pancanvastool.md#private-_onmousedowncanvas)
* [_onMouseMoveCanvas](pancanvastool.md#private-_onmousemovecanvas)
* [_onMouseUpWindow](pancanvastool.md#private-_onmouseupwindow)
* [_onTouchEndWindow](pancanvastool.md#private-_ontouchendwindow)
* [_onTouchMoveCanvas](pancanvastool.md#private-_ontouchmovecanvas)
* [_onTouchStartCanvas](pancanvastool.md#private-_ontouchstartcanvas)
* [_pan](pancanvastool.md#private-_pan)
* [_removeCursor](pancanvastool.md#private-_removecursor)
* [_removeEventListeners](pancanvastool.md#private-_removeeventlisteners)
* [_startPan](pancanvastool.md#private-_startpan)
* [dispose](pancanvastool.md#dispose)
* [initialize](pancanvastool.md#initialize)

## Constructors

###  constructor

\+ **new PanCanvasTool**(`panConfig`: [PanConfig](../interfaces/panconfig.md)): *[PanCanvasTool](pancanvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`panConfig` | [PanConfig](../interfaces/panconfig.md) |

**Returns:** *[PanCanvasTool](pancanvastool.md)*

## Properties

### `Private` _config

• **_config**: *[PanConfig](../interfaces/panconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L21)*

___

### `Private` _isPointerActive

• **_isPointerActive**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L22)*

___

### `Private` _lastPosition

• **_lastPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L23)*

___

###  toolType

• **toolType**: *[CanvasToolType](../enums/canvastooltype.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L19)*

## Methods

### `Private` _addCursor

▸ **_addCursor**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L54)*

**Returns:** *void*

___

### `Private` _addEventListeners

▸ **_addEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L61)*

Binds the necessary mouse and touch events

**Returns:** *void*

___

### `Private` _finishPan

▸ **_finishPan**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L90)*

Completes the panning interaction

**Returns:** *void*

___

### `Private` _onMouseDownCanvas

▸ **_onMouseDownCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:161](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseMoveCanvas

▸ **_onMouseMoveCanvas**(`e`: MouseEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:168](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | MouseEvent |

**Returns:** *void*

___

### `Private` _onMouseUpWindow

▸ **_onMouseUpWindow**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:175](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L175)*

**Returns:** *void*

___

### `Private` _onTouchEndWindow

▸ **_onTouchEndWindow**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:179](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchMoveCanvas

▸ **_onTouchMoveCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:183](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _onTouchStartCanvas

▸ **_onTouchStartCanvas**(`e`: TouchEvent): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:196](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | TouchEvent |

**Returns:** *void*

___

### `Private` _pan

▸ **_pan**(`newCurrentPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L101)*

Tracks the point of interaction and moves to it

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`newCurrentPosition` | [PointerPosition](../interfaces/pointerposition.md) |   |

**Returns:** *void*

___

### `Private` _removeCursor

▸ **_removeCursor**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:111](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L111)*

**Returns:** *void*

___

### `Private` _removeEventListeners

▸ **_removeEventListeners**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:118](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L118)*

Removed the bound mouse and touch events

**Returns:** *void*

___

### `Private` _startPan

▸ **_startPan**(`startingPosition`: [PointerPosition](../interfaces/pointerposition.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:149](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L149)*

Captures the starting position and begins the entire interaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startingPosition` | [PointerPosition](../interfaces/pointerposition.md) |   |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L38)*

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/3b573d9/src/atoms/forms/canvas-sketch/tools/pan-canvas-tool.ts#L43)*

**Returns:** *void*
