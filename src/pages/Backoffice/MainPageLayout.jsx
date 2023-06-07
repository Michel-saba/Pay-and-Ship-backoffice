import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MuiAppBar from '@mui/material/AppBar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddProductForm from '../../components/AddProductForm';
import ProductList from '../../components/ListProducts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PostAddIcon from '@mui/icons-material/PostAdd';

const drawerWidth = 240;
const appToolBarHieght = 100;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    marginTop: appToolBarHieght,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MainPageLayout({ theme }) {
  const [open, setOpen] = React.useState(true);
  const [isAddProduct, setIsAddProduct] = React.useState(false);
  const [isProductList, setIsProductList] = React.useState(true);
  // const [openToggle, setOpenToggle] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenAddProductForm = () => {
    setIsAddProduct(!isAddProduct);
    setIsProductList(false);
  };
  const handleOpenProductList = () => {
    setIsProductList(!isProductList);
    setIsAddProduct(false);
  };
  // const handleToggle = () => {
  //   setOpenToggle(!openToggle);
  // };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position='fixed'
        open={open}
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
          <IconButton
            onClick={handleDrawerOpen}
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            {'Account Manager'}
          </Typography>
        </Toolbar>
        {/* <Box
          id='box'
          sx={{ display: { xs: 'none', md: 'flex' }, paddingInline: '20px' }}
        >
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            color='inherit'
            onClick={handleToggle}
            sx={{ mr: 4 }}
          >
            <AccountCircle fontSize={'large'} />
          </IconButton>
        </Box> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenProductList}>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary={'List products'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenAddProductForm}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary={'Add New Product'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        {isAddProduct && <AddProductForm />}
        {isProductList && <ProductList />}
      </Main>
    </Box>
  );
}
