import React, { FC, useCallback, useState } from 'react';
import './Card.css';

import styled from '@emotion/styled';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Button, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardProps } from '../../types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavourites } from '../../context/FavouritesContext';
import { ImageWrapper } from '../../utils/variables';

const Card: FC<CardProps> = ({ item }) => {
  const Count = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: 'relative';
    height: 64px;
    border: '1px solid black';
    .count__child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const [image, setImage] = useState(false);
  const handleImage = (e: any) => {
    setImage(true);
  };
  const handleImageLeave = (e: any) => {
    setImage(false);
  };

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCart();

  const { addToFavourites, favouritesItems } = useFavourites();

  const quantity = getItemQuantity(+item.articleCodes[0]);

  return (
    <div className='card'>
      <ImageWrapper
        className='card__image'
        onMouseEnter={handleImage}
        onMouseLeave={handleImageLeave}
      >
        <div style={{ position: 'relative' }}>
          <img
            style={{ position: 'absolute' }}
            src={
              image
                ? item.articles[0].images[0].url
                : item.articles[0].logoPicture[0].url
            }
            alt={item.name}
          />

          <Tooltip title='Add to favourites'>
            <FavoriteIcon
              sx={{
                position: 'absolute',
                marginLeft: '10px',
                marginTop: '10px',
                transform: 'scale(1.3)',
                cursor: 'pointer',
                opacity: '0.5',
                color: '#CC071E',

                '&:hover': { transform: 'scale(1.5)', opacity: '1' },
              }}
              onClick={() => addToFavourites(+item.articleCodes[0])}
            />
          </Tooltip>
        </div>
      </ImageWrapper>
      <div style={{ marginTop: 'auto', position: 'relative' }}>
        <div className='card__title'>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/product/${item.articles[0]?.code}`}
          >
            {item.name}
          </Link>
        </div>
        <div
          style={{ backgroundColor: item.articles[0].rgbColor }}
          className='circle'
        ></div>
        <div className='card__price'>{item.price.formattedValue}</div>

        {quantity === 0 ? (
          <div
            className='container-6'
            onClick={() => increaseCartQuantity(+item.articleCodes[0])}
          >
            <div className='btn btn-six'>
              <span>Add to Cart</span>
            </div>
          </div>
        ) : (
          <Count>
            <div className='count__child'>
              <Button
                sx={{ color: '#565554', padding: '0' }}
                onClick={() => decreaseCartQuantity(+item.articleCodes[0])}
              >
                -
              </Button>
              <div>
                <span style={{ fontSize: '16px' }}>{quantity}</span>
              </div>
              <Button
                sx={{ color: '#565554', padding: '0' }}
                onClick={() => increaseCartQuantity(+item.articleCodes[0])}
              >
                +
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  backgroundColor: '#565554',
                  fontFamily: 'Open Sans Condensed',
                  marginBottom: 'auto',
                }}
                variant='contained'
                onClick={() => removeFromCart(+item.articleCodes[0])}
              >
                Remove
              </Button>
            </div>
          </Count>
        )}
      </div>
    </div>
  );
};

export default Card;
