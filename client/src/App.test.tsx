import React from "react";
import { render } from "./test-utils";
import App from "./App";

test("renders learn react link", () => {
    /* const { getByText } = render(
        <Provider store={{} as any}>
            <App />
        </Provider>,
    ); */
    const { getByText } = render(
        <App />
    );
    const linkElement = getByText(/send/i);
    expect(linkElement).toBeInTheDocument();
});
