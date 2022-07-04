import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Color from './filterComponents/Color';
import CommonFilter from './CommonFilter';
import Sizes from './Sizes';
import SizesInternalDrawer from './SizesInternalDrawer';

export default function SortingDrawer({
  toggleDrawer,
  openDrawer,
  handleSort,
  conceptsList,
  sortByConcepts,
  setSortByConcepts,
  sortByColor,
  setSortByColor,
  colorList,
  sortByFit,
  setSortByFit,
  fitsList,
  sortByContexts,
  setSortByContexts,
  contextsList,
  sortBySizes,
  setSortBySizes,
  sizesList,
  sortByQualities,
  setSortByQualities,
  qualitiesList,
  sortByCollection,
  setSortByCollection,
  collectionList,
}: any) {
  const [color, setColor] = useState(false);
  const [contexts, setContexts] = useState(false);
  const [concepts, setConcepts] = useState(false);
  const [fits, setFits] = useState(false);
  const [qualities, setQualities] = useState(false);
  const [collection, setCollection] = useState(false);

  const [sizes, setSizes] = useState(false);
  const [sizesInternalDrawer, setSizesInternalDrawer] = useState(false);
  const [subsizes, setSubsizes] = useState(null);

  const subSizesList = [
    'Homewear',
    'Waist',
    'Womenswear',
    'Footwear',
    'Kidsfootwear',
    'Bras',
    'Menswear',
    'Kidswear',
  ];
  const list = () => (
    <List>
      {[
        'Context',
        'Color',
        'Concepts',
        'Fits',
        'Sizes',
        'Quality',
        'Collection',
      ].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            onClick={(e) =>
              text === 'Color'
                ? setColor(!color)
                : text === 'Context'
                ? setContexts(!contexts)
                : text === 'Concepts'
                ? setConcepts(!concepts)
                : text === 'Fits'
                ? setFits(!fits)
                : text === 'Sizes'
                ? setSizes(!sizes)
                : text === 'Quality'
                ? setQualities(!qualities)
                : (text = 'Collection')
                ? setCollection(!collection)
                : ''
            }
          >
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                style: { fontFamily: 'Open Sans Condensed' },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div style={{ marginLeft: '10%' }}>
      <React.Fragment key={'top'}>
        <Stack direction='row'>
          <Button
            variant='outlined'
            onClick={toggleDrawer('top', true)}
            startIcon={<FilterAltIcon />}
            sx={{
              fontFamily: 'Open Sans Condensed',
              color: 'black',
              borderColor: 'black',
            }}
          >
            FILTER & SORT
          </Button>
        </Stack>
        <SwipeableDrawer
          anchor={'top'}
          open={openDrawer}
          onClose={toggleDrawer('top', false)}
          onOpen={toggleDrawer('top', true)}
        >
          <Box sx={{ width: 'auto', margin: 5 }} role='presentation'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                variant='h4'
                gutterBottom
                component='div'
                sx={{ fontFamily: 'Open Sans Condensed' }}
              >
                {color
                  ? 'Color'
                  : contexts
                  ? 'Context'
                  : concepts
                  ? 'Concepts'
                  : fits
                  ? 'Fits'
                  : sizes
                  ? 'Sizes'
                  : qualities
                  ? 'Quality'
                  : collection
                  ? 'Collection'
                  : 'FILTER & SORT'}
              </Typography>
              <CloseIcon onClick={toggleDrawer('top', false)} />
            </div>
            {color ? (
              <Color
                sortByColor={sortByColor}
                setSortByColor={setSortByColor}
                colorList={colorList}
                color={color}
                setColor={setColor}
              />
            ) : contexts ? (
              <CommonFilter
                sortByFilter={sortByContexts}
                setSortByFilter={setSortByContexts}
                filterList={contextsList}
                openFilter={contexts}
                setOpenFilter={setContexts}
              />
            ) : concepts ? (
              <CommonFilter
                sortByFilter={sortByConcepts}
                setSortByFilter={setSortByConcepts}
                filterList={conceptsList}
                openFilter={concepts}
                setOpenFilter={setConcepts}
              />
            ) : fits ? (
              <CommonFilter
                sortByFilter={sortByFit}
                setSortByFilter={setSortByFit}
                filterList={fitsList}
                openFilter={fits}
                setOpenFilter={setFits}
              />
            ) : sizes ? (
              sizesInternalDrawer ? (
                (subsizes === 'Waist' ||
                  subsizes === 'Homewear' ||
                  subsizes === 'Womenswear' ||
                  subsizes === 'Footwear' ||
                  subsizes === 'Kidsfootwear' ||
                  subsizes === 'Bras' ||
                  subsizes === 'Menswear' ||
                  subsizes === 'Kidswear') && (
                  <SizesInternalDrawer
                    item={subsizes}
                    sizesList={sizesList}
                    sizes={sizes}
                    setSizes={setSizes}
                    setSortBySizes={setSortBySizes}
                    setSizesInternalDrawer={setSizesInternalDrawer}
                  />
                )
              ) : (
                <Sizes
                  sortBySizes={sortBySizes}
                  setSortBySizes={setSortBySizes}
                  sizesList={sizesList}
                  sizes={sizes}
                  setSizes={setSizes}
                  sizesInternalDrawer={sizesInternalDrawer}
                  setSizesInternalDrawer={setSizesInternalDrawer}
                  subSizesList={subSizesList}
                  subsizes={subsizes}
                  setSubsizes={setSubsizes}
                />
              )
            ) : qualities ? (
              <CommonFilter
                sortByFilter={sortByQualities}
                setSortByFilter={setSortByQualities}
                filterList={qualitiesList}
                openFilter={qualities}
                setOpenFilter={setQualities}
              />
            ) : collection ? (
              <CommonFilter
                sortByFilter={sortByCollection}
                setSortByFilter={setSortByCollection}
                filterList={collectionList}
                openFilter={collection}
                setOpenFilter={setCollection}
              />
            ) : (
              list()
            )}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
