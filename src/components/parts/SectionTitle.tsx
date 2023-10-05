import theme from '@/configs/mui/theme';
import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';

type TProps = {
  title: string;
  subTitle: string;
  sx?: SxProps;
};

const SectionTitle = (props: TProps) => {
  const { title, subTitle, sx } = props;
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
          ...sx,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: `1px solid ${theme.palette.green.main}`,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          color="green.main"
          sx={{ fontFamily: 'IBM Plex Sans, sans-serif', pb: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ pb: 2 }}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionTitle;
