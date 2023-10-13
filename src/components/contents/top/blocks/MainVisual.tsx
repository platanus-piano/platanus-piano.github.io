import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { basePath } from '@/../next.config';
const BASE_PATH = basePath ? basePath : '';

const MainVisual = () => {
  // state
  const [height, setHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // functions
  const hancleScroll = () => {
    setScrollY(window.scrollY);
  };

  // effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', hancleScroll);
    return () => {
      window.removeEventListener('scroll', hancleScroll);
    };
  }, []);

  const overlayOpacity = Math.min(scrollY / (height * 0.8), 1);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        backgroundColor: '#000000',
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
          // minWidth: '100%',
          // minHeight: '100%',
          // width: 'auto',
          // height: 'auto',
          width: '100%',
          height: '100%',
          zIndex: 1,
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
        }}
      >
        <source src="/movie/movie_for_phone_ver2.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(38,38, 38, ${overlayOpacity})`,
          zIndex: 3,
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '300px' },
          aspectRatio: '2/1',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
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
  );
};

export default MainVisual;
