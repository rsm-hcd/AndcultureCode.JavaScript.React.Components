[andculturecode-javascript-react-components](../README.md) › [TooltipProps](tooltipprops.md)

# Interface: TooltipProps

## Hierarchy

* **TooltipProps**

## Index

### Properties

* [children](tooltipprops.md#children)
* [content](tooltipprops.md#content)
* [cssClassName](tooltipprops.md#optional-cssclassname)
* [delay](tooltipprops.md#optional-delay)
* [disabled](tooltipprops.md#optional-disabled)
* [showOnCursor](tooltipprops.md#optional-showoncursor)
* [visible](tooltipprops.md#optional-visible)

## Properties

###  children

• **children**: *ReactElement*

*Defined in [src/molecules/tooltips/tooltip.tsx:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L15)*

Required. The element that triggers the tooltip on hovering.
Surround the trigger with the `<Tooltip>` component.

___

###  content

• **content**: *React.ReactChild | React.ReactChild[]*

*Defined in [src/molecules/tooltips/tooltip.tsx:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L19)*

The content of the tooltip itself.

___

### `Optional` cssClassName

• **cssClassName**? : *undefined | string*

*Defined in [src/molecules/tooltips/tooltip.tsx:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L20)*

___

### `Optional` delay

• **delay**? : *undefined | number*

*Defined in [src/molecules/tooltips/tooltip.tsx:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L24)*

Delay to wait before showing tooltip, in ms. Defaults to 500.

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Defined in [src/molecules/tooltips/tooltip.tsx:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L32)*

Disable the tooltip. For example, if you have overflowing text,
and you only want to show if the text is actually truncated with ...
you can get a ref to the HTML element and set
disabled={elRef.offsetWidth < elRef.scrollWidth}

**`see`** resource-subtext-label.tsx for an example of how to achieve this behavior

___

### `Optional` showOnCursor

• **showOnCursor**? : *undefined | false | true*

*Defined in [src/molecules/tooltips/tooltip.tsx:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L36)*

True by default. If true, the tooltip will appear at the cursor's location.

___

### `Optional` visible

• **visible**? : *undefined | false | true*

*Defined in [src/molecules/tooltips/tooltip.tsx:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/1237fb1/src/molecules/tooltips/tooltip.tsx#L41)*

Manually control tooltip visibility.
Useful for debugging styles.
