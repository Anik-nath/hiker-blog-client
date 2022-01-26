import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navList = (
    <>
      <NavLink to="/home" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="button">home</Typography>
        </MenuItem>
      </NavLink>
      <NavLink
        to="/blogs"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="button">blogs</Typography>
        </MenuItem>
      </NavLink>
      <NavLink
        to="/destination"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="button">destination</Typography>
        </MenuItem>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="button">About</Typography>
        </MenuItem>
      </NavLink>
      <NavLink
        to="/contact"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="button">Contact us</Typography>
        </MenuItem>
      </NavLink>
    </>
  );
  const [shownavbar,setNavbar] = React.useState(false);

  const changeBackground = () =>{
      if(window.scrollY >= 40){
          setNavbar(true)
      }
      else{
          setNavbar(false);
      }
  }
  window.addEventListener('scroll',changeBackground);

  return (
    <>
      <AppBar className={shownavbar && "navActive"}
        sx={{backgroundColor: "transparent", boxShadow: "none" }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "600",
              }}
            >
              Hiker
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {navList}
                </Box>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Hiker
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navList}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/dashboard"
                >
                  <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                >
                  <MenuItem onClick={handleCloseUserMenu}>Login</MenuItem>
                </NavLink>

                {/* <Typography sx={{ color: "inherit" }}>
                  <MenuItem onClick={handleCloseUserMenu}>LogIn</MenuItem>
                </Typography> */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
