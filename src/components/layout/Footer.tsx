import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '120px',
        backgroundColor: 'black.main',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          px: 1,
        }}
      >
        <Box></Box>
        <Box
          sx={{
            width: '160px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '5/2',
              position: 'relative',
            }}
          >
            <Image
              src="/logo.png"
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
