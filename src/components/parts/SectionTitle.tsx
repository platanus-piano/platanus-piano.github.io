import theme from '@/configs/mui/theme';
import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';

type TProps = {
  title: string;
  subTitle: string;
  sx?: SxProps;
  type?: 'green' | 'white';
};

const SectionTitle = (props: TProps) => {
  // props
  const { title, subTitle, sx, type } = props;
  // color
  let color: { title: string; subTitle: string };
  switch (type) {
    case 'green':
      color = {
        title: theme.palette.green.main,
        subTitle: theme.palette.text.primary,
      };
      break;
    case 'white':
      color = {
        title: '#ffffff',
        subTitle: '#ffffff',
      };
      break;
    default:
      color = {
        title: theme.palette.text.primary,
        subTitle: theme.palette.text.primary,
      };
      break;
  }

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
          borderBottom: `1px solid ${color.title}`,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          color={color.title}
          sx={{ fontFamily: 'IBM Plex Sans, sans-serif', pb: 3 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color={color.subTitle}
          sx={{ pb: 2 }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionTitle;
