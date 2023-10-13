import { TMenuDrawerGroup } from '@/types/menuDrawer';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { basePath } from '@/../next.config';
const BASE_PATH = basePath ? basePath : '';

const Footer = () => {
  const router = useRouter();

  const menuInfo: TMenuDrawerGroup[] = [
    {
      groupName: 'Top',
      contents: [
        {
          name: 'TOP',
          onClick: () => router.push('/'),
          primary: true,
        },
      ],
    },
    {
      groupName: 'Concerts',
      contents: [
        {
          name: 'Concerts',
          onClick: () => router.push('/#upcoming_jump'),
          primary: true,
        },
        {
          name: 'Upcoming',
          onClick: () => router.push('/#upcoming_jump'),
          primary: false,
        },
        {
          name: 'Past',
          onClick: () => router.push('/#past_jump'),
          primary: false,
        },
      ],
    },
    {
      groupName: 'About',
      contents: [
        {
          name: 'About',
          onClick: () => router.push('/about'),
          primary: true,
        },
        {
          name: 'Activity',
          onClick: () => router.push('/about#activity_jump'),
          primary: false,
        },
        {
          name: 'Event',
          onClick: () => router.push('/about#event_jump'),
          primary: false,
        },
      ],
    },
    {
      groupName: 'Join',
      contents: [
        {
          name: 'Join',
          onClick: () => router.push('/join'),
          primary: true,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'black.main',
        pt: 3,
        pb: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
          pr: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: '180px',
              sm: '300px',
              md: '400px',
              lg: '500px',
              xl: '600px',
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}
        >
          {menuInfo.map((group, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: { xs: 1, sm: 2 },
              }}
            >
              {group.contents.map((content, contentIndex) => (
                <Button
                  onClick={content.onClick}
                  key={contentIndex}
                  sx={{
                    width: { xs: '60px' },
                    textAlign: 'center',
                    textTransform: 'none',
                    m: 0,
                    p: 0,
                  }}
                >
                  <Typography
                    component="span"
                    color="black.contrastText"
                    sx={{
                      fontSize: '12px',
                      fontWeight: content.primary ? '700' : '400',
                    }}
                  >
                    {content.name}
                  </Typography>
                </Button>
              ))}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: '130px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '5/2',
              position: 'relative',
              mt: 1,
            }}
          >
            <Image
              src={`${BASE_PATH}/logo.png`}
              alt="logo"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography
          component="p"
          color="#ffffff"
          sx={{
            fontSize: '8px',
            fontWeight: '400',
            textAlign: 'center',
          }}
        >
          Copyright 2023 Tokyo Tech プラタナスの会, All Rights Reserved.
        </Typography>
        <Typography
          component="p"
          color="#ffffff"
          sx={{
            fontSize: '8px',
            fontWeight: '400',
            textAlign: 'center',
          }}
        >
          Designed by Genki Oyafuso, Yuya Sakashita, Kaishu Gamo.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
