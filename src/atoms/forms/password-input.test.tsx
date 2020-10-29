import React from "react";
import faker from "faker";
import { PasswordInput } from "./password-input";
import { render, fireEvent } from "@testing-library/react";
import uuid from "uuid";
import { InputTypes } from "../constants/input-types";

describe("PasswordInput", () => {
    test("when given default props, renders input", () => {
        // Arrange
        const testDataId = "testDataId";

        // Act
        const { getByTestId } = render(
            <PasswordInput
                onChange={() => {}}
                isVisible={true}
                id={uuid()}
                testId={testDataId}
            />
        );

        // Assert
        expect(getByTestId(testDataId)).not.toBeNil();
    });

    test("when onChange prop set, calls handler upon change", () => {
        // Arrange
        let isChecked = false;
        const testDataId = "testDataId";
        const handleChange = () => (isChecked = true);

        // Act
        const { getByTestId } = render(
            <PasswordInput
                onChange={handleChange}
                isVisible={true}
                id={uuid()}
                testId={testDataId}
            />
        );
        fireEvent.change(getByTestId(testDataId), {
            target: { value: faker.random.word() },
        });

        // Assert
        expect(isChecked).toBeTrue();
    });

    test("when isVisible prop set to false, renders with type password", () => {
        // Arrange & Act
        const { container } = render(
            <PasswordInput onChange={() => {}} isVisible={false} id={uuid()} />
        );
        const htmlInputElement = container.getElementsByTagName("input");

        // Assert
        expect(htmlInputElement[0].type).toBe(InputTypes.Password);
    });
});
