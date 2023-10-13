export const GOOGLE_ANALYTICS_ID = 'G-CT4MDW1800';

export const pageview = (url: string) => {
  if (!GOOGLE_ANALYTICS_ID) return;
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  if (!GOOGLE_ANALYTICS_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
