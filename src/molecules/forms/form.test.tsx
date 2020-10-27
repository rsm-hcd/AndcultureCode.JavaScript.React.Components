import React from "react";
import { render, fireEvent, wait, getByText } from "@testing-library/react";
import { Form } from "./form";
import faker from "faker";

describe("Form", () => {
    test("when default props, renders children", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <Form onSubmit={() => {}}>{expected}</Form>
        );

        // Assert
        expect(getByText(expected)).not.toBeNull();
    });

    test("when onSubmit set, calls handler upon submit", async () => {
        // Arrange
        let calledTimes = 0;
        const buttonText = faker.random.word();
        const handleClick = () => {
            calledTimes++;
        };

        // Act
        const { container } = render(
            <Form onSubmit={handleClick}>
                <button>{buttonText}</button>
            </Form>
        );
        fireEvent.submit(getByText(container, buttonText));

        // Assert
        await wait(() => {
            expect(calledTimes).toEqual(1);
        });
    });

    test("when given prop cssClassName, renders with class name", () => {
        // Arrange
        const randomClassName = faker.random.word().replace(/ /, "");

        // Act
        const { container } = render(
            <Form onSubmit={() => {}} cssClassName={randomClassName} />
        );
        const result = container.querySelector("." + randomClassName);

        // Assert
        expect(result).not.toBeNil();
    });
});
