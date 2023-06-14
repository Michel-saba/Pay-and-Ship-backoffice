import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
import dpdLogo from '../images/dpd_logo.png';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(() => ({
  backgroundColor: '#dc0032',
}));
const appToolBarHeight = 100;

export default function AppBarMenu({ onSignOutUser }) {
  // const anchorRef = React.useRef(null);
  // const [open, setOpen] = React.useState(false);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };
  // const handleClose = (event) => {
  //   setOpen(false);
  // };
  // const handleLogOutClick = () => {
  //   setOpen(false);
  //   onSignOutUser();
  // };
  return (
    <AppBar
      position='fixed'
      enableColorOnDark
      style={{
        height: appToolBarHeight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Toolbar>
        <Typography variant='h6'>{'Products management'}</Typography>
      </Toolbar>

      <Box id='box' style={{ display: 'flex' }}>
        <img src={dpdLogo} alt='dpd logo' style={{ height: '100px' }} />
        {/* {' '}
        <ButtonGroup ref={anchorRef}>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            color='inherit'
            sx={{ mr: 4 }}
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            onClick={handleToggle}
          >
            <AccountCircleIcon fontSize={'large'} />
          </IconButton>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id='split-button-menu' autoFocusItem>
                    <MenuItem
                      key={'option'}
                      onClick={() => handleLogOutClick()}
                    >
                      {'Logout'}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> */}
      </Box>
    </AppBar>
  );
}
