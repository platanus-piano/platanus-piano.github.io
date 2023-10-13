import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GOOGLE_ANALYTICS_ID, pageview } from '@/configs/googleAnalytics/gtag';

export const usePageView = () => {
  const router = useRouter();
  useEffect(() => {
    if (!GOOGLE_ANALYTICS_ID) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRouteChange = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageview(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
