import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MainVisual = () => {
  // state
  const [height, setHeight] = useState(0);

  // effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, []);
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: `${height - 50}px`,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <source src="/movie/MVDemo.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '300px' },
          aspectRatio: '2/1',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
  );
};

export default MainVisual;
