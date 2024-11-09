import { Link, useNavigate } from 'react-router-dom';
import { 
    MenuItem, 
    MenuList,
    ListItemIcon, 
    ListItemText, 
    Typography, 
    Paper,
} from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import { useUserActions } from 'entities/authUsers/model';

const styles = {
    MenuList :{
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: '10vw'
    },
    linkStyle :{
        textDecoration: 'none', 
        color: 'inherit'
    },
    container: {
        height: '70vh', 
        width: '20vh', 
        marginTop: '30px', 
        borderRadius: '30px', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        padding: '10px'
    },
}

const Sidebar = () => {
    const { logoutUser } = useUserActions();
    const navigate = useNavigate();

    const logout = () => {
        logoutUser();
        navigate('/');
    }

    return (
        <Paper sx={styles.container}>
            <MenuList sx={styles.MenuList}>
                <div>
                    <Link 
                        to="/" 
                        style={styles.linkStyle}
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
                        style={styles.linkStyle}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Create</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                ⌘N
                            </Typography>
                        </MenuItem>
                    </Link>
                    
                    <Link to="/leaderboard" style={styles.linkStyle}>
                        <MenuItem>
                            <ListItemIcon>
                                <LeaderboardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Leaderboard</ListItemText>
                        </MenuItem>
                    </Link>
           
                    <Link to="/settings" style={styles.linkStyle}>
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
                            <LogoutIcon  />
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </MenuItem>
                </div>
            </MenuList>
        </Paper>
    )
}

export default Sidebar