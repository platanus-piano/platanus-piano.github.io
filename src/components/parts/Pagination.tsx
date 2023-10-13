import React from 'react';
import usePagination from '@mui/material/usePagination';
import { Box, SxProps } from '@mui/material';

type TProps = {
  totalCount: number;
  currentPage: number;
  sx?: SxProps;
};

const Pagination = (props: TProps) => {
  // props
  const { totalCount, currentPage, sx } = props;
  // hooks
  const { items } = usePagination({
    count: totalCount,
    page: currentPage,
  });

  return (
    <Box
      component="ul"
      sx={{
        ...sx,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {items.map(({ page, type, selected, ...item }, index) => {
        console.log(page);
        let children = null;
        if (type === 'page') {
          children = (
            <Box
              sx={{
                width: selected ? '10px' : '10px',
                aspectRatio: 1,
                backgroundColor: selected ? 'green.main' : 'shadowGrey.main',
                borderRadius: '50%',
              }}
              {...item}
            />
          );
        } else {
          children = <Box component="div" />;
        }
        return (
          <Box component="li" key={index}>
            {children}
          </Box>
        );
      })}
    </Box>
  );
};

export default Pagination;
