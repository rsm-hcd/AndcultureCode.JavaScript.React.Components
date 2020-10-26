import React from "react";
import { render } from "@testing-library/react";
import faker from "faker";
import { Paragraph } from "./paragraph";

describe("Paragraph", () => {
    test("when default props, renders paragraph with text", () => {
        // Act
        const expected = faker.random.words();

        // Arrange
        const { getByText } = render(<Paragraph>{expected}</Paragraph>);

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when given cssClassName prop, renders paragraph with given class name", () => {
        // Act
        const expected = faker.random.words();
        const testClassName = faker.random.word();

        // Arrange
        const { container } = render(
            <Paragraph cssClassName={testClassName}>{expected}</Paragraph>
        );
        const result = container.querySelector("." + testClassName);

        // Assert
        expect(result).not.toBeNil();
    });
});
