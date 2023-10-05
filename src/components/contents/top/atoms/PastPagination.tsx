import React, { useState } from 'react';
import { SxProps } from '@mui/material';
import { useSwiper } from 'swiper/react';
import Pagination from '@/components/parts/Pagination';

type TProps = {
  sx?: SxProps;
  totalCount: number;
};

const PastPagination = (props: TProps) => {
  const [active, setActive] = useState<number>(1);
  // props
  const { sx, totalCount } = props;
  // hooks
  const swiper = useSwiper();

  swiper.on('slideChange', () => {
    setActive(swiper.activeIndex + 1);
  });

  return (
    <Pagination totalCount={totalCount} currentPage={active} sx={{ ...sx }} />
  );
};

export default PastPagination;
