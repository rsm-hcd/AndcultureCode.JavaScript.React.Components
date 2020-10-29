import React from "react";
import faker from "faker";
import { InputCharacterCount } from "./input-character-count";
import { render } from "@testing-library/react";

describe("InputCharacterCount", () => {
    test("when default props, renders character count", () => {
        // Arrange
        const maxCharCount = faker.random.number(100);
        const charCount = faker.random.number(maxCharCount);
        const dataTestId = "dataTestId";

        // Act
        const { getByTestId } = render(
            <InputCharacterCount
                currentLength={charCount}
                maxLength={maxCharCount}
                testId={dataTestId}
            />
        );

        // Assert
        expect(getByTestId(dataTestId)).not.toBeNil();
    });

    test("when maxLength and currentLength props set, renders with values", () => {
        // Arrange
        const maxCharCount = faker.random.number(100);
        const charCount = faker.random.number(maxCharCount);
        const dataTestId = "dataTestId";

        // Act
        const { getByTestId } = render(
            <InputCharacterCount
                currentLength={charCount}
                maxLength={maxCharCount}
                testId={dataTestId}
            />
        );

        // Assert
        expect(getByTestId(dataTestId).textContent).toContain(maxCharCount);
        expect(getByTestId(dataTestId).textContent).toContain(charCount);
    });
});
