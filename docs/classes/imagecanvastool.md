[andculturecode-javascript-react-components](../README.md) › [ImageCanvasTool](imagecanvastool.md)

# Class: ImageCanvasTool

## Hierarchy

* **ImageCanvasTool**

## Index

### Constructors

* [constructor](imagecanvastool.md#constructor)

### Properties

* [_config](imagecanvastool.md#private-_config)
* [_shouldCenterInDestRectangle](imagecanvastool.md#private-_shouldcenterindestrectangle)
* [_shouldFitInCanvas](imagecanvastool.md#private-_shouldfitincanvas)
* [_shouldScaleToFitDestRectangle](imagecanvastool.md#private-_shouldscaletofitdestrectangle)
* [toolType](imagecanvastool.md#tooltype)

### Methods

* [_drawImage](imagecanvastool.md#private-_drawimage)
* [dispose](imagecanvastool.md#dispose)
* [drawImage](imagecanvastool.md#drawimage)
* [drawImages](imagecanvastool.md#drawimages)
* [initialize](imagecanvastool.md#initialize)
* [setShouldCenterInDestRectangle](imagecanvastool.md#setshouldcenterindestrectangle)
* [setShouldFitInCanvas](imagecanvastool.md#setshouldfitincanvas)
* [setShouldScaleToFitDestRectangle](imagecanvastool.md#setshouldscaletofitdestrectangle)

## Constructors

###  constructor

\+ **new ImageCanvasTool**(`config`: [ImageConfig](../interfaces/imageconfig.md)): *[ImageCanvasTool](imagecanvastool.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ImageConfig](../interfaces/imageconfig.md) |

**Returns:** *[ImageCanvasTool](imagecanvastool.md)*

## Properties

### `Private` _config

• **_config**: *[ImageConfig](../interfaces/imageconfig.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L26)*

___

### `Private` _shouldCenterInDestRectangle

• **_shouldCenterInDestRectangle**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L27)*

___

### `Private` _shouldFitInCanvas

• **_shouldFitInCanvas**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L28)*

___

### `Private` _shouldScaleToFitDestRectangle

• **_shouldScaleToFitDestRectangle**: *boolean*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L29)*

___

###  toolType

• **toolType**: *[CanvasToolType](../enums/canvastooltype.md)*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L24)*

## Methods

### `Private` _drawImage

▸ **_drawImage**(`destRecEndX?`: undefined | number, `destRecEndY?`: undefined | number, `destRecStartX?`: undefined | number, `destRecStartY?`: undefined | number, `url?`: undefined | string): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:99](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L99)*

Draws the image url to the canvas

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`destRecEndX?` | undefined &#124; number | - |
`destRecEndY?` | undefined &#124; number |   |
`destRecStartX?` | undefined &#124; number | - |
`destRecStartY?` | undefined &#124; number | - |
`url?` | undefined &#124; string | - |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L46)*

**Returns:** *void*

___

###  drawImage

▸ **drawImage**(`image`: [ImageSettings](../interfaces/imagesettings.md)): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`image` | [ImageSettings](../interfaces/imagesettings.md) |

**Returns:** *void*

___

###  drawImages

▸ **drawImages**(`images`: [ImageSettings](../interfaces/imagesettings.md)[]): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`images` | [ImageSettings](../interfaces/imagesettings.md)[] |

**Returns:** *void*

___

###  initialize

▸ **initialize**(): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L66)*

**Returns:** *void*

___

###  setShouldCenterInDestRectangle

▸ **setShouldCenterInDestRectangle**(`shouldCenterInDestRectangle`: boolean): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`shouldCenterInDestRectangle` | boolean |

**Returns:** *void*

___

###  setShouldFitInCanvas

▸ **setShouldFitInCanvas**(`shouldFitInCanvas`: boolean): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`shouldFitInCanvas` | boolean |

**Returns:** *void*

___

###  setShouldScaleToFitDestRectangle

▸ **setShouldScaleToFitDestRectangle**(`shouldScaleToFitDestRectangle`: boolean): *void*

*Defined in [src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/atoms/forms/canvas-sketch/tools/image-canvas-tool.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`shouldScaleToFitDestRectangle` | boolean |

**Returns:** *void*
