import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Sidebar, WidgetBar, Navigation } from 'widgets/navigation';
import { ThemeToggle } from 'features/theme'
import BackButton  from './BackButton';

const styles = {
    layout__container: {
        display: 'flex',
        flexDirection: 'row',
    },
    layout__content__parent: {
        width: '100%',
        marginTop: '30px',
        marginLeft: '30px',
        marginRight: '30px',
    },
    layout__content__container: {
        borderLeft: '1px slategrey solid',
        borderRight: '1px slategrey solid',
        height: '70vh',
        padding: '0px 35px',
    },
};

const Layout = () => {
    return (
        <>
            <ThemeToggle/>
            <Box>
                <Navigation />
            </Box>
            <Box sx={styles.layout__container}>
                <Sidebar/>
                <Box sx={styles.layout__content__parent}>
                    <Box sx={styles.layout__content__container}>
                        <BackButton/>
                        <Outlet/>
                    </Box>
                </Box>
                <WidgetBar />
            </Box>
        </>
    )
};

export default React.memo(Layout);