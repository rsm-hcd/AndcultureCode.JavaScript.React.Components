import faker from "faker";
import React from "react";
import { render } from "@testing-library/react";
import { ToastTemplates } from "./toast-templates";

describe("ToastTemplates", () => {
    test("when toast type is info, renders info toast", () => {
        // Arrange
        const toastContent = faker.random.word();
        const toast = ToastTemplates.info(toastContent);

        // Act
        const { getByText } = render(<React.Fragment>{toast}</React.Fragment>);

        // Assert
        expect(getByText(toastContent)).not.toBeNil();
    });

    test("when toast type is error, renders error toast", () => {
        // Arrange
        const toastContent = faker.random.word();
        const toast = ToastTemplates.error(toastContent);

        // Act
        const { getByText } = render(<React.Fragment>{toast}</React.Fragment>);

        // Assert
        expect(getByText(toastContent)).not.toBeNil();
    });

    test("when toast type is success, renders success toast", () => {
        // Arrange
        const toastContent = faker.random.word();
        const toast = ToastTemplates.success(toastContent);

        // Act
        const { getByText } = render(<React.Fragment>{toast}</React.Fragment>);

        // Assert
        expect(getByText(toastContent)).not.toBeNil();
    });

    test("when toast type is warning, renders warning toast", () => {
        // Arrange
        const toastContent = faker.random.word();
        const toast = ToastTemplates.warning(toastContent);

        // Act
        const { getByText } = render(<React.Fragment>{toast}</React.Fragment>);

        // Assert
        expect(getByText(toastContent)).not.toBeNil();
    });
});
