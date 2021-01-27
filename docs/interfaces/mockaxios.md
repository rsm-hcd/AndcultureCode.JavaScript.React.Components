[andculturecode-javascript-react-components](../README.md) › [MockAxios](mockaxios.md)

# Interface: MockAxios

## Hierarchy

* **MockAxios**

## Index

### Properties

* [delete](mockaxios.md#delete)
* [deleteSuccess](mockaxios.md#deletesuccess)
* [get](mockaxios.md#get)
* [getSuccess](mockaxios.md#getsuccess)
* [listSuccess](mockaxios.md#listsuccess)
* [post](mockaxios.md#post)
* [postSuccess](mockaxios.md#postsuccess)
* [put](mockaxios.md#put)
* [putSuccess](mockaxios.md#putsuccess)

## Properties

###  delete

• **delete**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L15)*

___

###  deleteSuccess

• **deleteSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L22)*

Simple way to mock a successful axios delete request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record?`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

___

###  get

• **get**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L24)*

___

###  getSuccess

• **getSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L31)*

Simple way to mock a successful axios get/find request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

___

###  listSuccess

• **listSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L38)*

Simple way to mock a successful axios get/list request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`records`: any[], `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

___

###  post

• **post**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L40)*

___

###  postSuccess

• **postSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L47)*

Simple way to mock a successful axios post request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

___

###  put

• **put**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L49)*

___

###  putSuccess

• **putSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/85bf079/src/tests/mocks/mock-axios.ts#L56)*

Simple way to mock a successful axios put request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any | any[], `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any &#124; any[] |
`delay?` | undefined &#124; number |
