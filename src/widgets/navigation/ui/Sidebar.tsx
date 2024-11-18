import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
    MenuItem, 
    MenuList,
    ListItemIcon, 
    ListItemText,  
    Paper,
} from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import { useUserActions } from 'entities/authUsers/model';

const styles = {
    root: {
        height: '70vh', 
        width: '20vh', 
        marginTop: '30px', 
        borderRadius: '30px', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        padding: '10px',
    },
    MenuList :{
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: 'auto',
    },
    link :{
        textDecoration: 'none', 
        color: 'inherit',
    },
}

const Sidebar = () => {
    const { logoutUser } = useUserActions();

    const logout = React.useCallback(() => {
        logoutUser();
    }, [logoutUser]);

    return (
        <Paper sx={styles.root}>
            <MenuList sx={styles.MenuList}>
                <div>
                    <Link 
                        to="/home" 
                        style={styles.link}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <HomeIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                    </Link>

                    <Link 
                        to="/create" 
                        style={styles.link}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Create</ListItemText>
                        </MenuItem>
                    </Link>
                    
                    <Link to="/leaderboard" style={styles.link}>
                        <MenuItem>
                            <ListItemIcon>
                                <LeaderboardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Leaderboard</ListItemText>
                        </MenuItem>
                    </Link>
           
                    <Link to="/settings" style={styles.link}>
                        <MenuItem>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </MenuItem>
                    </Link>
                </div>

                <div>
                    <MenuItem onClick={logout}>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </div>
            </MenuList>
        </Paper>
    )
};

export default Sidebar;