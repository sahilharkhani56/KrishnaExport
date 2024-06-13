import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {createTheme} from "@mui/material/styles";
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const navItems = [['Home','/'], ['About US','/about'], ['Gallery','/gallery'], ['Products','/product'], ['Get Inquiry','/inquire'], ['Contact','/contact']];
function Navbar(props) {
    const navigateTo=useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const selectOption=(e,index)=>{
      navigateTo(index);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Krishna Export
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} onClick={(e)=>selectOption(e,item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'colomn'}}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: '#97BE5A' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
          >
            Krishna Export
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{ marginLeft: '60px' }}>
            {navItems.map((item) => (
              <Button key={item[0]}  sx={{ color: '#fff' }} onClick={(e)=>selectOption(e,item[1])}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar/>
      </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
