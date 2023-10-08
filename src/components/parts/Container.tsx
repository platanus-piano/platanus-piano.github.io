import { Box, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode | ReactNode[];
  sx?: SxProps;
};

const Container = (props: TProps) => {
  const { children, sx } = props;
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          ...sx,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: {
            xs: '300px',
            sm: '500px',
            md: '700px',
            lg: '800px',
            xl: '1000px',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
