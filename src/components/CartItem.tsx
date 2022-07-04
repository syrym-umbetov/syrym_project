import { useEffect, useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Loader from './Loader/Loader';
import { api } from '../api';
import { CartItemProps, Detail, DetailType } from '../types';

export function CartItem({ id, quantity }: CartItemProps) {
  const [itemData, setItemData] = useState<Detail | undefined>();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      const productsData = await api
        .get<DetailType>('products/detail', {
          params: {
            productcode: id.toString().length === 9 ? '0' + id : id,
          },
        })
        .then((res) => res.data);

      setItemData(productsData.product);
      setLoadingProducts(false);
    };
    fetchProducts();
  }, [id]);

  const { removeFromCart, totalCount, loadingProducts, setLoadingProducts } =
    useShoppingCart();
  setTimeout(() => {
    totalCount(itemData && +itemData?.whitePrice.price * +quantity);
  }, 10);

  return (
    <>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <div>
            <img
              src={
                itemData &&
                itemData.articlesList[0].galleryDetails[0].url +
                  '&call=url[file:/product/main]'
              }
              alt={itemData && itemData!.name}
              style={{ height: '121.8px', objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: 'auto',
              marginLeft: '10%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>{itemData?.name}</div>
              <div style={{ fontSize: '0.9rem' }}>
                $ {itemData?.whitePrice.price}
              </div>
              <div style={{ fontSize: '16px' }}>
                {quantity >= 1 && (
                  <span style={{ fontSize: '0.9rem' }}>
                    Quantity: {quantity}
                  </span>
                )}
              </div>

              <div>
                <b>
                  ${' '}
                  {itemData &&
                    (itemData?.whitePrice.price * quantity).toFixed(2)}
                </b>
              </div>
            </div>
            <div>
              <Button
                variant='outlined'
                onClick={() => removeFromCart(id)}
                style={{
                  width: '10rem',
                  color: 'black',
                  fontFamily: 'Open Sans Condensed',
                  borderColor: 'black',
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
