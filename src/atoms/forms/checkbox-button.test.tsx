import React from "react";
import faker from "faker";
import { CheckboxButton, CheckboxButtonCheckedClass } from "./checkbox-button";
import { render, fireEvent, wait } from "@testing-library/react";

describe("CheckboxButton", () => {
    test("when default props, renders children", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <CheckboxButton
                label={expected}
                checked={false}
                onChange={() => {}}
            />
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", async () => {
        // Arrange
        let isChecked = false;
        const handleChange = () => {
            isChecked = true;
        };
        const label = faker.random.word();

        // Act
        const { getByLabelText } = render(
            <CheckboxButton
                onChange={handleChange}
                label={label}
                checked={isChecked}
            />
        );

        fireEvent.click(getByLabelText(label));

        // Assert
        expect(isChecked).toBeTrue();
    });

    test(`when isChecked prop is true, renders with ${CheckboxButtonCheckedClass} class name`, () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <CheckboxButton
                label={expected}
                checked={true}
                onChange={() => {}}
            />
        );
        const result = container.querySelector(
            "." + CheckboxButtonCheckedClass
        );

        // Assert
        expect(result).not.toBeNil();
    });

    test("when cssClassName provided, assigned class property", () => {
        // Arrange
        const expected = faker.random.words();
        const testClassName = "testClassName";

        // Act
        const { container } = render(
            <CheckboxButton
                label={expected}
                checked={true}
                onChange={() => {}}
                cssClassName={testClassName}
            />
        );
        const result = container.querySelector("." + testClassName);

        // Assert
        expect(result).not.toBeNil();
    });
});
