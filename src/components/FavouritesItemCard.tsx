import React, { FC, useEffect, useState } from 'react';
import { Detail } from '../types';
import { detailOptions, fetchData } from '../utils/fetchData';
import Loader from './Loader/Loader';

export type FavouritesItemCardProps = {
  id: number;
};
const FavouritesItemCard: FC<FavouritesItemCardProps> = ({ id }) => {
  const [productDetail, setProductDetail] = useState<Detail>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClothesData = async () => {
      const productsUrl = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';
      setLoading(true);
      const productsData = await fetchData(
        `${productsUrl}/products/detail/?productcode=${
          id.toString().length === 9 ? '0' + id : id
        }`,
        detailOptions
      );
      console.log(productsData);
      setProductDetail(productsData.product);
      setLoading(false);
    };
    fetchClothesData();
  }, [id]);
  console.log(productDetail);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {productDetail?.name}
          <div>{productDetail?.code}</div>
        </div>
      )}
    </>
  );
};

export default FavouritesItemCard;
