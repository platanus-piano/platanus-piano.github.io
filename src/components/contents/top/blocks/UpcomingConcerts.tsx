import SectionTitle from '@/components/parts/SectionTitle';
import { TConcert } from '@/types/concerts';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import UpcomingItem from '../atoms/UpcomingItem';

type TProps = {
  concerts: TConcert[];
  sx?: SxProps;
};

const UpcomingConcerts = (props: TProps) => {
  const { concerts, sx } = props;
  return (
    <Box
      component="section"
      id="upcoming_jump"
      sx={{
        ...sx,
        width: '100%',
        backgroundColor: 'green.main',
        pt: 5,
        pb: 10,
      }}
    >
      <SectionTitle title="Upcoming" subTitle="今後の演奏会" type="white" />
      <Box
        component="div"
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {concerts.map((concert, index) => (
          <UpcomingItem concert={concert} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingConcerts;
