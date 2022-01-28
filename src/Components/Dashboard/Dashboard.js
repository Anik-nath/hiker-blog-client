import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Firebase/Hook/useAuth';


const drawerWidth = 250;

export default function Dashboard(props) {
    const { signout ,admin} = useAuth();
  const handleSignOut = () => {
    signout();
  };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box>
            <Toolbar/>
            <Divider />
            <List>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <ListItem button >
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                {
                    <Box>
                        <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemText primary="My Blogs" />
                            </ListItem>
                        </Link>
                        {
                            admin && 
                       <>
                       <Link to="/dashboard/manageblogs" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemText primary="Manage Blogs" />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard/makeadmin" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemText primary="Make Admin" />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard/createblog" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemText primary="Create Blog" />
                            </ListItem>
                        </Link>
                       </>
                         }
                    </Box>
                }
            </List>
            <Divider />
            <List>
                <ListItem button onClick={handleSignOut}>
                    <button className="ourButton"><Typography variant='button' sx={{color:"#fff"}}>Log out</Typography></button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, bgcolor: "#4d8150"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hiker Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />

            </Box>
        </Box>
    );
}
