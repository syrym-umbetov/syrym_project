import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CardProps } from '../../types';
import '../Card/Card.css';
import Loader from '../Loader/Loader';

const CategoryItem: FC<CardProps> = ({ item }) => {
  const ImageWrapper = styled('div')`
    width: 100%;
    img {
      width: 100%;
    }
  `;

  const Count = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    .count__child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
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
  } = useShoppingCart();
  const quantity = getItemQuantity(+item.pk);
  return (
    <div className='card'>
      <ImageWrapper
        className='card__image'
        onMouseEnter={handleImage}
        onMouseLeave={handleImageLeave}
      >
        {item.articles ? (
          <img
            src={
              image
                ? item.articles[0].images[0].url
                : item.articles[0].logoPicture[0].url
            }
            alt={item.name}
          />
        ) : (
          <Loader />
        )}
      </ImageWrapper>

      <div className='card__title' style={{ marginTop: 'auto' }}>
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
          onClick={() => increaseCartQuantity(+item.pk)}
        >
          <div className='btn btn-six'>
            <span>Add to Cart</span>
          </div>
        </div>
      ) : (
        <Count>
          <div className='count__child'>
            <Button
              sx={{ color: '#565554' }}
              onClick={() => decreaseCartQuantity(+item.pk)}
            >
              -
            </Button>
            <div>
              <span style={{ fontSize: '16px' }}>{quantity}</span>
            </div>
            <Button
              sx={{ color: '#565554' }}
              onClick={() => increaseCartQuantity(+item.pk)}
            >
              +
            </Button>
          </div>
          <Button
            sx={{ backgroundColor: '#565554' }}
            variant='contained'
            onClick={() => removeFromCart(+item.pk)}
          >
            Remove
          </Button>
        </Count>
      )}
    </div>
  );
};

export default CategoryItem;
