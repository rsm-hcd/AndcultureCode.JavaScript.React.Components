import React from "react";
import { render } from "@testing-library/react";
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
});
