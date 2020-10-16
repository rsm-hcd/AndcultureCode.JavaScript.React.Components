import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Returns a React component wrapped in a MemoryRouter. Used for Components that
 * must be rendered inside a Route Component.
 *
 * @param component
 * @returns {ReactComponent}
 */

const _renderWithRouter = (ui: ReactElement, route: string = "/") => {
    window.history.pushState({}, "Test page", route);

    return render(ui, { wrapper: MemoryRouter });
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const TestUtils = {
    renderWithRouter: _renderWithRouter,
};

// #endregion Exports
