import faker from "faker";
import { ToastManager } from "./toast-manager";
import { toast } from "react-toastify";

describe("ToastManager", () => {
    // -----------------------------------------------------------------------------------------
    // #region error
    // -----------------------------------------------------------------------------------------

    describe("error", () => {
        test("when toast created with toastId, returns given toastId", () => {
            // Arrange
            const expected = faker.random.number(99);
            const toastContent = faker.random.word();
            const toastOptions = { toastId: expected };

            // Act
            const toastId = ToastManager.error(toastContent, toastOptions);

            // Assert
            expect(toastId).toBe(expected);
        });

        test("when toast created without toastId, returns new toastId", () => {
            // Arrange
            const toastContent = faker.random.word();

            // Act
            const toastId = ToastManager.error(toastContent);

            // Assert
            expect(toastId).not.toBeNil();
        });
    });

    // #endregion error

    // -----------------------------------------------------------------------------------------
    // #region info
    // -----------------------------------------------------------------------------------------

    describe("info", () => {
        test("when toast created with toastId, returns given toastId", () => {
            // Arrange
            const expected = faker.random.number(99);
            const toastContent = faker.random.word();
            const toastOptions = { toastId: expected };

            // Act
            const toastId = ToastManager.info(toastContent, toastOptions);

            // Assert
            expect(toastId).toBe(expected);
        });

        test("when toast created without toastId, returns new toastId", () => {
            // Arrange
            const toastContent = faker.random.word();

            // Act
            const toastId = ToastManager.info(toastContent);

            // Assert
            expect(toastId).not.toBeNil();
        });
    });

    // #endregion info

    // -----------------------------------------------------------------------------------------
    // #region success
    // -----------------------------------------------------------------------------------------

    describe("success", () => {
        test("when toast created with toastId, returns given toastId", () => {
            // Arrange
            const expected = faker.random.number(99);
            const toastContent = faker.random.word();
            const toastOptions = { toastId: expected };

            // Act
            const toastId = ToastManager.success(toastContent, toastOptions);

            // Assert
            expect(toastId).toBe(expected);
        });

        test("when toast created without toastId, returns new toastId", () => {
            // Arrange
            const toastContent = faker.random.word();

            // Act
            const toastId = ToastManager.success(toastContent);

            // Assert
            expect(toastId).not.toBeNil();
        });
    });

    // #endregion success

    // -----------------------------------------------------------------------------------------
    // #region warn
    // -----------------------------------------------------------------------------------------

    describe("warn", () => {
        test("when toast created with toastId, returns given toastId", () => {
            // Arrange
            const expected = faker.random.number(99);
            const toastContent = faker.random.word();
            const toastOptions = { toastId: expected };

            // Act
            const toastId = ToastManager.warn(toastContent, toastOptions);

            // Assert
            expect(toastId).toBe(expected);
        });

        test("when toast created without toastId, returns new toastId", () => {
            // Arrange
            const toastContent = faker.random.word();

            // Act
            const toastId = ToastManager.warn(toastContent);

            // Assert
            expect(toastId).not.toBeNil();
        });
    });

    // #endregion warn

    // -----------------------------------------------------------------------------------------
    // #region dismiss
    // -----------------------------------------------------------------------------------------

    describe("dismiss", () => {
        test("when executed, calls dismiss", () => {
            // Arrange
            const dismissMethodSpy = jest.spyOn(toast, "dismiss");
            const testId = faker.random.number(99);

            // Act
            ToastManager.dismiss(testId);

            // Assert
            expect(dismissMethodSpy).toHaveBeenCalledWith(testId);
        });
    });

    // #endregion dismiss

    // -----------------------------------------------------------------------------------------
    // #region dismissAll
    // -----------------------------------------------------------------------------------------

    describe("dismissAll", () => {
        test("when executed, calls dismiss", () => {
            // Arrange
            const dismissMethodSpy = jest.spyOn(toast, "dismiss");

            // Act
            ToastManager.dismissAll();

            // Assert
            expect(dismissMethodSpy).toHaveBeenCalled();
        });
    });

    // #endregion dismissAll

    // -----------------------------------------------------------------------------------------
    // #region update
    // -----------------------------------------------------------------------------------------

    describe("update", () => {
        test("when executed, calls update", () => {
            // Arrange
            const newContent = faker.random.words();
            const testId = faker.random.number(99);
            const updateMethodSpy = jest.spyOn(ToastManager, "update");

            // Act
            ToastManager.update(testId, newContent);

            // Assert
            expect(updateMethodSpy).toHaveBeenCalledWith(testId, newContent);
        });
    });

    // #endregion update
});
