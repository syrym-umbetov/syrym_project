import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import Loader from './Loader/Loader';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import Button from '@mui/material/Button';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, clearCart, countTotal, loadingProducts } =
    useShoppingCart();

  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <Main open={isOpen}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant='persistent'
        anchor='right'
        open={isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={closeCart}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Stack gap={3}>
          {cartItems.map((item) => (
            <>
              <CartItem key={item.id} {...item} />
              <div style={{ borderBottom: '1px solid black' }}></div>
            </>
          ))}
          {loadingProducts ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Loader />
            </div>
          ) : (
            <div
              style={{
                marginLeft: 'auto',
                fontWeight: 'bold',
                fontSize: '18px',
                fontFamily: 'Open Sans Condensed',
              }}
            >
              Total $ {countTotal && countTotal?.toFixed(2)}
            </div>
          )}
          <Button
            variant='outlined'
            size='large'
            sx={{
              color: 'black',
              borderColor: 'black',
              fontFamily: 'Open Sans Condensed',
              '&:focus': {
                color: 'black',
              },
            }}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
