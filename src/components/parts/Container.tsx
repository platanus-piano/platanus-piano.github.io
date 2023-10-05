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
        ...sx,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          width: { xs: '95%', sm: '90%' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
