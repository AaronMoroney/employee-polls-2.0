import * as React from 'react';

import { selectIsAuth } from 'entities/authUsers/model/selectors';

export const AuthContext = React.createContext(selectIsAuth);
