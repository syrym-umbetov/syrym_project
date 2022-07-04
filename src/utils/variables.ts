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
