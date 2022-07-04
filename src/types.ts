import { Dispatch, SetStateAction } from 'react';

export interface Images {
  url: string;
}
export interface Price {
  currencyIso: string;
  formattedValue: string;
  priceType: string;
  type: string;
  value: number;
}

export interface Articles {
  code: string;
  color: Color;
  comingSoon: boolean;
  dummy: boolean;
  ecoTaxValue: number;
  genArticle: string;
  images: Images[];
  logoPicture: Images[];
  rgbColor: string;
}

export interface Color {
  code: string;
  filterName: string;
  hybrisCode: string;
  text: string;
}

export interface ItemType {
  articleCodes: string[];
  articleColorNames: string[];
  articles: Articles[];
  brandName: string;
  categories?: [];
  categoryName: string;
  code: string;
  comingSoon: boolean;
  concept: string[];
  defaultArticle: {};
  dummy: boolean;
  name: string;
  images: Images[];
  price: Price;
  rgbColor: string;
  pk: string;
  linkPdp: string;
}

export type FacetsValues = {
  code: string;
  count: number;
  selected: boolean;
};

export type Facets = {
  code: string;
  priority: number;
  category: boolean;
  multiSelect: boolean;
  visible: boolean;
  values: FacetsValues[];
};

export interface Data {
  baseUrl: string;
  facets: Facets[];
  freeTextSearch?: string;
  pagination: Pagination;
  results: ItemType[];
}

export type Pagination = {
  currentPage: number;
  numberOfPages: number;
  pageSize: number;
  sort: string;
  totalNumberOfResults: number;
  totalNumberOfResultsUnfiltered: number;
};

export type Category = {
  CatName: string;
  CategoryValue: string;
  CategoriesArray: CategoriesArray[];
  tagCodes: string[];
};

export type CategoriesArray = {
  CatName: string;
  CategoriesArray?: CategoriesArray[];
  CategoryValue: string;
  tagCodes: [];
};

export type Sort = {
  title: string;
  options: { displayedName: string; value: string | number }[];
};

export interface CardProps {
  item: ItemType;
}

export interface CategoriesProps {
  category: Category;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface sidebarProps {
  category: Category;
}

export type galleryDetails = {
  url: string;
};

export type articlesListColor = {
  code: string;
  text: string;
  rgbColor: string;
};

export type articlesList = {
  galleryDetails: galleryDetails[];
  name: string;
  description: string;
  color: articlesListColor;
  whitePrice: whitePrice;
  colourDescription: string;
};

export type Detail = {
  ancestorProductCode: string;
  articlesList: articlesList[];
  assortmentTypeKey: string;
  baseProductCode: string;
  code: string;
  color: {};
  constructionDescr: string;
  countryOfProduction: string;
  customerGroup: string;
  description: string;
  fits: string[];
  functions: [];
  importedBy: string;
  importedDate: string;

  inStock: boolean;
  lengthCollection: {}[];
  mainCategory: {};
  materialDetails: {}[];
  multipack: boolean;
  name: string;
  netQuantity: string;
  newArrival: boolean;
  newProduct: boolean;
  presentationTypes: string;
  priceType: string;
  productCountryOfProduction: string;
  productKey: string;
  productTypeName: string;
  productUrl: string;
  redPrice: whitePrice;
  rootCategoryPath: string;
  sapProductName: string;
  sellingAttributes: [];
  showGarmentsInfo: boolean;
  showPriceMarker: boolean;
  styleCollection: {};
  supercategories: [];
  swatchesType: string;
  whitePrice: whitePrice;
  yearOfProduction: string;
};

export type whitePrice = {
  price: number;
  currency: string;
  referenceFlag: boolean;
  startDate: number;
  endDate: number;
};

export type CartItemProps = {
  id: number;
  quantity: number;
};

export type DetailType = {
  responseStatusCode: string;
  product: Detail;
};
