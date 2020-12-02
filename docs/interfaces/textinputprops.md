[andculturecode-javascript-react-components](../README.md) › [TextInputProps](textinputprops.md)

# Interface: TextInputProps

## Hierarchy

* [InputProperties](inputproperties.md)

  ↳ **TextInputProps**

  ↳ [TextInputIconProps](textinputiconprops.md)

## Index

### Properties

* [ariaLabelledBy](textinputprops.md#optional-arialabelledby)
* [disabled](textinputprops.md#optional-disabled)
* [id](textinputprops.md#id)
* [isValid](textinputprops.md#optional-isvalid)
* [maxLength](textinputprops.md#optional-maxlength)
* [name](textinputprops.md#optional-name)
* [onChange](textinputprops.md#onchange)
* [placeholder](textinputprops.md#optional-placeholder)
* [testId](textinputprops.md#optional-testid)
* [type](textinputprops.md#optional-type)
* [value](textinputprops.md#optional-value)

## Properties

### `Optional` ariaLabelledBy

• **ariaLabelledBy**? : *undefined | string*

*Inherited from [InputProperties](inputproperties.md).[ariaLabelledBy](inputproperties.md#optional-arialabelledby)*

*Defined in [src/atoms/interfaces/input-properties.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L4)*

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [InputProperties](inputproperties.md).[disabled](inputproperties.md#optional-disabled)*

*Defined in [src/atoms/interfaces/input-properties.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L5)*

___

###  id

• **id**: *string*

*Defined in [src/atoms/forms/text-input.tsx:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/forms/text-input.tsx#L10)*

___

### `Optional` isValid

• **isValid**? : *undefined | false | true*

*Inherited from [InputProperties](inputproperties.md).[isValid](inputproperties.md#optional-isvalid)*

*Defined in [src/atoms/interfaces/input-properties.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L6)*

___

### `Optional` maxLength

• **maxLength**? : *undefined | number*

*Defined in [src/atoms/forms/text-input.tsx:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/forms/text-input.tsx#L11)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [src/atoms/forms/text-input.tsx:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/forms/text-input.tsx#L12)*

___

###  onChange

• **onChange**: *function*

*Inherited from [InputProperties](inputproperties.md).[onChange](inputproperties.md#onchange)*

*Defined in [src/atoms/interfaces/input-properties.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L7)*

#### Type declaration:

▸ (`e`: ChangeEvent‹HTMLInputElement›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | ChangeEvent‹HTMLInputElement› |

___

### `Optional` placeholder

• **placeholder**? : *undefined | string*

*Inherited from [InputProperties](inputproperties.md).[placeholder](inputproperties.md#optional-placeholder)*

*Defined in [src/atoms/interfaces/input-properties.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L8)*

___

### `Optional` testId

• **testId**? : *undefined | string*

*Defined in [src/atoms/forms/text-input.tsx:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/forms/text-input.tsx#L17)*

Unique identifier used select the underlying <input> for functional/e2e testing

___

### `Optional` type

• **type**? : *[InputTypes](../enums/inputtypes.md)*

*Inherited from [InputProperties](inputproperties.md).[type](inputproperties.md#optional-type)*

*Defined in [src/atoms/interfaces/input-properties.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L9)*

___

### `Optional` value

• **value**? : *undefined | string*

*Inherited from [InputProperties](inputproperties.md).[value](inputproperties.md#optional-value)*

*Defined in [src/atoms/interfaces/input-properties.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/atoms/interfaces/input-properties.ts#L10)*
