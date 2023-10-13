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
  const aspectRatio = concert.image.width / concert.image.height;
  return (
    <Box
      component="div"
      sx={{
        ...sx,
        width: '100%',
        maxWidth: '500px',
        aspectRatio: `${aspectRatio}`,
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
