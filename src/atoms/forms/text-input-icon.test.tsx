import React from "react";
import { TextInputIcon } from "./text-input-icon";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";
import uuid from "uuid";
import { Icons } from "../constants/icons";

describe("TextInputIcon", () => {
    test("when default props, renders icon with input", () => {
        // Arrange
        const dataTestId = "dataTestId";
        const icon = Icons.Checkmark;

        // Act
        const { getByTestId } = render(
            <TextInputIcon
                icon={icon}
                id={uuid()}
                onChange={() => {}}
                testId={dataTestId}
            />
        );

        // Assert
        expect(getByTestId(dataTestId)).not.toBeNil();
    });
});
