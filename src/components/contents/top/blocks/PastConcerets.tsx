import SectionTitle from '@/components/parts/SectionTitle';
import { TConcert } from '@/types/concerts';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import PastItem from '../atoms/PastItem';
// import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperControllButton from '../atoms/SwiperControllButton';

type TProps = {
  concerts: TConcert[];
  sx?: SxProps;
};

const PastConcerts = (props: TProps) => {
  // props
  const { concerts, sx } = props;

  return (
    <Box
      component="section"
      sx={{
        ...sx,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SectionTitle title="Past Concerts" subTitle="過去の演奏会" sx={{}} />
      <Box
        component="div"
        sx={{
          width: { xs: '300px' },
          borderStyle: 'solid',
          borderWidth: '0px 1px 0px 1px',
          borderColor: 'black.main',
        }}
      >
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          loop={true}
        >
          {concerts.map((concert, index) => (
            <SwiperSlide key={index.toString()}>
              <PastItem concert={concert} />
            </SwiperSlide>
          ))}
          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              px: 2,
            }}
          >
            <SwiperControllButton type="prev" />
            <SwiperControllButton type="next" />
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};

export default PastConcerts;
