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
import { FacetsValues } from '../../../types';

const Color = ({
  sortByColor,
  setSortByColor,
  colorList,
  color,
  setColor,
}: any) => {
  const [checkedState, setCheckedState] = useState(
    new Array(colorList.length).fill(false)
  );

  const handleOnChange = (position: any, value: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setSortByColor(value);
  };
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={(e) => setColor(!color)}>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {colorList.map(
          ({ code, count, selected }: FacetsValues, index: any) => (
            <ListItem key={code} disablePadding>
              <ListItemButton>
                <Checkbox
                  checked={checkedState[index]}
                  onChange={(e) => handleOnChange(index, e.target.value)}
                  value={code}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <ListItemText
                  primary={
                    code.charAt(0).toUpperCase() + code.slice(1).split('_')[0]
                  }
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

export default Color;
