import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { CategoriesProps } from '../../types';

const Wrapper = styled('div')`
  position: absolute;
  background-color: #faf9f8;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 80vh;
  padding: 10px 0 5px 10px;
  margin: 0 auto;
  z-index: 1;
  ul {
    font-size: '20px';
    font-weight: 700;
    list-style: none;
    li {
      font-weight: 300;
    }
  }
`;

const Categories: FC<CategoriesProps> = ({ category, open, setOpen }) => {
  const { CatName, CategoryValue, CategoriesArray, tagCodes } = category;
  console.log(CategoriesArray);

  return (
    <Wrapper>
      {CategoriesArray &&
        CategoriesArray.map((item) => (
          <ul
            key={item.CatName}
            onMouseEnter={(e) => setOpen(true)}
            onMouseLeave={(e) => setOpen(false)}
          >
            {item.CatName}
            {item &&
              item.CategoriesArray &&
              item.CategoriesArray.map((list) => (
                <li key={list.CatName} style={{ marginLeft: '20px' }}>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/categories/${CategoryValue}/${item.CategoryValue}/${list.CategoryValue}`}
                  >
                    {list.CatName}
                  </Link>
                </li>
              ))}
          </ul>
        ))}
    </Wrapper>
  );
};

export default Categories;
