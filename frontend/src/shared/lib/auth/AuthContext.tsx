import * as React from 'react';

import { useIsAuthState } from 'entities/authUsers/model';

const { selectIsAuth } = useIsAuthState();
export const AuthContext = React.createContext(selectIsAuth);
