import React from "react";
import faker from "faker";
import { Heading } from "./heading";
import { render } from "@testing-library/react";
import { Icon } from "../icons/icon";
import { Icons } from "../constants/icons";

describe("Heading", () => {
    test("when default props, renders heading", () => {
        // Assert
        const expected = faker.random.words();

        // Act
        const { getByText } = render(<Heading>{expected}</Heading>);

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when cssClassName prop has value, renders with class name", () => {
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

    test("when icon prop has value, renders with icon tag", () => {
        // Act
        const randomText = faker.random.words();
        const icon = Icons.Checkmark;

        // Arrange
        const { container } = render(
            <Heading icon={icon}>{randomText}</Heading>
        );

        const result = container.getElementsByClassName("c-heading")[0].firstChild.nodeName;

        // Assert
        expect(result).toBe("I");
    });
});
