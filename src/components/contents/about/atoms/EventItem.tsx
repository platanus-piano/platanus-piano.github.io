import { TEvent } from '@/types/events';
import { Box, SxProps } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type TProps = {
  event: TEvent;
  sx?: SxProps;
};

const EventItem = (props: TProps) => {
  const { event, sx } = props;
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '235/164',
          position: 'relative',
        }}
      >
        <Image
          src={event.image.url}
          alt={event.title}
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '15px',
          }}
        />
      </Box>
    </Box>
  );
};

export default EventItem;
