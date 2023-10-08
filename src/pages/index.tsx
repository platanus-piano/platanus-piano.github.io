import Head from 'next/head';
import { Box } from '@mui/material';
import UpcomingConcerts from '@/components/contents/top/blocks/UpcomingConcerts';
import PastConcerts from '@/components/contents/top/blocks/PastConcerets';
import { client } from '@/configs/microCMS/client';
import { TConcert } from '@/types/concerts';
// import Twitter from '@/components/contents/top/blocks/Twitter';
import MainVisual from '@/components/contents/top/blocks/MainVisual';
import Twitter from '@/components/contents/top/blocks/Twitter';

export default function Home({
  upcoming,
  past,
}: {
  upcoming: TConcert[];
  past: TConcert[];
}) {
  return (
    <>
      <Head>
        <title>TOP | プラタナスの会</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <MainVisual />
        <UpcomingConcerts concerts={upcoming} />
        <PastConcerts concerts={past} sx={{ mt: 5, mb: 5 }} />
        {/* 未完成 */}
        <Twitter />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const upcomingData = await client.get({
    endpoint: 'concerts',
    queries: { limit: 2, filters: 'done[equals]false' },
  });
  const pastData = await client.get({
    endpoint: 'concerts',
    queries: { limit: 3, filters: 'done[equals]true' },
  });

  return {
    props: {
      upcoming: upcomingData.contents,
      past: pastData.contents,
    },
  };
};
