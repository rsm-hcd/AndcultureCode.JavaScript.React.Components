import { SvgIcon } from "./../../dist/atoms/interfaces/svg-icon.d";
import { icon } from "./../atoms/icons/icon.stories";
import { Icons } from "../atoms/constants/icons";
import { IconUtils } from "./icon-utils";
import { getSvgIconByType } from "../atoms/constants/svg-icons";
import { IconSizes } from "../atoms/constants/icon-sizes";
import { Icon } from "../atoms/icons/icon";

describe("IconUtils", () => {
    beforeEach(() => {
        IconUtils.clearRegistry();
    });

    // -----------------------------------------------------------------------------------------
    // #region clearRegistry
    // -----------------------------------------------------------------------------------------

    describe("clearRegistry", () => {
        test("given registry has values, empties registry", () => {
            // Arrange
            IconUtils.registerSvgIcon(getSvgIconByType(Icons.ChevronDown));

            // Act
            IconUtils.clearRegistry();

            // Assert
            expect(Object.keys(IconUtils.getRegistry)).toHaveLength(0);
        });
    });

    // #endregion clearRegistry

    // -----------------------------------------------------------------------------------------
    // #region getSvg
    // -----------------------------------------------------------------------------------------

    describe("getSvg", () => {
        test("given no icons registered, returns undefined", () => {
            expect(IconUtils.getSvg(Icons.Checkmark)).toBeUndefined();
        });

        test("given no match in registry, returns undefined", () => {
            // Arrange
            IconUtils.registerSvgIcon(getSvgIconByType(Icons.ChevronDown));

            // Act & Assert
            expect(IconUtils.getSvg(Icons.Checkmark)).toBeUndefined();
        });

        test("given match in registry, when no size provided, returns base Svg", () => {
            // Arrange
            const ChevronDown = getSvgIconByType(Icons.ChevronDown);
            IconUtils.registerSvgIcon(ChevronDown);

            // Act
            const result = IconUtils.getSvg(Icons.ChevronDown);

            // Assert
            expect(result).toBe(ChevronDown.base);
        });

        test.each`
            size
            ${IconSizes.Base}
            ${IconSizes.Large}
        `(
            "given match in registry, when size of '$size' provided, returns correct Svg",
            ({ size }) => {
                // Arrange
                const ChevronDown = getSvgIconByType(Icons.ChevronDown);
                IconUtils.registerSvgIcon(ChevronDown);

                // Act
                const result = IconUtils.getSvg(Icons.ChevronDown, size);

                // Assert
                expect(result).toBe(ChevronDown[size]);
            }
        );
    });

    // #endregion getSvg

    // -----------------------------------------------------------------------------------------
    // #region getSvgIcon
    // -----------------------------------------------------------------------------------------

    describe("getSvgIcon", () => {
        test("given no icons registered, returns undefined", () => {
            expect(IconUtils.getSvgIcon(Icons.Checkmark)).toBeUndefined();
        });

        test("given no match in registry, returns undefined", () => {
            // Arrange
            IconUtils.registerSvgIcon(getSvgIconByType(Icons.ChevronDown));

            // Act & Assert
            expect(IconUtils.getSvgIcon(Icons.Checkmark)).toBeUndefined();
        });

        test("given match in registry, returns SvgIcon", () => {
            // Arrange
            const ChevronDown = getSvgIconByType(Icons.ChevronDown);
            IconUtils.registerSvgIcon(ChevronDown);

            // Act
            const result = IconUtils.getSvgIcon(Icons.ChevronDown);

            // Assert
            expect(result.type).toBe(ChevronDown.type);
        });
    });

    // #endregion getSvgIcon

    // -----------------------------------------------------------------------------------------
    // #region getRegistry
    // -----------------------------------------------------------------------------------------

    describe("getRegistry", () => {
        test("given no icons registered, returns empty object", () => {
            // Arrange & Act
            const result = IconUtils.getRegistry();

            // Assert
            expect(Object.keys(result)).toHaveLength(0);
        });

        test("given icons registered, returns new instance of registry", () => {
            // Arrange
            const ChevronDown = getSvgIconByType(Icons.ChevronDown);
            IconUtils.registerSvgIcon(ChevronDown);

            // Act
            const firstResult = IconUtils.getRegistry();
            const secondResult = IconUtils.getRegistry();

            // Assert
            expect(firstResult[ChevronDown.type]).not.toBeUndefined();
            expect(secondResult[ChevronDown.type]).not.toBeUndefined();
            expect(firstResult).not.toBe(secondResult);
        });
    });

    // #endregion getRegistry

    // -----------------------------------------------------------------------------------------
    // #region register
    // -----------------------------------------------------------------------------------------

    describe("register", () => {
        test.each`
            value
            ${undefined}
            ${null}
            ${[]}
        `(
            "when icons $value, skips registration and returns registry",
            ({ value }) => {
                // Arrange
                const ChevronDown = getSvgIconByType(Icons.ChevronDown);
                IconUtils.registerSvgIcon(ChevronDown);

                // Act
                const registry = IconUtils.register(value);

                // Assert
                expect(Object.keys(registry)).toHaveLength(1);
                expect(registry[ChevronDown.type]).not.toBeUndefined();
            }
        );

        test("given no icons registered, registers provided icons", () => {
            // Arrange
            const ChevronDown = getSvgIconByType(Icons.ChevronDown);
            const ChevronUp = getSvgIconByType(Icons.ChevronUp);

            // Act
            const registry = IconUtils.register([ChevronDown, ChevronUp]);

            // Assert
            expect(registry[ChevronDown.type]).not.toBeUndefined();
            expect(registry[ChevronUp.type]).not.toBeUndefined();
        });
    });

    // #endregion register

    // -----------------------------------------------------------------------------------------
    // #region registerSvgIcon
    // -----------------------------------------------------------------------------------------

    describe("registerSvgIcon", () => {
        test.each`
            value
            ${undefined}
            ${null}
        `(
            "when icon $value, skip registration and returns empty object",
            ({ value }) => {
                // Arrange & Act
                const result = IconUtils.registerSvgIcon(value);

                // assert
                expect(Object.keys(result)).toHaveLength(0);
            }
        );

        test.each`
            value
            ${undefined}
            ${null}
        `(
            "when icon.type $value, skip registration and returns empty object",
            ({ value }) => {
                // Arrange
                const ChevronDown = getSvgIconByType(Icons.ChevronDown);
                const iconWithoutType: SvgIcon = {
                    type: null,
                    base: ChevronDown.base,
                    large: ChevronDown.large,
                };

                // Arrange & Act
                const result = IconUtils.registerSvgIcon(iconWithoutType);

                // assert
                expect(Object.keys(result)).toHaveLength(0);
            }
        );

        test("given registry empty, when icon valid, registers icon by type", () => {
            // Arrange
            const ChevronDown = getSvgIconByType(Icons.ChevronDown);

            // Act
            const result = IconUtils.registerSvgIcon(ChevronDown);

            // Assert
            expect(result[ChevronDown.type]).not.toBeUndefined();
        });

        describe("given registry exists", () => {
            test("given no match, when icon valid, registers icon by type", () => {
                // Arrange
                const ChevronUp = getSvgIconByType(Icons.ChevronUp);
                IconUtils.register([ChevronUp]);

                const ChevronDown = getSvgIconByType(Icons.ChevronDown);

                // Act
                const result = IconUtils.registerSvgIcon(ChevronDown);

                // Assert
                expect(Object.keys(result)).toHaveLength(2);
                expect(result[ChevronDown.type]).not.toBeUndefined();
            });

            test("given match, when icon valid, when throwIfDuplicate false, overwrites match", () => {
                // Arrange
                const ChevronDown = getSvgIconByType(Icons.ChevronDown);
                const ChevronUp = getSvgIconByType(Icons.ChevronUp);
                const original: SvgIcon = {
                    type: ChevronDown.type, // <--------- matching key
                    base: ChevronUp.base,
                    large: ChevronUp.large,
                };
                IconUtils.register([original]);

                // Act
                const result = IconUtils.registerSvgIcon(ChevronDown, false);

                // Assert
                expect(Object.keys(result)).toHaveLength(1);
                expect(result[ChevronDown.type]).not.toBeUndefined();
                expect(result[ChevronDown.type].base).toBe(ChevronDown.base);
                expect(result[ChevronDown.type].large).toBe(ChevronDown.large);
            });

            test("given match, when icon valid, when throwIfDuplicate true, throws an error", () => {
                // Arrange
                const ChevronDown = getSvgIconByType(Icons.ChevronDown);
                const ChevronUp = getSvgIconByType(Icons.ChevronUp);
                const original: SvgIcon = {
                    type: ChevronDown.type, // <--------- matching key
                    base: ChevronUp.base,
                    large: ChevronUp.large,
                };
                IconUtils.register([original]);

                // Act & Assert
                expect(() =>
                    IconUtils.registerSvgIcon(ChevronDown, true)
                ).toThrow();
            });
        }); // end 'given registry exists'
    });

    // #endregion registerSvgIcon
});
