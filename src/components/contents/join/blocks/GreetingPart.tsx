import Container from '@/components/parts/Container';
import SectionTitle from '@/components/parts/SectionTitle';
import { Box, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type TProps = {
  sx?: SxProps;
};

const content = {
  greet: [
    {
      content:
        'はじめまして。2023年度 部長を務める物質理工学院4年生の吉田朋純です。',
    },
    {
      content: '是非プラタナスの会に参加して、一緒に演奏を楽しみましょう。',
    },
    {
      content: 'お会いできることを楽しみにしております。',
    },
  ],
};

const GreetingPart = (props: TProps) => {
  // props
  const { sx } = props;

  return (
    <Box
      component="section"
      sx={{
        ...sx,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SectionTitle
        title="GREETING"
        subTitle="部長の挨拶"
        type="green"
        sx={{}}
      />
      <Container sx={{ mt: 3 }}>
        {content.greet.map((item, index) => (
          <Typography
            variant="body2"
            component="p"
            key={index.toString()}
            sx={{}}
          >
            {item.content}
          </Typography>
        ))}
      </Container>
      <Box
        sx={{
          width: '90%',
          aspectRatio: '5/1',
          position: 'relative',
          mt: 2,
        }}
      >
        <Image
          src="/join/signImg.png"
          alt="sign image"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};

export default GreetingPart;
