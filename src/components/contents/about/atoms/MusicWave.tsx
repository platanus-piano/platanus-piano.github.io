import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import { basePath } from '@/../next.config';
const BASE_PATH = basePath ? basePath : '';

type TProps = {
  sx?: SxProps;
};

const MusicWave = (props: TProps) => {
  // props
  const { sx } = props;

  return (
    <Box
      sx={{
        ...sx,
        position: 'relative',
        aspectRatio: '268/1286',
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Image
        src={`${BASE_PATH}/about/musicWave.png`}
        alt="music wave"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default MusicWave;
