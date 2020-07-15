import React from "react";
import { render, wait } from "@testing-library/react";
import { Button } from "./button";
import faker from "faker";
import { ButtonSizes } from "../constants/button-sizes";
import { ButtonStyles } from "../constants/button-styles";

describe("Button", () => {
    it("when default props, renders button children", async () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Button>{expected}</Button>);

        // Assert
        await wait(() => {
            expect(getByText(expected)).not.toBeNull();
        });
    });

    it("when accessibleText provided, renders child accessible span", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { getByText } = render(
            <Button accessibleText={expected}></Button>
        );

        // Assert
        expect(getByText(expected)).not.toBeUndefined();
    });

    it("when cssClassName provided, adds provided className to button", () => {
        // Arrange
        const expected = faker.random.word();

        // Act
        const { container } = render(<Button cssClassName={expected}></Button>);

        // Assert
        expect(container.firstChild.className).toContain(expected);
    });

    it("when size provided, adds size className to button", () => {
        // Arrange
        const expected = ButtonSizes.Large;

        // Act
        const { container } = render(<Button size={expected}></Button>);

        // Assert
        expect(container.firstChild.className).toContain(`-${expected}`);
    });

    it(`when style of '${ButtonStyles.None}', has className of only 'none'`, () => {
        // Arrange
        const expected = ButtonStyles.None;

        // Act
        const { container } = render(<Button style={expected}></Button>);

        // Assert
        expect(container.firstChild.className).toBe(`-${expected}`);
    });

    it("when style provided, adds style className to button", () => {
        // Arrange
        const expected = ButtonStyles.Destructive;

        // Act
        const { container } = render(<Button style={expected}></Button>);

        // Assert
        expect(container.firstChild.className).toContain(`-${expected}`);
    });
});
