import SectionTitle from '@/components/parts/SectionTitle';
import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';
import MusicWave from '../atoms/MusicWave';
import { TEvent } from '@/types/events';
import EventItem from '../atoms/EventItem';

type TProps = {
  sx?: SxProps;
  events: TEvent[];
};

const EventPart = (props: TProps) => {
  //props
  const { sx, events } = props;

  // functions
  const ImageTop = (index: number) => {
    const firstTop = 40;
    const between = 200;
    const top = firstTop + index * between;
    return top;
  };
  const Num2Month = (num: number) => {
    const monthList = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'Decenber',
    ];
    const month = monthList[num - 1];
    return month;
  };

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
        pt: 3,
        pb: 3,
      }}
    >
      <SectionTitle title="EVENT" subTitle="イベント" type="green" />
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          minHeight: `${events.length * 200 + 40}px`,
          maxWidth: '800px',
        }}
      >
        <MusicWave sx={{ width: '80%', mr: '20%' }} />
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: `${ImageTop(index)}px`,
              left: '0',
              width: '100%',
              px: '5%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontSize: '48px',
                  fontWeight: '400',
                  color: '#C0C0C0',
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                }}
              >
                {Num2Month(event.month)}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                }}
              >
                <EventItem
                  event={event}
                  sx={{
                    width: '200px',
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EventPart;
