import faker from "faker";
import { ToastManager } from "./toast-manager";

describe("ToastManager", () => {
    test("when error toast created, returns toastId", () => {
        // Arrange & Act
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };
        const toastId = ToastManager.error(toastContent, toastOptions);

        // Act
        expect(toastId).toBe(testToastId);
    });

    test("when info toast created, returns toastId", () => {
        // Arrange & Act
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };
        const toastId = ToastManager.info(toastContent, toastOptions);

        // Act
        expect(toastId).toBe(testToastId);
    });

    test("when success toast created, returns toastId", () => {
        // Arrange & Act
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };
        const toastId = ToastManager.success(toastContent, toastOptions);

        // Act
        expect(toastId).toBe(testToastId);
    });

    test("when warn toast created, returns toastId", () => {
        // Arrange & Act
        const testToastId = faker.random.number(99);
        const toastContent = faker.random.word();
        const toastOptions = { toastId: testToastId };
        const toastId = ToastManager.warn(toastContent, toastOptions);

        // Act
        expect(toastId).toBe(testToastId);
    });
});
