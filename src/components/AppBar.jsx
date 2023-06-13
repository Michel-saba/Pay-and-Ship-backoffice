import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import dpdLogo from '../images/dpd_logo.png';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#dc0032',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const appToolBarHieght = 100;
export default function AppBarMenu({ open, handleDrawerOpen }) {
  return (
    <AppBar
      position='fixed'
      color='primary'
      enableColorOnDark
      style={{
        height: appToolBarHieght,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Toolbar>
        <Typography variant='h6'>{'Product Manager'}</Typography>
      </Toolbar>
      <Box
        id='box'
        sx={{ display: { xs: 'none', md: 'flex' }, paddingInline: '20px' }}
      >
        <IconButton
          size='large'
          edge='end'
          aria-label='account of current user'
          aria-haspopup='true'
          color='inherit'
          // onClick={handleToggle}
          sx={{ mr: 4 }}
        >
          <AccountCircleIcon fontSize={'large'} />
        </IconButton>
      </Box>
    </AppBar>
  );
}
