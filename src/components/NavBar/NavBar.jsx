import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./NavBar.css";

const navItems = [];

const NavBar = () => {


return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" className='customToolBar'>
        <Toolbar >
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <Box fontFamily='Lato' fontWeight='fontWeightBold'>  DolarBlue.co  </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
);

}

export default NavBar;