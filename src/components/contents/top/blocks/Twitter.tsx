import { Box } from '@mui/material';
import Script from 'next/script';
import React from 'react';

// 未完成
const Twitter = () => {
  return (
    <Box
      component="section"
      sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 5 }}
    >
      <a
        className="twitter-timeline"
        data-width="300"
        data-height="500"
        href="https://twitter.com/platanus_piano?ref_src=twsrc%5Etfw"
      >
        tweet by platanux_piano
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </Box>
  );
};

export default Twitter;
