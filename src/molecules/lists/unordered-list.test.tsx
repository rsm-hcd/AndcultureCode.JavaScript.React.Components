import React from "react";
import { render } from "@testing-library/react";
import { UnorderedList, UnorderedListIconClassName } from "./unordered-list";
import faker from "faker";
import { Icons } from "../../atoms/constants/icons";

describe("UnorderedList", () => {
    test("when default props, renders items", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<UnorderedList listItems={[expected]} />);

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when cssClassName prop provided, renders with class name", () => {
        // Arrange
        const expected = faker.random.words();
        const cssClassNameTest = faker.random.word();

        // Act
        const { container } = render(
            <UnorderedList
                listItems={[expected]}
                cssClassName={cssClassNameTest}
            />
        );
        const result = container.querySelector("." + cssClassNameTest);

        // Assert
        expect(result).not.toBeNil();
    });

    test(`when default props and include icon, renders with class name ${UnorderedListIconClassName}`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <UnorderedList listItems={[expected]} listIcon={Icons.Checkmark} />
        );
        const result = container.querySelector(
            "." + UnorderedListIconClassName
        );

        // Assert
        expect(result).not.toBeNil();
    });
});
