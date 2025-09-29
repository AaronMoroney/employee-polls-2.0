import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = React.memo(() => {
    const navigate = useNavigate();
    const location = useLocation();

    const home = location.pathname === "/home";
    const create = location.pathname === "/create";

    const handleBack = React.useCallback(() => {
        navigate(-1);
    }, [navigate]);

    if (home || create) return null;
    
    return <ArrowBackIcon onClick={handleBack} />;
});

export default BackButton;