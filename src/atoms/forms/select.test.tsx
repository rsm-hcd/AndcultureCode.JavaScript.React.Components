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
                options={[{ label: testLabel, value: testValue }]}
                onChange={() => {}}
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
                options={[{ label: testLabel, value: testValue }]}
                onChange={handleChange}
            />
        );

        fireEvent.change(getByDisplayValue(testLabel), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when given cssClassName prop, renders with class name", () => {
        // Arrange
        const expected = faker.random.word();
        const testLabel = faker.random.word();
        const testValue = faker.random.word();
        const testClassName = "testClassName";

        // Act
        const { container } = render(
            <Select
                id={expected}
                options={[{ label: testLabel, value: testValue }]}
                onChange={() => {}}
                cssClassName={testClassName}
            />
        );
        const result = container.getElementsByClassName(testClassName);

        // Assert
        expect(result).not.toBeNil();
    });
});
