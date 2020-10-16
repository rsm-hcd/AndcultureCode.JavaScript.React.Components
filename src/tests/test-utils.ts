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
 * @param route
 * @returns {ReactComponent}
 */

const _renderWithRouter = (component: ReactElement, route: string = "/") => {
    window.history.pushState({}, "Test page", route);

    return render(component, { wrapper: MemoryRouter });
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const TestUtils = {
    renderWithRouter: _renderWithRouter,
};

// #endregion Exports
