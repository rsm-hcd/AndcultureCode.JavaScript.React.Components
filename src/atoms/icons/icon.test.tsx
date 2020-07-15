import React from "react";
import { render, wait } from "@testing-library/react";
import { Icon } from "./icon";
import faker from "faker";
import { Icons } from "../constants/icons";
import { IconUtils } from "../../utilities/icon-utils";
import { getSvgIconByType } from "../constants/svg-icons";
import { IconSizes } from "../constants/icon-sizes";
import { SvgIcon } from "../interfaces/svg-icon";

describe("Icon", () => {
    test("given icon type not found, when default props, renders bare icon <i>", async () => {
        // Arrange & Act
        const { container } = render(<Icon type={Icons.Checkmark} />);

        // Assert
        expect(container.firstChild.nodeName).toBe("I");
    });

    describe("given icon type exists", () => {
        let registeredIcon: SvgIcon;

        beforeEach(() => {
            IconUtils.clearRegistry();
            registeredIcon = getSvgIconByType(Icons.ChevronUp);
            IconUtils.registerSvgIcon(registeredIcon);
        });

        test("when default props, renders matching base icon", async () => {
            // Arrange & Act
            const { container } = render(<Icon type={registeredIcon.type} />);

            // Assert
            expect(container.firstChild.nodeName).toBe("svg");
        });

        test.each`
            size
            ${IconSizes.Base}
            ${IconSizes.Large}
        `("when size of $size, renders icon", async ({ size }) => {
            // Arrange & Act
            const { container } = render(
                <Icon size={size} type={registeredIcon.type} />
            );

            // Assert
            expect(container.firstChild.nodeName).toBe("svg");
            expect(container.firstChild.getAttribute("class")).toContain(
                `-${size}`
            );
        });

        test("when cssClassName provided, renders with className set", async () => {
            // Arrange
            const expected = faker.random.word();

            // Act
            const { container } = render(
                <Icon cssClassName={expected} type={registeredIcon.type} />
            );

            // Assert
            expect(container.firstChild.nodeName).toBe("svg");
            expect(container.firstChild.getAttribute("class")).toContain(
                expected
            );
        });
    }); // end 'given icon type exists'
});
