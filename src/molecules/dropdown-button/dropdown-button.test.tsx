import React from "react";
import faker from "faker";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonStyles } from "../../atoms/constants/button-styles";
import { DropdownButton } from "./dropdown-button";
import { render } from "@testing-library/react";

describe("DropdownButton", () => {
    const menuItems = [
        { component: faker.random.word(), onSelect: () => {} },
        { component: faker.random.word(), onSelect: () => {} },
    ];

    test("when default props, renders Dropdown Button", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <DropdownButton buttonContents={expected} menuItems={menuItems} />
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when buttonClassName prop provided, renders with class name", () => {
        // Arrange
        const testButtonContents = faker.random.words();
        const testButtonClassName = "testButtonClassName";

        // Act
        const { container } = render(
            <DropdownButton
                buttonClassName={testButtonClassName}
                buttonContents={testButtonContents}
                menuItems={menuItems}
            />
        );
        const result = container.getElementsByClassName(testButtonClassName);

        // Assert
        expect(result).toHaveLength(1);
    });

    test("when button size prop provided, renders with correct size class", () => {
        // Arrange
        const testButtonContents = faker.random.words();
        const testButtonSize = ButtonSizes.Large;

        // Act
        const { container } = render(
            <DropdownButton
                buttonContents={testButtonContents}
                menuItems={menuItems}
                size={testButtonSize}
            />
        );
        const result = container.getElementsByClassName(`-${testButtonSize}`);

        // Assert
        expect(result).toHaveLength(1);
    });

    test("when button style prop provided, renders with correct style class", () => {
        // Arrange
        const testButtonContents = faker.random.words();
        const testButtonStyle = ButtonStyles.Destructive;

        // Act
        const { container } = render(
            <DropdownButton
                buttonContents={testButtonContents}
                menuItems={menuItems}
                style={testButtonStyle}
            />
        );
        const result = container.getElementsByClassName(`-${testButtonStyle}`);

        // Assert
        expect(result).toHaveLength(1);
    });
});
