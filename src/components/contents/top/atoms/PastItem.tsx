import { useFormat } from '@/hooks/format';
import { TConcert } from '@/types/concerts';
import { Button, SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import RoomIcon from '@mui/icons-material/Room';

type TProps = {
  concert: TConcert;
  sx?: SxProps;
};

const PastItem = (props: TProps) => {
  // props
  const { concert, sx } = props;

  // hooks
  const { FormatDate } = useFormat();

  // functions
  const handleClick = () => {};

  return (
    <Box
      component="div"
      sx={{
        // width: '100%', // ←これがあると、swiperのスライドがずれる
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 5 },
        pb: 2,
      }}
    >
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
      <Typography variant="body1" component="p" sx={{}}>
        {concert.title}
      </Typography>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <EventIcon sx={{ width: '50px', textAlign: 'center' }} />
        <Typography variant="body2" component="p" sx={{}}>
          {FormatDate(concert.date)}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <RoomIcon sx={{ width: '50px', textAlign: 'center' }} />
        <Typography variant="body2" component="p" sx={{}}>
          {concert.place}
        </Typography>
      </Box>
      <Button
        color="yellow"
        variant="contained"
        sx={{
          borderRadius: '0px',
          px: 3,
          boxShadow: 'none',
        }}
        onClick={handleClick}
      >
        <Typography variant="body2" component="p" sx={{}}>
          {'MORE>>'}
        </Typography>
      </Button>
    </Box>
  );
};

export default PastItem;
