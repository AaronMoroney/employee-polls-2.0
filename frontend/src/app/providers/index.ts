import { compose } from "redux";

import { withRedux } from "./with-redux";

export const withProviders = compose(withRedux);