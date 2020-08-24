import React, { ReactElement } from "react";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
    DropResult,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { CollectionUtils, StringUtils } from "andculturecode-javascript-core";
import uuid from "uuid";
import {
    ListBoxProps,
    ListBoxItem,
    ListBoxBaseClassName,
    ListBoxItemClassName,
} from "./list-box";
import { Paragraph } from "../../atoms/typography/paragraph";
import { Icons } from "../../atoms/constants/icons";
import { IconSizes } from "../../atoms/constants/icon-sizes";
import { Icon } from "../../atoms/icons/icon";
import { Button } from "../../atoms/buttons/button";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonTypes } from "../../atoms/constants/button-types";
import { ButtonStyles } from "../../atoms/constants/button-styles";

// -------------------------------------------------------------------------------------------------
// #region Constants
// -------------------------------------------------------------------------------------------------

const COMPONENT_CLASS = `${ListBoxBaseClassName} c-drag-and-drop-list-box`;

// #endregion Constants

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

export interface DragAndDropListBoxProps<T extends string | number = string>
    extends Omit<ListBoxProps<T>, "children" | "items"> {
    droppableId: string;
    items: Array<ListBoxItem<T>>;
    onReordered: (newOrderedArray: Array<ListBoxItem<T>>) => void;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

export const DragAndDropListBox = <T extends string | number = string>(
    props: DragAndDropListBoxProps<T>
): ReactElement<ListBoxProps<T>> | null => {
    const items = props.items;
    const hasItems = CollectionUtils.hasValues(items);

    // Short-circuit if no items in collection
    if (!hasItems) {
        if (props.hideWhenNoItems) {
            return null;
        }

        return (
            <div className={`${COMPONENT_CLASS} -empty`}>
                <Paragraph>No Items Added</Paragraph>
            </div>
        );
    }

    const processReordered = (
        items: Array<ListBoxItem<T>>,
        startIndex: number,
        endIndex: number
    ): Array<ListBoxItem<T>> => {
        const result = [...items];
        const [removedItem] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removedItem);

        return result;
    };

    const handleDragEnd = (result: DropResult) => {
        if (
            result?.destination == null ||
            result?.source == null ||
            result.source.index === result.destination.index
        ) {
            return;
        }

        props.onReordered(
            processReordered(
                props.items,
                result.source.index,
                result.destination!.index
            )
        );
    };

    /**
     * if we don't memoize the child rendering, then the <Draggable> state
     * sometimes does not update properly. Without memoization, if you drag
     * and drop a <Draggable> outside it's <Droppable>, then the <Draggable> will
     * still think it's being dragged, and apply the -dragging class, even though
     * it is no longer being dragged. Memoization of rendering the list fixes
     * this issue, and also increases performance.
     */
    const DraggableItemList = React.memo(function(itemProps: {
        items: Array<ListBoxItem<T>>;
    }) {
        const cssIsDragging = (snapshot: DraggableStateSnapshot) =>
            snapshot.isDragging ? "-dragging" : "";

        return (
            <React.Fragment>
                {itemProps.items.map((item: ListBoxItem<T>, index: number) => (
                    <Draggable
                        draggableId={item.id.toString()}
                        index={index}
                        key={uuid.v4()}>
                        {(
                            provided: DraggableProvided,
                            snapshot: DraggableStateSnapshot
                        ) => (
                            <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`${ListBoxItemClassName} ${cssIsDragging(
                                    snapshot
                                )}`}
                                ref={provided.innerRef}
                                style={provided.draggableProps.style}>
                                <div className="-drag-handle">
                                    <Icon
                                        size={IconSizes.Large}
                                        type={Icons.DragAndDrop}
                                    />
                                </div>
                                {// if
                                StringUtils.hasValue(item.label) && (
                                    <div
                                        className={`${ListBoxItemClassName}__label`}>
                                        {item.label}
                                    </div>
                                )}
                                <div
                                    className={`${ListBoxItemClassName}__text`}>
                                    {item.text}
                                </div>
                                {// if
                                props.onActionClick != null && (
                                    <Button
                                        cssClassName={`${ListBoxItemClassName}__action`}
                                        onClick={() =>
                                            props.onActionClick!(
                                                // @ts-ignore it's complaining that T could be a subclass of T
                                                item.id
                                            )
                                        }
                                        size={ButtonSizes.Small}
                                        style={ButtonStyles.TertiaryAlt}
                                        type={ButtonTypes.Button}>
                                        {props.actionText ?? "Action"}
                                    </Button>
                                )}
                                {item.customAction}
                            </div>
                        )}
                    </Draggable>
                ))}
            </React.Fragment>
        );
    });

    const cssIsDragging = (snapshot: DroppableStateSnapshot) =>
        snapshot.isDraggingOver ? "-dragging-container" : "";

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={props.droppableId}>
                {(
                    provided: DroppableProvided,
                    snapshot: DroppableStateSnapshot
                ) => (
                    <div
                        {...provided.droppableProps}
                        className={`${COMPONENT_CLASS} ${cssIsDragging(
                            snapshot
                        )}`}
                        ref={provided.innerRef}>
                        {// if
                        hasItems && <DraggableItemList items={items} />}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

// #endregion Component
