import SectionTitle from '@/components/parts/SectionTitle';
import { Box, SxProps } from '@mui/material';
import React from 'react';

type TProps = {
  sx?: SxProps;
};

const EventPart = (props: TProps) => {
  const { sx } = props;
  return (
    <Box
      component="section"
      id="event_jump"
      sx={{
        ...sx,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SectionTitle title="EVENT" subTitle="イベント" type="green" />
    </Box>
  );
};

export default EventPart;
