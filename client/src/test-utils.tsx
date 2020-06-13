// @ts-ignore
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer as reducer } from "./store";

const initialRootState = {};

function render(
    element: React.ReactElement,
    {
        //@ts-ignore
        initialState = initialRootState,
        store = createStore(reducer, initialState),
        ...renderOptions
    } = {},
) {
      //@ts-ignore
      function Wrapper({ children }) {
          return <Provider store={store}>{children}</Provider>;
      }
      //@ts-ignore
      return rtlRender(element, { wrapper: Wrapper, ...renderOptions });
  }

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
