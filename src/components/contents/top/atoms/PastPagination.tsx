import React, { useState } from 'react';
import { SxProps } from '@mui/material';
import { useSwiper } from 'swiper/react';
import Pagination from '@/components/parts/Pagination';

type TProps = {
  sx?: SxProps;
  totalCount: number;
};

const PastPagination = (props: TProps) => {
  // states
  const [active, setActive] = useState<number>(1);
  // props
  const { sx, totalCount } = props;
  // hooks
  const swiper = useSwiper();

  swiper.on('slideChange', () => {
    // console.log(swiper.activeIndex);
    // if (active === 3 && swiper.activeIndex === 2) {
    //   setActive(1);
    // } else if (swiper.activeIndex === 0 && active === 1) {
    //   setActive(3);
    // } else {
    //   setActive(swiper.activeIndex + 1);
    // }
    setActive(swiper.activeIndex + 1);
  });

  return (
    <Pagination totalCount={totalCount} currentPage={active} sx={{ ...sx }} />
  );
};

export default PastPagination;
