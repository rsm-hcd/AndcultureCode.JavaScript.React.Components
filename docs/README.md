[andculturecode-javascript-react-components](README.md)

# andculturecode-javascript-react-components

## Index

### Interfaces

* [AnchorProps](interfaces/anchorprops.md)

### Variables

* [Anchor](README.md#const-anchor)
* [FactoryType](README.md#const-factorytype)

### Functions

* [anchorDefault](README.md#const-anchordefault)

## Variables

### `Const` Anchor

• **Anchor**: *RefForwardingComponent‹Link, [AnchorProps](interfaces/anchorprops.md)›* = forwardRef(
    (props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
        let cssClassNames = [];

        if (props.cssClassName) {
            cssClassNames.push(props.cssClassName);
        }

        const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
            if (props.onClick != null) {
                props.onClick(e);
            }
        };

        let relAttribute: string | undefined = undefined;
        if (props.target != null) {
            // Using target="_blank" without rel="noopener noreferrer" is a security risk: see
            // https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
            relAttribute = "noopener noreferrer";
        }

        const commonProps = {
            "aria-label": props.ariaLabel,
            className: cssClassNames.join(" "),
            id: props.id,
            onClick: onClickHandler,
            ref: ref,
            target: props.target,
            rel: relAttribute,
            title: props.title,
            onKeyDown: props.onKeyDown,
        };

        if (props.external === true) {
            return (
                <a href={props.to} {...commonProps}>
                    {props.children}
                </a>
            );
        }

        return (
            <Link to={props.to} {...commonProps}>
                {props.children}
            </Link>
        );
    }
)

*Defined in [atoms/anchors/anchor.tsx:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/07f8acd/src/atoms/anchors/anchor.tsx#L30)*

___

### `Const` FactoryType

• **FactoryType**: *object*

*Defined in [tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/07f8acd/src/tests/factories/factory-type.ts#L1)*

#### Type declaration:

## Functions

### `Const` anchorDefault

▸ **anchorDefault**(): *Element‹›*

*Defined in [atoms/anchors/anchor.stories.tsx:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React.Components/blob/07f8acd/src/atoms/anchors/anchor.stories.tsx#L14)*

**Returns:** *Element‹›*
