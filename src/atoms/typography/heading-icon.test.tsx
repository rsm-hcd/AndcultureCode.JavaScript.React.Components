import React from "react";
import faker from "faker";
import { HeadingIcon } from "./heading-icon";
import { render } from "@testing-library/react";
import { Icons } from "../constants/icons";
import { IconUtils } from "../../utilities/icon-utils";
import { SvgIcon } from "../interfaces/svg-icon";
import { getSvgIconByType } from "../constants/svg-icons";
import { Icon } from "../icons/icon";

describe("HeadingIcon", () => {
    let registeredIcon: SvgIcon;

    beforeEach(() => {
        IconUtils.clearRegistry();
        registeredIcon = getSvgIconByType(Icons.ChevronUp);
        IconUtils.registerSvgIcon(registeredIcon);
    });

    test("when default props, renders Heading with icon", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { getByText } = render(
            <HeadingIcon type={registeredIcon.type}>{expected}</HeadingIcon>
        );

        // Assert
        expect(getByText(expected)).not.toBeNil();
    });

    test("when type prop set and icon exists, renders Heading with set icon", () => {
        // Arrange
        const testHeading = faker.random.words();

        // Act
        const { container } = render(
            <HeadingIcon type={registeredIcon.type}>{testHeading}</HeadingIcon>
        );
        const svgIcon = container.getElementsByTagName("svg");

        // Assert
        expect(svgIcon).toHaveLength(1);
    });

    test("when type prop set and icon does not exist, renders Heading with bare icon <i>", () => {
        // Arrange
        const expected = faker.random.words();

        // Act
        const { container } = render(
            <HeadingIcon type={Icons.Lightbulb}>{expected}</HeadingIcon>
        );
        const svgIcon = container.getElementsByTagName("svg");
        const bareIcon = container.getElementsByTagName("i");

        // Assert
        expect(svgIcon).toHaveLength(0);
        expect(bareIcon).toHaveLength(1);
    });
});
