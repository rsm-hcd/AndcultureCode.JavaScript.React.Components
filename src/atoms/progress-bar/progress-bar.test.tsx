import React from "react";
import faker from "faker";
import {
    ProgressBar,
    ProgressBarStyles,
    ProgressBarErrorClass,
} from "./progress-bar";
import { render, getByTestId } from "@testing-library/react";

describe("ProgressBar", () => {
    test("when default props, renders progress bar", () => {
        // Arrange
        const expected = "dataTestId";

        // Act
        const { getByTestId } = render(
            <ProgressBar value={faker.random.number(100)} testId={expected} />
        );

        // Assert
        expect(getByTestId(expected)).not.toBeNil();
    });

    test("when cssClassName set, renders with class name", () => {
        // Arrange
        const testCssClassName = "testCssClassName";

        // Act
        const { container } = render(
            <ProgressBar
                value={faker.random.number(100)}
                cssClassName={testCssClassName}
            />
        );
        const result = container.getElementsByClassName(testCssClassName);

        // Assert
        expect(result).toHaveLength(1);
    });

    test.each`
        style
        ${ProgressBarStyles.Thick}
        ${ProgressBarStyles.Thin}
    `("when style prop set, renders with $style", ({ style }) => {
        // Arrange
        const expected = faker.random.number(100);

        // Act
        const { container } = render(
            <ProgressBar value={expected} style={style} />
        );
        const result = container.getElementsByClassName(style);

        // Assert
        expect(result).toHaveLength(1);
    });

    test(`when isErrored prop set, renders with ${ProgressBarErrorClass} class name`, () => {
        // Arrange
        const expected = faker.random.number(100);

        // Act
        const { container } = render(
            <ProgressBar value={expected} isErrored={true} />
        );
        const result = container.getElementsByClassName(ProgressBarErrorClass);

        // Assert
        expect(result).toHaveLength(1);
    });

    test(`when value prop set > 100, renders with value 100`, () => {
        // Arrange
        const incorrectValue = 110;
        const maximumValue = 100;
        const dataTestId = "dataTestId";

        // Act
        const { getByTestId } = render(
            <ProgressBar value={incorrectValue} testId={dataTestId} />
        );

        // Assert
        expect(getByTestId(dataTestId).innerHTML).toContain(maximumValue);
        expect(getByTestId(dataTestId).innerHTML).not.toContain(incorrectValue);
    });

    test(`when value prop set < 0, renders with value 0`, () => {
        // Arrange
        const incorrectValue = -10;
        const minimumValue = 0;
        const dataTestId = "dataTestId";

        // Act
        const { getByTestId } = render(
            <ProgressBar value={incorrectValue} testId={dataTestId} />
        );

        // Assert
        expect(getByTestId(dataTestId).innerHTML).toContain(minimumValue);
        expect(getByTestId(dataTestId).innerHTML).not.toContain(incorrectValue);
    });
});
