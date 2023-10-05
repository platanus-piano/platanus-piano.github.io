import { Button, SxProps, Typography } from '@mui/material';
import React from 'react';
import { useSwiper } from 'swiper/react';

type TProps = {
  type: 'prev' | 'next';
  sx?: SxProps;
};

const SwiperControllButton = (props: TProps) => {
  // props
  const { type, sx } = props;
  // hooks
  const swiper = useSwiper();
  // functions
  const handleSwiperNext = () => {
    console.log('next');
    swiper.slideNext();
    // console.log(swiper.activeIndex);
  };
  const handleSwiperPrev = () => {
    console.log('prev');
    swiper.slidePrev();
    // console.log(swiper.activeIndex);
  };

  return (
    <Button
      variant="contained"
      color="black"
      sx={{
        ...sx,
        borderRadius: '0px',
      }}
      onClick={type === 'prev' ? handleSwiperPrev : handleSwiperNext}
    >
      <Typography variant="body2" component="span">
        {type === 'prev' ? '<' : '>'}
      </Typography>
    </Button>
  );
};

export default SwiperControllButton;
