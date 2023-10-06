import { Box } from '@mui/material';
import Script from 'next/script';
import React from 'react';

// 未完成
const Twitter = () => {
  return (
    <Box
      component="section"
      sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <a
        className="twitter-timeline"
        data-lang="ja"
        data-theme="light"
        href="https://twitter.com/platanus_piano?ref_src=twsrc%5Etfw"
      >
        tweet by platanux_piano
      </a>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </Box>
  );
};

export default Twitter;
