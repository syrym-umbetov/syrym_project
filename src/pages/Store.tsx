import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import './Store.css';
import Sidebar from '../components/Sidebar/Sidebar';
import { categoriesOptions } from '../utils/fetchData';
import { fetchData } from './../utils/fetchData';
import { Pagination, SelectChangeEvent } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import SortingDrawer from './../components/SortingDrawer/SortingDrawer';
import SortBy from '../components/SortingDrawer/SortBy';
import { api } from '../api';
import { sortByArray } from '../utils/variables';
import Loader from '../components/Loader/Loader';
import { Category, Data } from '../types';

const Store = () => {
  const [data, setData] = useState<Data | undefined>();
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sort, setSort] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [sortByConcepts, setSortByConcepts] = useState<string | null>(null);
  const conceptsList = data?.facets[0]?.values;

  const [sortByFit, setSortByFit] = useState<string | null>(null);
  const fitsList = data?.facets[5]?.values;

  const [sortByContexts, setSortByContexts] = useState<string | null>(null);
  const contextsList = data?.facets[6]?.values;

  const [sortByColor, setSortByColor] = useState<string | null>(null);
  const colorList = data?.facets[14]?.values;

  const [sortBySizes, setSortBySizes] = useState<string | null>(null);
  const sizesList = data?.facets[12]?.values;

  const [sortByQualities, setSortByQualities] = useState<string | null>(null);
  const qualitiesList = data?.facets[1]?.values;

  const [sortByCollection, setSortByCollection] = useState<string | null>(null);
  const collectionList = data?.facets[2]?.values;

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenDrawer(!openDrawer);
    };

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const currentPage = params.get('page');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      const productsData = await api
        .get<Data>('products/list', {
          params: {
            currentpage: currentPage,
            concepts: sortByConcepts,
            sortBy: sort,
            fits: sortByFit,
            colorWithNames: sortByColor,
            contexts: sortByContexts,
            sizes: sortBySizes,
            qualities: sortByQualities,
            collection: sortByCollection,
          },
        })
        .then((res) => res.data);

      setData(productsData);
      setLoadingProducts(false);
    };
    fetchProducts();
  }, [
    currentPage,
    sort,
    sortByConcepts,
    sortByFit,
    sortByColor,
    sortByContexts,
    sortBySizes,
  ]);

  useEffect(() => {
    const fetchClothesData = async () => {
      const categoriesUrl =
        'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list';
      setLoadingCategories(true);
      const categoriesData: Category[] = await fetchData<Category[]>(
        categoriesUrl,
        categoriesOptions
      );
      setCategories(categoriesData);
      setLoadingCategories(false);
    };
    fetchClothesData();
  }, []);

  return (
    <div className='store-sidebar__parent'>
      <div className='store-sidebar'>
        {loadingCategories ? (
          <Loader />
        ) : (
          <ul className='sidebar'>
            {categories.map((category: Category) => (
              <Sidebar category={category} />
            ))}
          </ul>
        )}
      </div>
      <div className='sortby'>
        <SortBy
          sort={sort}
          handleSort={handleSort}
          selectionProps={sortByArray}
        />
        <SortingDrawer
          toggleDrawer={toggleDrawer}
          openDrawer={openDrawer}
          handleSort={handleSort}
          conceptsList={conceptsList}
          sortByConcepts={sortByConcepts}
          setSortByConcepts={setSortByConcepts}
          sortByColor={sortByColor}
          setSortByColor={setSortByColor}
          colorList={colorList}
          sortByFit={sortByFit}
          setSortByFit={setSortByFit}
          fitsList={fitsList}
          sortByContexts={sortByContexts}
          setSortByContexts={setSortByContexts}
          contextsList={contextsList}
          sortBySizes={sortBySizes}
          setSortBySizes={setSortBySizes}
          sizesList={sizesList}
          sortByQualities={sortByQualities}
          setSortByQualities={setSortByQualities}
          qualitiesList={qualitiesList}
          sortByCollection={sortByCollection}
          setSortByCollection={setSortByCollection}
          collectionList={collectionList}
        />
      </div>
      {loadingProducts ? (
        <Loader />
      ) : (
        <>
          <div className='store-parent'>
            <div className='store'>
              {data && data.results.map((item) => <Card item={item} />)}
            </div>
          </div>

          <div>
            <Pagination
              className='pagination'
              count={data?.pagination.numberOfPages}
              variant='outlined'
              defaultPage={1}
              page={currentPage ? +currentPage : +''}
              onChange={(e, p) => navigate('?page=' + p)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Store;
