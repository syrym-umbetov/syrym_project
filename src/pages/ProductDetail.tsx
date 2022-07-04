import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, detailOptions } from '../utils/fetchData';
import Loader from './../components/Loader/Loader';
import { Detail } from '../types';
import './ProductDetail.css';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<Detail>();
  const [color, setColor] = useState<string | null>(null);
  const [backgroundSticky, setBackgroundSticky] = useState<string | null>(null);
  console.log(color);

  const [loadingCategories, setLoadingCategories] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchClothesData = async () => {
      const productsUrl = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';
      setLoadingCategories(true);
      const productsData = await fetchData(
        `${productsUrl}/products/detail/?productcode=${
          id!.length === 9 ? '0' + id : id
        }`,
        detailOptions
      );
      setProductDetail(productsData.product);
      setLoadingCategories(false);
    };
    fetchClothesData();
  }, [id]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {loadingCategories ? (
        <Loader />
      ) : (
        <div className='big-parent'>
          <div className='left-parent'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginLeft: '50px',
              }}
            >
              <div style={{ fontSize: '26px', marginLeft: '20px' }}>
                Choose your color:
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: '100%',
                  minWidth: '200px',
                  margin: 'auto',
                }}
              >
                {productDetail?.articlesList.map((color, index) => (
                  <div
                    className='colors'
                    style={{
                      backgroundColor: color.color.rgbColor,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setColor(color.color.code);
                      setBackgroundSticky(color.color.rgbColor);
                    }}
                  ></div>
                ))}
              </div>
            </div>
            {productDetail?.articlesList.map((item, index) => (
              <>
                {item.color.code === color
                  ? item.galleryDetails.map((img, i) => (
                      <img
                        key={i}
                        src={img && img?.url + '&call=url[file:/product/main]'}
                        alt='s'
                        style={{ marginLeft: '50px', marginTop: '50px' }}
                      />
                    ))
                  : ''}
              </>
            ))}
          </div>
          <div className='parent-right-parent'>
            <div
              className='right-parent'
              style={{ backgroundColor: backgroundSticky! }}
            >
              <h3>Title</h3>
              <div> {productDetail?.name}</div>
              <h3>Description</h3>
              <div>{productDetail?.description}</div>
              <div
                style={{
                  textDecoration:
                    productDetail?.redPrice?.price === undefined
                      ? 'none'
                      : 'line-through',
                }}
              >
                <h3>Price</h3>$ {productDetail?.whitePrice.price}
              </div>
              {productDetail?.redPrice?.price === undefined ? (
                ''
              ) : (
                <div style={{ color: 'red' }}>
                  $ {productDetail?.redPrice?.price}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
