import Container from '@/components/parts/Container';
import SectionTitle from '@/components/parts/SectionTitle';
import { Box, Button, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MemberTable from '../atoms/MemberTable';

type TProps = {
  sx?: SxProps;
};

const content = {
  invitation: [
    {
      content: '入会を考えている方も、まだ迷っている方も、',
    },
    {
      content: 'まずはこちらのオープンチャットに参加してください！',
    },
  ],
  first: [
    {
      content: 'プラタナスの会はいつでも会員を募集しております。',
    },
    {
      content:
        '東京工業大学に属する方なら、学士・修士・博士・教職員や学年を問わず入会できます。年度の途中であっても問題ありません。 ',
    },
    {
      content: '2024年度の学年ごとの人数は以下のようになっています。',
    },
  ],
  second: [
    // {
    //   content:
    //     '学年人数学士1年生10学士2年生17学士3年生3学士4年生1修士・博士4教職員若干名',
    // },
    {
      content:
        '演奏楽器・楽器経験も不問です。入会してから新しくピアノを始めたメンバーもいます。また、他サークルとの兼部も問題ありません。',
    },
    {
      content:
        '備品購入や設備維持のため、5000円/年の会費を頂いており、基本的には入会した時点で当該年度分を徴収する形になります。入会希望は公式twitterからDMにて随時受け付けています。',
    },
  ],
};

const JoinPart = (props: TProps) => {
  // props
  const { sx } = props;
  // functions
  const JoinOpenChat = () => {
    console.log('clicked');
  };

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
        pt: 3,
      }}
    >
      <SectionTitle
        title="JOIN"
        subTitle="入会案内"
        type="green"
        sx={{
          mb: 2,
        }}
      />

      <Box
        sx={{
          width: '100%',
          backgroundColor: 'green.light',
          pb: 5,
        }}
      >
        <Box
          sx={{
            width: '100%',
            aspectRatio: '390/227',
            position: 'relative',
          }}
        >
          <Image
            src="/join/joinImg.png"
            alt="join image"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
        <Container sx={{ gap: 2 }}>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: '#ffffff',
              mt: 3,
            }}
          >
            {content.invitation.map((item, index) => (
              <span key={index.toString()}>{item.content}</span>
            ))}
          </Typography>
          <Button
            variant="outlined"
            color="green"
            sx={{
              borderRadius: '0px',
              py: 2,
            }}
            onClick={JoinOpenChat}
          >
            <Typography variant="body2" component="span">
              <span>新歓公式オープンチャットに</span>
              <br />
              <span>参加する</span>
            </Typography>
          </Button>
        </Container>
      </Box>
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
        <MemberTable
          sx={{
            width: { xs: '200px' },
          }}
        />
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

export default JoinPart;
