import { FC } from "react";
import { Provider } from "react-redux";

import { store } from "shared/store";

export const withRedux = <T extends Record<string, unknown>>(
  Component: FC<T>
) =>
  function WithRedux(props: T) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
};