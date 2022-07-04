import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from '@mui/material';
import { FacetsValues } from '../../types';

const CommonFilter = ({
  sortByFilter,
  setSortByFilter,
  filterList,
  openFilter,
  setOpenFilter,
}: any) => {
  const [checkedState, setCheckedState] = useState(
    new Array(filterList.length).fill(false)
  );

  const handleOnChange = (position: any, value: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setSortByFilter(value);
  };

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={(e) => setOpenFilter(!openFilter)}>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
          <ListItemButton onClick={(e) => setSortByFilter(null)}>
            <ListItemIcon>
              <FilterAltOffIcon />
            </ListItemIcon>
            CLEAR FILTERS
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {filterList.map(
          ({ code, count, selected }: FacetsValues, index: any) => (
            <ListItem key={code} disablePadding>
              <ListItemButton sx={{ fontFamily: 'Open Sans Condensed' }}>
                <Checkbox
                  checked={checkedState[index]}
                  onChange={(e) => handleOnChange(index, e.target.value)}
                  value={code}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <ListItemText
                  className='listItemText'
                  primary={code}
                  primaryTypographyProps={{
                    style: { fontFamily: 'Open Sans Condensed' },
                  }}
                  secondaryTypographyProps={{
                    style: { fontFamily: 'Open Sans Condensed' },
                  }}
                  secondary={count}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

export default CommonFilter;
