import React, { FC, useCallback, useRef, useState } from 'react';
import './Sidebar.css';
import Categories from '../Categories/Categories';
import { sidebarProps } from '../../types';

const Sidebar: FC<sidebarProps> = ({ category }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<any>(null);

  const handleOpen = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    timeout.current = setTimeout(() => {
      setOpen(false);
    }, 400);
  }, []);

  const handleChild = useCallback(
    (value: boolean) => {
      if (value) {
        handleOpen();
      } else {
        handleClose();
      }
    },
    [handleClose, handleOpen]
  );

  return (
    <>
      <li
        className='category__list'
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        {category.CatName}
      </li>
      {open && (
        <Categories category={category} open={open} setOpen={handleChild} />
      )}
    </>
  );
};

export default Sidebar;
