import React from "react";
import faker from "faker";
import { Heading } from "./heading";
import { render } from "@testing-library/react";

describe("Heading", () => {
    test("when default props, renders heading", () => {
        // Assert
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Heading>{expected}</Heading>);

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when given cssClassName prop, renders with given class name", () => {
        // Act
        const randomText = faker.random.words();
        const testClassName = "testClassName";

        // Arrange
        const { container } = render(
            <Heading cssClassName={testClassName}>{randomText}</Heading>
        );
        const result = container.getElementsByClassName(testClassName);

        // Assert
        expect(result[0]).not.toBeNil();
    });
});
