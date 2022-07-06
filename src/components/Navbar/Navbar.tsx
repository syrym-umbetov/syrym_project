import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomizedInputBase from '../CustomizedInputBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Button, Badge, Tooltip } from '@mui/material';
import BasicModal from '../Modal';
import { ReactComponent as Logo } from '../../utils/logo.svg';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div className='navbar'>
      <div className='header'>
        <div className='logo'>
          <h2 style={{ marginLeft: '50%' }}>
            <Logo />
          </h2>
        </div>
        <div className='header__icons'>
          <div className='header__icons-search'>
            <CustomizedInputBase />
          </div>
          <div className='header__icons-icons'>
            <Button
              onClick={openCart}
              style={{ width: '3rem', height: '3rem', position: 'relative' }}
            >
              <Badge badgeContent={cartQuantity} color='secondary'>
                <Tooltip title='Basket'>
                  <ShoppingCartIcon style={{ color: '#565554' }} />
                </Tooltip>
              </Badge>
            </Button>
            <Button>
              <Link
                to='/favourites'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Tooltip title='Favourites'>
                  <FavoriteIcon />
                </Tooltip>
              </Link>
            </Button>
            <Button onClick={handleOpen}>
              <Tooltip title='Profile'>
                <PersonIcon />
              </Tooltip>
            </Button>
            <BasicModal openModal={openModal} handleClose={handleClose} />
          </div>
        </div>
      </div>
      <div className='header__list-parent'>
        <hr />
        <ul className='header__list'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/store'>STORE</Link>
          </li>
          <li>ACCESSORIES</li>
          <li>BRAND</li>
          <li>PAGES</li>
          <li>ABOUT US</li>
          <li>NEWS</li>
          <li>CONTACT US</li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
