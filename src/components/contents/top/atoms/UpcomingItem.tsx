import { TConcert } from '@/types/concerts';
import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

type TProps = {
  concert: TConcert;
  sx?: SxProps;
};

const UpcomingItem = (props: TProps) => {
  const { concert, sx } = props;
  return (
    <Box
      component="div"
      sx={{
        ...sx,
        width: '100%',
        aspectRatio: '1/1',
        position: 'relative',
      }}
    >
      <Image
        src={concert.image.url}
        alt={concert.title}
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default UpcomingItem;
