import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Sort } from '../../types';

export type SortByProps = {
  sort: string | null;
  handleSort: (event: SelectChangeEvent) => void;
  selectionProps: Sort;
};

const SortBy: FC<SortByProps> = ({ sort, handleSort, selectionProps }) => {
  return (
    <FormControl
      variant='standard'
      sx={{
        minWidth: 200,
        fontFamily: 'Open Sans Condensed',
        marginLeft: '10%',
      }}
    >
      <InputLabel sx={{ fontFamily: 'Open Sans Condensed' }}>
        {selectionProps.title}
      </InputLabel>
      <Select
        value={sort!}
        onChange={handleSort}
        label={selectionProps.title}
        sx={{ fontFamily: 'Open Sans Condensed' }}
      >
        {selectionProps.options.map((item) => (
          <MenuItem
            key={item.displayedName}
            sx={{ fontFamily: 'Open Sans Condensed' }}
            value={item.value}
          >
            {item.displayedName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortBy;
