import SectionTitle from '@/components/parts/SectionTitle';
import { TConcert } from '@/types/concerts';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import UpcomingItem from '../atoms/UpcomingItem';
import Container from '@/components/parts/Container';

type TProps = {
  concerts: TConcert[];
  sx?: SxProps;
};

const UpcomingConcerts = (props: TProps) => {
  const { concerts, sx } = props;
  return (
    <Box
      component="section"
      sx={{
        ...sx,
        width: '100%',
      }}
    >
      <SectionTitle title="Upcoming Concerts" subTitle="今後の演奏会" />
      <Container>
        {concerts.map((concert, index) => (
          <UpcomingItem concert={concert} key={index} />
        ))}
      </Container>
    </Box>
  );
};

export default UpcomingConcerts;
