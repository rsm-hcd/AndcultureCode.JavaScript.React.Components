import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { AnchorWithIcon } from "./anchor-with-icon";
import { Icons } from "../constants/icons";
import faker from "faker";
import { SvgIcon } from "../interfaces/svg-icon";
import { IconUtils } from "../../utilities/icon-utils";
import { getSvgIconByType } from "../constants/svg-icons";
import { ButtonStyles } from "../constants/button-styles";

describe("AnchorWithIcon", () => {
    let registeredIcon: SvgIcon;

    beforeEach(() => {
        IconUtils.clearRegistry();
        registeredIcon = getSvgIconByType(Icons.ChevronUp);
        IconUtils.registerSvgIcon(registeredIcon);
    });

    test("when default props, renders icon with children", async () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container, getByText } = render(
            <MemoryRouter>
                <AnchorWithIcon icon={registeredIcon.type} to="/test">
                    {expected}
                </AnchorWithIcon>
            </MemoryRouter>
        );

        // Assert
        expect(container.querySelector("svg")).not.toBeNull();
        expect(getByText(expected)).not.toBeNull();
    });

    it("when accessibleText provided, renders child accessible span", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <MemoryRouter>
                <AnchorWithIcon
                    accessibleText={expected}
                    icon={registeredIcon.type}
                    to="/test">
                    {faker.random.words()}
                </AnchorWithIcon>
            </MemoryRouter>
        );

        // Assert
        expect(getByText(expected)).not.toBeUndefined();
    });

    test("when style provided, renders with className set", async () => {
        // Arrange
        const expected = ButtonStyles.Anchor;

        // Act
        const { container } = render(
            <MemoryRouter>
                <AnchorWithIcon
                    icon={registeredIcon.type}
                    style={expected}
                    to="/test">
                    {faker.random.words()}
                </AnchorWithIcon>
            </MemoryRouter>
        );

        // Assert
        expect(container.firstChild.getAttribute("class")).toContain(expected);
    });
});
