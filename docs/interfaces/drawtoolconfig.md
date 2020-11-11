[andculturecode-javascript-react-components](../README.md) › [DrawToolConfig](drawtoolconfig.md)

# Interface: DrawToolConfig

## Hierarchy

* [ToolConfig](toolconfig.md)

  ↳ **DrawToolConfig**

## Index

### Properties

* [canvas](drawtoolconfig.md#canvas)
* [context](drawtoolconfig.md#context)
* [onFinishStroke](drawtoolconfig.md#onfinishstroke)
* [redraw](drawtoolconfig.md#redraw)
* [uiSettings](drawtoolconfig.md#uisettings)

## Properties

###  canvas

• **canvas**: *HTMLCanvasElement*

*Inherited from [ToolConfig](toolconfig.md).[canvas](toolconfig.md#canvas)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts#L20)*

___

###  context

• **context**: *CanvasRenderingContext2D*

*Inherited from [ToolConfig](toolconfig.md).[context](toolconfig.md#context)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts#L21)*

___

###  onFinishStroke

• **onFinishStroke**: *function*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L28)*

#### Type declaration:

▸ (`strokeSettings`: [CanvasDrawToolSettings](canvasdrawtoolsettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`strokeSettings` | [CanvasDrawToolSettings](canvasdrawtoolsettings.md) |

___

###  redraw

• **redraw**: *function*

*Inherited from [ToolConfig](toolconfig.md).[redraw](toolconfig.md#redraw)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-tool.ts#L22)*

#### Type declaration:

▸ (): *void*

___

###  uiSettings

• **uiSettings**: *[DrawToolUiSettings](drawtooluisettings.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/059eef4/src/atoms/forms/canvas-sketch/tools/base-canvas-draw-tool.ts#L29)*
