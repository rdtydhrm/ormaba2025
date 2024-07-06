import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileLogo from "./MobileLogo";
import axios from "axios";
import apiURL from "../APIURL";
import { useQuery } from "@tanstack/react-query";

const pages = [{name: 'Beranda', link: "/"}, {name: 'Pengumuman', link: "/announcements"}, {name: 'Penugasan', link: "/tasks"}];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()

  const getUserInfo = async () => {
    const response = await axios.get(`${apiURL}/api/info`)
    return response.data
  }

  const {data: user} = useQuery({
      queryKey: ["getUser"],
      queryFn: getUserInfo,
      retry: false,
  })

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

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleLogout = () => {
    axios.get(`${apiURL}/api/logout`)
    window.location.href = "/"
  }

  return (
    <AppBar position="sticky" style={{backgroundColor: ''}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' >
            <Avatar src="/logosmall.png" sx={{ display: { xs: 'none', md: 'flex' }}} />
          </Link>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <MenuIcon color="primary"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'inline', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} component={Link} to={page.link} onClick={handleCloseNavMenu}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: {xs: 'flex', md: 'none'}, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <MobileLogo/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 5 }}>
            {pages.map((page) => (
              <NavLink to={page.link} style={{textDecoration: 'none'}}>
                {({ isActive }) => (
                <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    variant={isActive ? "contained" : "text"}
                    sx={{ my: 2, display: 'block', width: '169px'}}
                >
                    {page.name}
                </Button>
                )}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: {md: '40px'}, height: {md: '40px'}}}>
                <SettingsIcon size="large" color="primary"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user !== undefined ? 
                <div>
                  <MenuItem key="profile" onClick={handleProfile}>
                    <Typography textAlign="center">Profil</Typography>
                  </MenuItem>
                  <MenuItem key="logout" onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
              : 
                <MenuItem key="login" onClick={() => navigate("/login")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;