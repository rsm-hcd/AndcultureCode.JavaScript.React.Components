[andculturecode-javascript-react-components](../README.md) › [ToastManager](toastmanager.md)

# Class: ToastManager

## Hierarchy

* **ToastManager**

## Index

### Methods

* [dismiss](toastmanager.md#static-dismiss)
* [dismissAll](toastmanager.md#static-dismissall)
* [error](toastmanager.md#static-error)
* [info](toastmanager.md#static-info)
* [success](toastmanager.md#static-success)
* [update](toastmanager.md#static-update)
* [warn](toastmanager.md#static-warn)

## Methods

### `Static` dismiss

▸ **dismiss**(`toastId`: ToastId): *void*

*Defined in [src/utilities/toast-manager.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L28)*

Dismiss an existing toast programatically.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toastId` | ToastId | the ID returned by the method which created the toast  |

**Returns:** *void*

___

### `Static` dismissAll

▸ **dismissAll**(): *void*

*Defined in [src/utilities/toast-manager.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L35)*

Dismiss all toasts programatically.

**Returns:** *void*

___

### `Static` error

▸ **error**(`content`: string | ToastContent, `options`: ToastOptions): *ToastId*

*Defined in [src/utilities/toast-manager.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L44)*

Show an error style toast

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`content` | string &#124; ToastContent | - | either a string or a TSX element |
`options` | ToastOptions | defaultToastOptions | optionally override default toast options  |

**Returns:** *ToastId*

___

### `Static` info

▸ **info**(`content`: string | ToastContent, `options`: ToastOptions): *ToastId*

*Defined in [src/utilities/toast-manager.ts:59](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L59)*

Show an info style toast

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`content` | string &#124; ToastContent | - | either a string or a TSX element |
`options` | ToastOptions | defaultToastOptions | optionally override default toast options  |

**Returns:** *ToastId*

___

### `Static` success

▸ **success**(`content`: string | ToastContent, `options`: ToastOptions): *ToastId*

*Defined in [src/utilities/toast-manager.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L71)*

Show a success style toast

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`content` | string &#124; ToastContent | - | either a string or a TSX element |
`options` | ToastOptions | defaultToastOptions | optionally override default toast options  |

**Returns:** *ToastId*

___

### `Static` update

▸ **update**(`toastId`: ToastId, `newContent`: string | ToastContent): *void*

*Defined in [src/utilities/toast-manager.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L87)*

Update an existing toast with new content; this could be useful for
progress indicators, network state indicators, etc.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`toastId` | ToastId | the ID of the toast to update (returned from the method that created it) |
`newContent` | string &#124; ToastContent | the new content to render into the toast  |

**Returns:** *void*

___

### `Static` warn

▸ **warn**(`content`: string | ToastContent, `options`: ToastOptions): *ToastId*

*Defined in [src/utilities/toast-manager.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/29c8649/src/utilities/toast-manager.ts#L96)*

Show a warning style toast

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`content` | string &#124; ToastContent | - | either a string or a TSX element |
`options` | ToastOptions | defaultToastOptions | optionally override default toast options  |

**Returns:** *ToastId*
