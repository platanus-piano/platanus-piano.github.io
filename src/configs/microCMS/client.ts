import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: String(process.env.MICROCMS_SERVIDE_DOMAIN),
  apiKey: String(process.env.MICROCMS_API_KEY),
});
