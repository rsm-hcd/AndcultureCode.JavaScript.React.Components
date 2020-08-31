[andculturecode-javascript-react-components](../README.md) › [BaseCanvasDrawTool](basecanvasdrawtool.md)

# Class: BaseCanvasDrawTool

## Hierarchy

* **BaseCanvasDrawTool**

  ↳ [LineCanvasDrawTool](linecanvasdrawtool.md)

  ↳ [PencilCanvasDrawTool](pencilcanvasdrawtool.md)

## Index

### Constructors

* [constructor](basecanvasdrawtool.md#constructor)

### Properties

* [_canvas](basecanvasdrawtool.md#protected-_canvas)
* [_color](basecanvasdrawtool.md#protected-_color)
* [_config](basecanvasdrawtool.md#protected-_config)
* [_context](basecanvasdrawtool.md#protected-_context)
* [_currentPosition](basecanvasdrawtool.md#protected-_currentposition)
* [_isPointerActive](basecanvasdrawtool.md#protected-_ispointeractive)
* [_previousPosition](basecanvasdrawtool.md#protected-_previousposition)
* [_uiSettings](basecanvasdrawtool.md#protected-_uisettings)
* [_width](basecanvasdrawtool.md#protected-_width)

### Methods

* [_onFinishStroke](basecanvasdrawtool.md#protected-_onfinishstroke)

## Constructors

###  constructor

\+ **new BaseCanvasDrawTool**(`config`: [DrawToolConfig](../interfaces/drawtoolconfig.md)): *[BaseCanvasDrawTool](basecanvasdrawtool.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DrawToolConfig](../interfaces/drawtoolconfig.md) |

**Returns:** *[BaseCanvasDrawTool](basecanvasdrawtool.md)*

## Properties

### `Protected` _canvas

• **_canvas**: *HTMLCanvasElement*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L35)*

___

### `Protected` _color

• **_color**: *string*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L36)*

___

### `Protected` _config

• **_config**: *[DrawToolConfig](../interfaces/drawtoolconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L37)*

___

### `Protected` _context

• **_context**: *CanvasRenderingContext2D*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L38)*

___

### `Protected` _currentPosition

• **_currentPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L39)*

___

### `Protected` _isPointerActive

• **_isPointerActive**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L40)*

___

### `Protected` _previousPosition

• **_previousPosition**: *[PointerPosition](../interfaces/pointerposition.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L41)*

___

### `Protected` _uiSettings

• **_uiSettings**: *[DrawToolUiSettings](../interfaces/drawtooluisettings.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L42)*

___

### `Protected` _width

• **_width**: *number*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L43)*

## Methods

### `Protected` _onFinishStroke

▸ **_onFinishStroke**(`strokeSettings`: [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/09a736c/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](../interfaces/canvasdrawtoolsettings.md) |

**Returns:** *void*
