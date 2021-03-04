[andculturecode-javascript-react-components](../README.md) › [InputFormFieldProps](inputformfieldprops.md)

# Interface: InputFormFieldProps

## Hierarchy

* [InputProperties](inputproperties.md)

  ↳ **InputFormFieldProps**

## Index

### Properties

* [ariaLabelledBy](inputformfieldprops.md#optional-arialabelledby)
* [disabled](inputformfieldprops.md#optional-disabled)
* [errorMessage](inputformfieldprops.md#optional-errormessage)
* [errorMessages](inputformfieldprops.md#optional-errormessages)
* [fieldId](inputformfieldprops.md#optional-fieldid)
* [inputTestId](inputformfieldprops.md#optional-inputtestid)
* [isValid](inputformfieldprops.md#optional-isvalid)
* [label](inputformfieldprops.md#label)
* [maxLength](inputformfieldprops.md#optional-maxlength)
* [name](inputformfieldprops.md#optional-name)
* [onChange](inputformfieldprops.md#onchange)
* [placeholder](inputformfieldprops.md#optional-placeholder)
* [ref](inputformfieldprops.md#optional-ref)
* [required](inputformfieldprops.md#optional-required)
* [showCharacterCount](inputformfieldprops.md#optional-showcharactercount)
* [showLabelForScreenReadersOnly](inputformfieldprops.md#optional-showlabelforscreenreadersonly)
* [type](inputformfieldprops.md#optional-type)
* [value](inputformfieldprops.md#optional-value)

## Properties

### `Optional` ariaLabelledBy

• **ariaLabelledBy**? : *undefined | string*

*Inherited from [InputProperties](inputproperties.md).[ariaLabelledBy](inputproperties.md#optional-arialabelledby)*

*Defined in [src/atoms/interfaces/input-properties.ts:4](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L4)*

___

### `Optional` disabled

• **disabled**? : *undefined | false | true*

*Inherited from [InputProperties](inputproperties.md).[disabled](inputproperties.md#optional-disabled)*

*Defined in [src/atoms/interfaces/input-properties.ts:5](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L5)*

___

### `Optional` errorMessage

• **errorMessage**? : *undefined | string*

*Defined in [src/molecules/form-fields/input-form-field.tsx:24](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L24)*

___

### `Optional` errorMessages

• **errorMessages**? : *string[]*

*Defined in [src/molecules/form-fields/input-form-field.tsx:25](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L25)*

___

### `Optional` fieldId

• **fieldId**? : *undefined | string*

*Defined in [src/molecules/form-fields/input-form-field.tsx:32](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L32)*

___

### `Optional` inputTestId

• **inputTestId**? : *undefined | string*

*Defined in [src/molecules/form-fields/input-form-field.tsx:30](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L30)*

Unique identifier used select the underlying <input> for functional/e2e testing

___

### `Optional` isValid

• **isValid**? : *undefined | false | true*

*Inherited from [InputProperties](inputproperties.md).[isValid](inputproperties.md#optional-isvalid)*

*Defined in [src/atoms/interfaces/input-properties.ts:6](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L6)*

___

###  label

• **label**: *string*

*Defined in [src/molecules/form-fields/input-form-field.tsx:33](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L33)*

___

### `Optional` maxLength

• **maxLength**? : *undefined | number*

*Defined in [src/molecules/form-fields/input-form-field.tsx:34](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L34)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [src/molecules/form-fields/input-form-field.tsx:35](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L35)*

___

###  onChange

• **onChange**: *function*

*Inherited from [InputProperties](inputproperties.md).[onChange](inputproperties.md#onchange)*

*Defined in [src/atoms/interfaces/input-properties.ts:7](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L7)*

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

*Defined in [src/atoms/interfaces/input-properties.ts:8](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L8)*

___

### `Optional` ref

• **ref**? : *RefObject‹HTMLInputElement›*

*Defined in [src/molecules/form-fields/input-form-field.tsx:36](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L36)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [src/molecules/form-fields/input-form-field.tsx:37](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L37)*

___

### `Optional` showCharacterCount

• **showCharacterCount**? : *undefined | false | true*

*Defined in [src/molecules/form-fields/input-form-field.tsx:38](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L38)*

___

### `Optional` showLabelForScreenReadersOnly

• **showLabelForScreenReadersOnly**? : *undefined | false | true*

*Defined in [src/molecules/form-fields/input-form-field.tsx:39](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/molecules/form-fields/input-form-field.tsx#L39)*

___

### `Optional` type

• **type**? : *[InputTypes](../enums/inputtypes.md)*

*Inherited from [InputProperties](inputproperties.md).[type](inputproperties.md#optional-type)*

*Defined in [src/atoms/interfaces/input-properties.ts:9](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L9)*

___

### `Optional` value

• **value**? : *undefined | string*

*Inherited from [InputProperties](inputproperties.md).[value](inputproperties.md#optional-value)*

*Defined in [src/atoms/interfaces/input-properties.ts:10](https://github.com/phess101/AndcultureCode.JavaScript.React.Components/blob/5fd6ba2/src/atoms/interfaces/input-properties.ts#L10)*
