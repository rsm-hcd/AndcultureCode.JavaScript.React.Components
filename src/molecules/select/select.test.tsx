import React from "react";
import { Select } from "./select";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";

describe("Select", () => {
    test("when default props, renders with options", () => {
        // Arrange
        const expected = faker.random.word();
        const testLabel = faker.random.word();
        const testValue = faker.random.word();

        // Act
        const { getByText } = render(
            <Select
                id={expected}
                onChange={() => {}}
                options={[{ label: testLabel, value: testValue }]}
            />
        );

        // Assert
        expect(getByText(testLabel)).not.toBeNil();
    });

    test("when onChange set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const expected = faker.random.word();
        const handleChange = () => (isChecked = true);
        const testLabel = faker.random.word();
        const testValue = faker.random.word();

        // Act
        const { getByDisplayValue } = render(
            <Select
                id={expected}
                onChange={handleChange}
                options={[{ label: testLabel, value: testValue }]}
            />
        );

        fireEvent.change(getByDisplayValue(testLabel), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when cssClassName set, renders with class name", () => {
        // Arrange
        const expected = faker.random.word();
        const testLabel = faker.random.word();
        const testValue = faker.random.word();
        const testClassName = "testClassName";

        // Act
        const { container } = render(
            <Select
                cssClassName={testClassName}
                id={expected}
                onChange={() => {}}
                options={[{ label: testLabel, value: testValue }]}
            />
        );
        const result = container.getElementsByClassName(testClassName);

        // Assert
        expect(result).not.toBeNil();
    });
});
