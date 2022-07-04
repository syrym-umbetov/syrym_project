import { Pagination, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import {
  categoriesOptions,
  fetchData,
  productsOptions,
} from '../utils/fetchData';
import '../pages/Store.css';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import changeString from '../utils/changeString';
import Loader from '../components/Loader/Loader';
import SortBy from '../components/SortingDrawer/SortBy';
import { sortByArray } from '../utils/variables';
import { Category, Data } from '../types';

const CategoryPage = () => {
  const location = useLocation();

  const filtered = changeString(location.pathname);

  const [categories, setCategories] = useState<Category[]>([]);
  const [data, setData] = useState<Data | undefined>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const currentPage = params.get('page');

  const [loadingCategories, setLoadingCategories] = useState(false);
  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const [sort, setSort] = React.useState('');
  // useEffect(() => {
  //   const fetchClothesData = async () => {
  //     const categoriesUrl =
  //       'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';

  //     const categoriesData: Category[] = await fetchData<Category[]>(
  //       `${categoriesUrl}/categories/list`,
  //       categoriesOptions
  //     );

  //     setCategories(categoriesData);
  //   };
  //   fetchClothesData();
  // }, [id, currentPage]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsUrl = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com`;
      setLoadingCategories(true);
      const productsData = await fetchData<Data>(
        `${productsUrl}/products/list?categories=${filtered}${
          currentPage ? `&currentpage=${currentPage}` : ''
        }${sort ? `&sortBy=${sort}` : ''}`,
        productsOptions
      );

      setData(productsData);
      setLoadingCategories(false);
    };
    fetchProducts();
  }, [currentPage, sort]);

  return (
    <div className='store-sidebar__parent'>
      <SortBy
        sort={sort}
        handleSort={handleSort}
        selectionProps={sortByArray}
      />
      {loadingCategories ? (
        <Loader />
      ) : (
        <div>
          <div className='store'>
            {data && data?.results.map((item) => <CategoryItem item={item} />)}
          </div>
        </div>
      )}
      <div>
        <Pagination
          className='pagination'
          count={10}
          variant='outlined'
          defaultPage={1}
          page={currentPage ? +currentPage : +''}
          onChange={(e, p) => navigate('?page=' + p)}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
