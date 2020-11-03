import faker from "faker";
import { ToastManager } from "./toast-manager";

describe("ToastManager", () => {
    test("when error toast created, returns toastId", () => {
        // Arrange
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };

        // Act
        const toastId = ToastManager.error(toastContent, toastOptions);

        // Assert
        expect(toastId).toBe(testToastId);
    });

    test("when info toast created, returns toastId", () => {
        // Arrange
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };

        // Act
        const toastId = ToastManager.info(toastContent, toastOptions);

        // Assert
        expect(toastId).toBe(testToastId);
    });

    test("when success toast created, returns toastId", () => {
        // Arrange
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };

        // Act
        const toastId = ToastManager.success(toastContent, toastOptions);

        // Assert
        expect(toastId).toBe(testToastId);
    });

    test("when warn toast created, returns toastId", () => {
        // Arrange
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };

        // Act
        const toastId = ToastManager.warn(toastContent, toastOptions);

        // Assert
        expect(toastId).toBe(testToastId);
    });

    test("when toast dismissed, calls dismiss method", () => {
        // Arrange
        const dismissMethodSpy = jest.spyOn(ToastManager, "dismiss");
        const testId = faker.random.number(99);

        // Act
        ToastManager.dismiss(testId);

        // Assert
        expect(dismissMethodSpy).toHaveBeenCalled();
    });

    test("when dismiss All toasts, calls dismissAll method", () => {
        // Arrange
        const dismissAllMethodSpy = jest.spyOn(ToastManager, "dismissAll");

        // Act
        ToastManager.dismissAll();

        // Assert
        expect(dismissAllMethodSpy).toHaveBeenCalled();
    });

    test("when update toast, calls update method", () => {
        // Arrange
        const newContent = faker.random.words();
        const testId = faker.random.number(99);
        const updateMethodSpy = jest.spyOn(ToastManager, "update");

        // Act
        ToastManager.update(testId, newContent);

        // Assert
        expect(updateMethodSpy).toHaveBeenCalled();
    });
});
