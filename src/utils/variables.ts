import styled from '@emotion/styled';
import { Sort } from '../types';

export const sortByArray: Sort = {
  title: 'SORT BY',
  options: [
    { displayedName: 'LOWEST PRICE', value: 'ascPrice' },
    { displayedName: 'HIGHEST PRICE', value: 'descPrice' },
    { displayedName: 'RECOMMENDED', value: 'stock' },
    { displayedName: 'NEWEST', value: 'newProduct' },
  ],
};

export const ImageWrapper = styled('div')`
  width: 100%;
  img {
    width: 100%;
  }
`;
