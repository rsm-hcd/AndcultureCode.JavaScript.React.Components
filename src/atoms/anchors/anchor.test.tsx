import React from "react";
import { act, render, wait, fireEvent } from "@testing-library/react";
import { Anchor } from "./anchor";
import faker from "faker";
import { MemoryRouter } from "react-router-dom";
import { Icons } from "../constants/icons";

describe("Anchor", () => {
    it("when default props, renders link with correct url", async () => {
        // Arrange
        const expected = `/some/random/path/${faker.random.word()}`;

        // Act
        const { container } = render(
            <MemoryRouter>
                <Anchor to={expected} />
            </MemoryRouter>
        );

        // Assert
        await wait(() => {
            expect(
                container.querySelector(`[href="${expected}"]`)
            ).not.toBeNull();
        });
    });

    it("when cssClassName provided, assigned class property", async () => {
        // Arrange
        const expected = faker.random.words();
        const url = faker.internet.url();

        // Act
        const { container } = render(
            <MemoryRouter>
                <Anchor to={url} cssClassName={expected} />
            </MemoryRouter>
        );

        // Assert
        await wait(() => {
            expect(
                container.querySelector(`[class="${expected}"]`)
            ).not.toBeNull();
        });
    });

    it("when external is 'true', renders link with correct url", async () => {
        // Arrange
        const expected = faker.internet.url();

        // Act
        const { container } = render(
            <MemoryRouter>
                <Anchor to={expected} external={true} />
            </MemoryRouter>
        );

        // Assert
        await wait(() => {
            expect(
                container.querySelector(`[href="${expected}"]`)
            ).not.toBeNull();
        });
    });

    it("when onClick set, calls handler upon click", async () => {
        // Arrange
        let calledTimes = 0;
        const handleClick = () => calledTimes++;
        const url = faker.internet.url();
        const buttonText = "test button";

        // Act
        const { getByText } = render(
            <MemoryRouter>
                <Anchor to={url} onClick={handleClick}>
                    {buttonText}
                </Anchor>
            </MemoryRouter>
        );

        fireEvent.click(getByText(buttonText));

        // Assert
        await wait(() => {
            expect(calledTimes).toEqual(1);
        });
    });

    it("when target is set, rel attribute is set to avoid security risk", async () => {
        // Arrange
        const url = faker.internet.url();

        // Act
        const { container } = render(
            <MemoryRouter>
                <Anchor to={url} target="_blank" />
            </MemoryRouter>
        );

        // Assert
        await wait(() => {
            expect(
                container.querySelector(`[rel="noopener noreferrer"]`)
            ).not.toBeNull();
        });
    });

    it("when icon prop is set, renders link with icon tag", async () => {
        // Arrange
        const expected = `/some/random/path/${faker.random.word()}`;
        const icon = Icons.Close;

        // Act
        const { container } = render(
            <MemoryRouter>
                <Anchor icon={icon} to={expected}>Link</Anchor>
            </MemoryRouter>
        );

        const result = container.getElementsByTagName("a")[0].firstChild.nodeName;

        // Assert
        await wait(() => {
            expect(result).toBe("I");
        });
    });
});
