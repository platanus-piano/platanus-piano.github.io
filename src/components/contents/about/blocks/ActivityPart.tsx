import Container from '@/components/parts/Container';
import SectionTitle from '@/components/parts/SectionTitle';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const content = {
  first: [
    {
      content:
        'プラタナスの会の基本的な活動は、大学の学園祭にあたるすずかけ祭や工大祭でコンサートを行うことです。',
    },
    {
      cotnent:
        'これらに加えて、季節ごとに新入生歓迎コンサートやクリスマスコンサートなどを開催しています。',
    },
    {
      content:
        'さらに他大学との交流も盛んです。都内国公立７大学が参加する共同コンサート「夏の響宴」に参加したり、 慶應義塾大学と合同で行うアンサンブルイベントで演奏することもできます。',
    },
  ],
  second: [
    {
      content:
        '普段の練習は、月に２回ほど大岡山キャンパス内の講堂で練習会を行っており、設置してあるグランドピアノを弾くことができます。',
    },
    {
      content:
        'また、プラタナスの会は部室を所有しており、 部室内の電子ピアノ２台、アップライトピアノを自由に使うことができます。ピアノ以外の楽器であっても、練習会や部室で自由に練習できます。',
    },
  ],
};

const ActivityPart = () => {
  return (
    <Box component="section" id="activity_jump" sx={{ width: '100%' }}>
      <SectionTitle title="Activity" subTitle="活動内容" type="green" />
      <Container sx={{ mt: 3 }}>
        {content.first.map((item, index) => (
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
      <Box
        component="div"
        sx={{
          width: '100%',
          aspectRatio: '16/7',
          position: 'relative',
        }}
      >
        <Image
          src="/about/activityImg.png"
          alt="concert image"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Container sx={{ mt: 3 }}>
        {content.second.map((item, index) => (
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

export default ActivityPart;
