import React from "react";
import faker from "faker";
import { ButtonSizes } from "../../atoms/constants/button-sizes";
import { ButtonStyles } from "../../atoms/constants/button-styles";
import { DropdownButton } from "./dropdown-button";
import { render } from "@testing-library/react";

describe("DropdownButton", () => {
    test("when default props, renders Dropdown Button", () => {
        // Arrange
        const expected = faker.random.words();
        const itemOne = { component: faker.random.word(), onSelect: () => {} };
        const itemTwo = { component: faker.random.word(), onSelect: () => {} };

        // Act
        const { getByText } = render(
            <DropdownButton
                buttonContents={expected}
                menuItems={[itemOne, itemTwo]}
            />
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when buttonClassName prop provided, renders with class name", () => {
        // Arrange
        const itemOne = { component: faker.random.word(), onSelect: () => {} };
        const itemTwo = { component: faker.random.word(), onSelect: () => {} };
        const testButtonContents = faker.random.words();
        const testButtonClassName = "testButtonClassName";

        // Act
        const { container } = render(
            <DropdownButton
                buttonClassName={testButtonClassName}
                buttonContents={testButtonContents}
                menuItems={[itemOne, itemTwo]}
            />
        );
        const result = container.getElementsByClassName(testButtonClassName);

        // Assert
        expect(result).toHaveLength(1);
    });

    test("when button size prop provided, renders with correct size class", () => {
        // Arrange
        const itemOne = { component: faker.random.word(), onSelect: () => {} };
        const itemTwo = { component: faker.random.word(), onSelect: () => {} };
        const testButtonContents = faker.random.words();
        const testButtonSize = ButtonSizes.Large;

        // Act
        const { container } = render(
            <DropdownButton
                buttonContents={testButtonContents}
                menuItems={[itemOne, itemTwo]}
                size={testButtonSize}
            />
        );
        const result = container.getElementsByClassName(testButtonSize);

        // Assert
        expect(result).toHaveLength(1);
    });

    test("when button style prop provided, renders with correct style class", () => {
        // Arrange
        const itemOne = { component: faker.random.word(), onSelect: () => {} };
        const itemTwo = { component: faker.random.word(), onSelect: () => {} };
        const testButtonContents = faker.random.words();
        const testButtonStyle = ButtonStyles.Destructive;

        // Act
        const { container } = render(
            <DropdownButton
                buttonContents={testButtonContents}
                menuItems={[itemOne, itemTwo]}
                style={testButtonStyle}
            />
        );
        const result = container.getElementsByClassName(testButtonStyle);

        // Assert
        expect(result).toHaveLength(1);
    });
});
