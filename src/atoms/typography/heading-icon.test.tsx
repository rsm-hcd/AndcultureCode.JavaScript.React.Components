import React from "react";
import faker from "faker";
import { HeadingIcon } from "./heading-icon";
import { render } from "@testing-library/react";
import { Icons } from "../constants/icons";

describe("HeadingIcon", () => {
    test("when default props, renders Heading with Icon", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <HeadingIcon type={Icons.Checkmark}>{expected}</HeadingIcon>
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });
});
