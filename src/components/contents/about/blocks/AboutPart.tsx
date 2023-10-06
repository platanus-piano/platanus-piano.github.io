import Container from '@/components/parts/Container';
import SectionTitle from '@/components/parts/SectionTitle';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const content = [
  {
    content:
      'プラタナスの会は、東京工業大学の学生・教職員から構成される、ピアノをはじめとした楽器の演奏を楽しむ公認サークルです。',
  },
  {
    content:
      '大学の学園祭に当たる工大祭やすずかけ祭で演奏会を行うほか、クリスマスコンサートや他大学(東大、慶応、洗足音大 etc..)と合同で演奏を行うなど積極的に活動しています。',
  },
  {
    content:
      'ピアノの他にもチェロ、アコースティックギター、フルート、ホルン、ユーフォニアムなどの楽器を演奏するメンバーが所属しており、アンサンブルを楽しんでいます。',
  },
];

const AboutPart = () => {
  return (
    <Box component="section" sx={{ width: '100%', pt: 3 }}>
      <SectionTitle title="About" subTitle="プラタナスの会とは" type="green" />
      <Box
        component="div"
        sx={{
          width: '100%',
          aspectRatio: '16/9',
          position: 'relative',
        }}
      >
        <Image
          src="/about/aboutImg.png"
          alt="piano image"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Container>
        {content.map((item, index) => (
          <Typography
            variant="body2"
            component="p"
            key={index.toString()}
            sx={{ mb: 3 }}
          >
            {item.content}
          </Typography>
        ))}
      </Container>
    </Box>
  );
};

export default AboutPart;
