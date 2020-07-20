import React from "react";
import { render } from "@testing-library/react";
import { Image } from "./image";

describe("Image", () => {
    test("when default props, renders image", () => {
        // Arrange
        const expected = "https://via.placeholder.com/350x150";

        // Act
        const { container } = render(<Image src={expected} />);

        // Assert
        expect(container.firstChild.nodeName).toBe("IMG");
    });
});
