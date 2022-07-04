import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const SizesInternalDrawer = ({
  item,
  sizesList,
  sizes,
  setSizes,
  setSortBySizes,
  setSizesInternalDrawer,
}: any) => {
  let filteredList = sizesList.filter(
    (i: any) => i.code.split('_').at(-1) === item.toLowerCase()
  );

  const [checkedState, setCheckedState] = useState(
    new Array(filteredList.length).fill(false)
  );

  const handleOnChange = (position: any, value: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setSortBySizes(value);
  };

  function convertString(string: string) {
    let option = string.split('_');
    if (option.at(-1) === 'waist') return option[1] + ' inches';
    else if (option.at(-1) === 'homewear' || option.at(-1) === 'kidsfootwear') {
      return option[1];
    } else if (
      option.at(-1) === 'footwear' ||
      option.at(-1) === 'bras' ||
      option.at(-1) === 'womenswear' ||
      option.at(-1) === 'menswear' ||
      option.at(-1) === 'kidswear'
    ) {
      return option[1].toUpperCase();
    }
  }
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              setSizes(true);
              setSizesInternalDrawer(false);
            }}
          >
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
          <ListItemButton onClick={(e) => setSortBySizes(null)}>
            <ListItemIcon>
              <FilterAltOffIcon />
            </ListItemIcon>

            <ListItemText primary={'CLEAR FILTERS'} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {filteredList &&
          filteredList.map(
            ({ code, count, selected }: FacetsValues, index: any) => (
              <ListItem disablePadding>
                <ListItemButton onClick={(e) => setSortBySizes(code)}>
                  <Checkbox
                    checked={checkedState[index]}
                    onChange={(e) => handleOnChange(index, e.target.value)}
                    value={code}
                  />
                  <ListItemText
                    primary={convertString(code)}
                    secondary={count}
                    primaryTypographyProps={{
                      style: { fontFamily: 'Open Sans Condensed' },
                    }}
                    secondaryTypographyProps={{
                      style: { fontFamily: 'Open Sans Condensed' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
      </List>
    </>
  );
};

export default SizesInternalDrawer;
