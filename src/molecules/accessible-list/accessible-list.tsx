import * as React from "react";
import { useEffect } from "react";
import { KeyboardKeys } from "../../constants/keyboard-keys";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface AccessibleListProps {
    focusFirstItem: boolean;
    onEsc?: () => void;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

/**
 * Applies accessible keyboard functionality to a list of elements. For example, arrow key movement
 * between items.
 */
const AccessibleList: React.FunctionComponent<AccessibleListProps> = (
    props: React.PropsWithChildren<AccessibleListProps>
) => {
    const [current, setCurrent] = React.useState<number>(0);
    const refArray: HTMLElement[] = [];

    useEffect(() => {
        const element = refArray[current];
        if (element == null || !props.focusFirstItem) {
            return;
        }

        element.focus();
    }, [refArray, current, props.focusFirstItem]);

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case KeyboardKeys.UpArrow: {
                handleUpArrowPress(e);
                break;
            }
            case KeyboardKeys.DownArrow: {
                handleDownArrowPress(e);
                break;
            }
            case KeyboardKeys.Escape: {
                handleEscapePress(e);
                break;
            }
            default: {
                return;
            }
        }
    };

    const handleDownArrowPress = (e: KeyboardEvent) => {
        const isLastElementFocused = current === refArray.length - 1;
        const indexToFocus = isLastElementFocused ? 0 : current + 1;

        setCurrentAndPreventDefault(e, indexToFocus);
    };

    const handleEscapePress = (e: KeyboardEvent) => {
        setCurrentAndPreventDefault(e, 0);
        if (props.onEsc != null) {
            props.onEsc();
        }
    };

    const handleUpArrowPress = (e: KeyboardEvent) => {
        const isFirstElementFocused = current === 0;
        const indexToFocus = isFirstElementFocused
            ? refArray.length - 1
            : current - 1;

        setCurrentAndPreventDefault(e, indexToFocus);
    };

    const renderChildren = () => {
        let validElementIndex = 0;
        return React.Children.map(props.children, (child: React.ReactNode) => {
            if (!React.isValidElement(child)) {
                return child;
            }

            const renderedChild = renderChild(child, validElementIndex);
            validElementIndex++;
            return renderedChild;
        });
    };

    const renderChild = (child: React.ReactElement, index: number) => {
        return React.cloneElement(child, {
            ...child.props,
            onClick: () => {
                if (child.props.onClick != null) {
                    child.props.onClick();
                }
            },
            onKeyDown: handleKeyDown,
            ref: (el: HTMLElement) => (refArray[index] = el),
        });
    };

    const setCurrentAndPreventDefault = (
        e: KeyboardEvent,
        indexToFocus: number
    ) => {
        if (indexToFocus < 0) {
            return;
        }
        e.preventDefault();
        setCurrent(indexToFocus);
    };

    return <React.Fragment>{renderChildren()}</React.Fragment>;
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { AccessibleList };

// #endregion Exports
