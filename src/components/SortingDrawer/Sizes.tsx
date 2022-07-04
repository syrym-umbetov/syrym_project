import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from '@mui/material';
import { FacetsValues } from '../../types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SizesInternalDrawer from './SizesInternalDrawer';

const Sizes = ({
  sortBySizes,
  setSortBySizes,
  sizesList,
  sizes,
  setSizes,
  sizesInternalDrawer,
  setSizesInternalDrawer,
  subSizesList,
  subsizes,
  setSubsizes,
}: any) => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={(e) => setSizes(!sizes)}>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        {subSizesList.map((item: string) => (
          <ListItem disablePadding>
            <ListItemButton
              onClick={(e) => {
                setSizesInternalDrawer(!sizesInternalDrawer);
                setSubsizes(item);
              }}
            >
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  style: { fontFamily: 'Open Sans Condensed' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sizes;
